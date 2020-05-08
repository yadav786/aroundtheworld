import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Footer } from './components/Common/Footer';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import styles from "./Login.css"; // changed ==> scss to css

import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: '100vh',
        width: '98%',
        backgroundColor: '#ffffff',
    },
    infoPanel: {
        color: ' #ffffff',
        background: 'linear-gradient( #a31d37, #652345)',
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        textAlign: 'center',       
    },
    mainDiv: {
        minHeight: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        // marginTop: '10%',
        '& > h1': {
            fontSize: '3.2em',
            marginBottom: 0
        },
        '& > h2': {
            fontSize: '2.5em',
            fontWeight: 500,
            marginTop: 0
        }
    },
    carouselContainer: {
        '& > div.ButtonWrapper': {
            display: 'none'
        },
        '& > div.Indicators': {
            color: '#ffffff52',
            '& > .Indicator > circle': {
                r: 5,
                cursor: 'pointer',
            },
            '& > .Active': {
                color: '#ffffff',
            }
        }
    },
    slider: {
        backgroundColor: 'transparent',
        color: ' #ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 275
    },
    img: {
        height: 255,
        display: 'block',
        maxWidth: 400,
        overflow: 'hidden',
        width: '100%',
    },
    description: {
        fontSize: '18px',
        width: '60%'
    },
    formPanel: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
     },
    submitButton: {
        borderRadius: 50,
        padding: '10px 50px',
        borderColor: '#c9ccce',
        textTransform: 'capitalize',
        backgroundColor: '#a31d37',
        color: '#ffffff',
        '&:hover': {
            backgroundColor: '#a31d37',
            color: '#ffffff',
        }
    },
    forgotButton: {
        color: '#000000',
        textDecoration: 'underline',
        margin: '0 auto',
    }
}));

interface IProps {
    onClick?: any
}

const Login: React.FunctionComponent<IProps> = (props) => {
    const classes = useStyles();

    const handleSubmit = () => {
        props.onClick();
    }

    return (
        <Container maxWidth={false} disableGutters>
            <Grid container className={classes.container}>
                <Grid item xs={12} sm={7} className={classes.infoPanel}>
                    <div className={classes.mainDiv}>
                        <div className={classes.header}>
                            <h1>DIAGEO</h1>
                            <h2>Experience Center</h2>
                        </div>
                 
                    </div>
                    <div>
                        <Footer />
                    </div>
                    
                </Grid>
                <Grid item xs={12} sm={5} className={classes.formPanel}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={4} justify="center" alignItems="center">
                            <Grid item xs={7}>
                                <FormControl fullWidth>
                                    <TextField id="username" label="Email Address" margin="dense" type="email" required />
                                </FormControl>
                            </Grid>
                            <Grid item xs={7}>
                                <FormControl fullWidth>
                                    <TextField id="password" label="Password" margin="dense" type="password" required />
                                </FormControl>
                            </Grid>
                            <Grid item xs={7}>
                                <FormControl fullWidth>
                                    <Button variant="contained" className={classes.submitButton}
                                        style={{ textTransform: "none" }} onClick={() => handleSubmit()}>Login</Button>
                                </FormControl>
                            </Grid>
                            <Grid item xs={7}>
                                <FormControl fullWidth>
                                    <Button disableFocusRipple disableRipple className={classes.forgotButton}
                                        style={{ textTransform: "none" }} variant="text" color="primary">Forgot password
                                        ?</Button>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Login