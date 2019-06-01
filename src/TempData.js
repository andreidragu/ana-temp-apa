import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TempCard from './TempCard';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
});

class TempData extends Component {
    render() {
        const { classes, xmlData } = this.props;
        const temp1 = xmlData ? xmlData.sec0 : '-',
            temp2 = xmlData ? xmlData.sec1 : '-',
            temp3 = xmlData ? xmlData.sec2 : '-',
            temp4 = xmlData ? xmlData.sec3 : '-',
            temp5 = xmlData ? xmlData.sec4 : '-';

        return (
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper} style={{ backgroundColor: 'orange' }}>
                            <TempCard name='Bazin 1' temp={temp1}></TempCard>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper} style={{ backgroundColor: 'skyblue' }}>
                            <TempCard name='Bazin 2' temp={temp2}></TempCard>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper} style={{ backgroundColor: 'yellow' }}>
                            <TempCard name='Bazin 3' temp={temp3}></TempCard>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper} style={{ backgroundColor: 'lightseagreen' }}>
                            <TempCard name='Bazin 4' temp={temp4}></TempCard>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper} style={{ backgroundColor: 'lightcoral' }}>
                            <TempCard name='Bazin 5' temp={temp5}></TempCard>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

TempData.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TempData);