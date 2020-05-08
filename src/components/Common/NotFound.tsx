import React, { useContext } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
const drawerWidth:number = 240;
 
const useStyles = makeStyles((theme:any) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
},
notFound:{
 textAlign:'center'
}

}));



export const NotFound = (props:any) => {

  const classes = useStyles();

  return(<main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                  <Grid container spacing={3}>
                    <Grid className={classes.notFound} item xs={12} md={12} lg={12}>
                     Not Found
                   </Grid>                     
                  </Grid>
                </Container>
              </main>
        )
}