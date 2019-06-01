import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TempCard from './TempCard';

const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: '90vw'
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
});

class TempData extends Component {
    render() {
        const { classes, xmlData } = this.props;
        const temp1 = xmlData ? xmlData.sec0 + '°C' : '-',
            temp2 = xmlData ? xmlData.sec1 + '°C' : '-',
            temp3 = xmlData ? xmlData.sec2 + '°C' : '-',
            temp4 = xmlData ? xmlData.sec3 + '°C' : '-',
            temp5 = xmlData ? xmlData.sec4 + '°C' : '-';

        const stateON = 'PORNIT',
            stateOFF = 'OPRIT';
        const state1 = xmlData && xmlData.di0 === 'up' ? true : false,
            state2 = xmlData && xmlData.di1 === 'up' ? true : false;

        const pompa1State = state1 ? stateON : stateOFF,
            pompa2State = state2 ? stateON : stateOFF;
        const pompa1Color = state1 ? 'lightseagreen' : 'lightcoral',
            pompa2Color = state2 ? 'lightseagreen' : 'lightcoral';

        return (
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper} style={{ backgroundColor: 'orange' }}>
                            <TempCard title='Bazin 1' subtitle={temp1}></TempCard>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper} style={{ backgroundColor: 'skyblue' }}>
                            <TempCard title='Bazin 2' subtitle={temp2}></TempCard>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper} style={{ backgroundColor: 'yellow' }}>
                            <TempCard title='Bazin 3' subtitle={temp3}></TempCard>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper} style={{ backgroundColor: 'palegoldenrod' }}>
                            <TempCard title='Bazin 4' subtitle={temp4}></TempCard>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper} style={{ backgroundColor: 'plum' }}>
                            <TempCard title='Bazin 5' subtitle={temp5}></TempCard>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper className={classes.paper} style={{ backgroundColor: pompa1Color }}>
                            <TempCard title='Pompa 1' subtitle={pompa1State}></TempCard>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper} style={{ backgroundColor: pompa2Color }}>
                            <TempCard title='Pompa 2' subtitle={pompa2State}></TempCard>
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