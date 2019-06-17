import React, { Component } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import TempData from './TempData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      firstLoad: true
    };
    this.classes = this.useStyles();
    this.loadAppData();
  }

  useStyles = () => makeStyles(theme => ({
    progress: {
      margin: theme.spacing(2),
    },
  }));

  loadAppData = () => {
    fetch('https://cors-anywhere.herokuapp.com/http://86.122.193.127:8010/xml/ix.xml')
      .then(response => response.text())
      .then(str => (new window.DOMParser()).parseFromString(str, "application/xml"))
      .then(data => {
        if (this.state.firstLoad) {
          this.setState(state => { return { isLoading: false } });
          this.setState(state => { return { firstLoad: false } });
        }
        this.setState(state => {
          return {
            xmlData: this.xmlToJson(data).response
          };
        });
      })
      .catch(reason => {
        this.setState(state => { return { isLoading: false } });
        this.setState(state => { return { firstLoad: false } });
        this.setState(state => { return { error: true } });
      });
  };

  render() {
    return (
      <div className='App' >
        {
          this.state.isLoading ?
            <CircularProgress className={this.classes.progress} /> :
            <TempData xmlData={this.state.error ? this.state.error : this.state.xmlData} />
        }
      </div>
    );
  }

  // Changes XML to JSON
  // Modified version from here: http://davidwalsh.name/convert-xml-json
  xmlToJson(xml) {

    // Create the return object
    var obj = {};

    if (xml.nodeType === 1) { // element
      // do attributes
      if (xml.attributes.length > 0) {
        obj["@attributes"] = {};
        for (var j = 0; j < xml.attributes.length; j++) {
          var attribute = xml.attributes.item(j);
          obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType === 3) { // text
      obj = xml.nodeValue;
    }

    // do children
    // If just one text node inside
    if (xml.hasChildNodes() && xml.childNodes.length === 1 && xml.childNodes[0].nodeType === 3) {
      obj = xml.childNodes[0].nodeValue;
    }
    else if (xml.hasChildNodes()) {
      for (var i = 0; i < xml.childNodes.length; i++) {
        var item = xml.childNodes.item(i);
        var nodeName = item.nodeName;
        if (typeof (obj[nodeName]) == "undefined") {
          obj[nodeName] = this.xmlToJson(item);
        } else {
          if (typeof (obj[nodeName].push) == "undefined") {
            var old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(this.xmlToJson(item));
        }
      }
    }
    return obj;
  }
}

export default App;
