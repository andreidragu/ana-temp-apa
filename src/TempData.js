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
        const { classes, xmlData, error } = this.props;
        const piscinaMareStr = xmlData ? xmlData.ds4 : '-',
            piscinaSPAStr = xmlData ? xmlData.ds3 : '-',
            piscinaCopiiStr = xmlData ? xmlData.ds5 : '-',
            apaCaldaDusStr = xmlData ? xmlData.ds1 : '-',
            panouriSolareStr = xmlData ? xmlData.ds2 : '-';

        let piscinaMare = piscinaMareStr,
            piscinaSPA = piscinaSPAStr,
            piscinaCopii = piscinaCopiiStr,
            apaCaldaDus = apaCaldaDusStr,
            panouriSolare = panouriSolareStr;

        if (piscinaMareStr && piscinaMareStr.length === 3) {
            piscinaMare = String(parseInt(piscinaMareStr) / 10) + '°C';
        }
        if (piscinaSPAStr && piscinaSPAStr.length === 3) {
            piscinaSPA = String(parseInt(piscinaSPA) / 10) + '°C';
        }
        if (piscinaCopiiStr && piscinaCopiiStr.length === 3) {
            piscinaCopii = String(parseInt(piscinaCopii) / 10) + '°C';
        }
        if (apaCaldaDusStr && apaCaldaDusStr.length === 3) {
            apaCaldaDus = String(parseInt(apaCaldaDus) / 10) + '°C';
        }
        if (panouriSolareStr && panouriSolareStr.length === 3) {
            panouriSolare = String(parseInt(panouriSolare) / 10) + '°C';
        }

        // const stateON = 'PORNIT',
        //     stateOFF = 'OPRIT';
        // const state1 = xmlData && xmlData.di0 === 'up' ? true : false,
        //     state2 = xmlData && xmlData.di1 === 'up' ? true : false;

        // const pompa1State = state1 ? stateON : stateOFF,
        //     pompa2State = state2 ? stateON : stateOFF;
        // const pompa1Color = state1 ? '#20B2AA' : '#F08080',
        //     pompa2Color = state2 ? '#20B2AA' : '#F08080';

        return (
            <div className={classes.root}>
                {
                    error ?
                        <h1>Nu s-au putut incarca temperaturile</h1>
                        :
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Paper className={classes.paper} style={{
                                    backgroundColor: '#FFB300',
                                    backgroundImage: `url('./res/temp.svg')`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: '75% 50%',
                                    backgroundSize: '10%'
                                }}>
                                    <TempCard title='Piscina Mare' subtitle={piscinaMare}></TempCard>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper} style={{
                                    backgroundColor: '#039BE5',
                                    backgroundImage: `url('./res/temp.svg')`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: '85% 50%',
                                    backgroundSize: '10%'
                                }}>
                                    <TempCard title='Piscina SPA' subtitle={piscinaSPA}></TempCard>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper} style={{
                                    backgroundColor: '#C0CA33',
                                    backgroundImage: `url('./res/temp.svg')`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: '85% 50%',
                                    backgroundSize: '10%'
                                }}>
                                    <TempCard title='Piscina Copii' subtitle={piscinaCopii}></TempCard>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper} style={{
                                    backgroundColor: '#607D8B',
                                    backgroundImage: `url('./res/temp.svg')`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: '85% 50%',
                                    backgroundSize: '10%'
                                }}>
                                    <TempCard title='Apa Calda Dus' subtitle={apaCaldaDus}></TempCard>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper} style={{
                                    backgroundColor: '#DDA0DD',
                                    backgroundImage: `url('./res/temp.svg')`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: '85% 50%',
                                    backgroundSize: '10%'
                                }}>
                                    <TempCard title='Panouri Solare' subtitle={panouriSolare}></TempCard>
                                </Paper>
                            </Grid>

                            {/* <Grid item xs={12}>
                        <Paper className={classes.paper} style={{
                            backgroundColor: pompa1Color,
                            backgroundImage: `url('./res/lightning.svg')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: '75% 50%',
                            backgroundSize: '10%'
                        }}>
                            <TempCard title='Pompa 1' subtitle={pompa1State}></TempCard>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper} style={{
                            backgroundColor: pompa2Color,
                            backgroundImage: `url('./res/lightning.svg')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: '75% 50%',
                            backgroundSize: '10%'
                        }}>
                            <TempCard title='Pompa 2' subtitle={pompa2State}></TempCard>
                        </Paper>
                    </Grid> */}
                        </Grid>
                }
            </div>
        );
    }
}

TempData.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TempData);