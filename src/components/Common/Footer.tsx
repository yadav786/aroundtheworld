import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { typography } from "material-ui/styles";
import Typography from "@material-ui/core/Typography";

const drawerWidth: number = 240;

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    textAlign: "center",
  },
  copyRightTxt: {
    fontSize: 14,
    color: "#898989",
    fontWeight: "normal",
    "& span": {
      color: "#c30231",
    },
  },
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography className={classes.copyRightTxt} component="p">
              2020 Copyrights © <span>Diageo plc.</span> All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
