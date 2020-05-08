import React, { useContext, useRef } from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import { Search } from "./Search";
import { Footer } from "./Footer";
import { Launchpad } from "../Launchpad";
import { typography } from "material-ui/styles";
import { inherits } from "util";

const drawerWidth: number = 240;

const useStyles = makeStyles((theme: any) => ({
  appBarSpacer: theme.mixins.toolbar,

  root: {
    display: "flex",
    width: "100%",
  },
  fixedHeight: {
    height: "auto",
  },

  content: {
    flexGrow: 1,
    // height: '100vh',
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(8),
    maxWidth: "100%",
  },

  header: {
    textAlign: "center",
  },

  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    backgroundColor: "transparent",
  },
  // tab: {
  //   fontWeight: 600,
  //   minWidth: "100px",
  //   "&.MuiTab-textColorInherit": {
  //     opacity: 1,
  //   },
  // },
  // activeTab: {
  //     background: "#961e3a",
  //     border: "1px solid #b9c0c6",
  //     marginBottom: 12,
  //     color: "#ffffff",
  //     borderRadius: 5,
  //     minWidth: 0,
  //     paddingTop: 7,
  //     "&.Mui-selected": {
  //       background: "#a31d37!important" as "#a31d37",
  //       color: "#fff",
  //     },
  //     "&.MuiTab-textColorInherit": {
  //       opacity: 1,
  //     },
  // },
  // tab: {
  //   background: "none",
  //   border: "1px solid #b9c0c6",
  //   marginBottom: 12,
  //   color: "#293947",
  //   borderRadius: 5,
  //   minWidth: 0,
  //   paddingTop: 7,
  //   "&.Mui-selected": {
  //     background: "#a31d37!important" as "#a31d37",
  //     color: "#fff",
  //   },
  //   "&.MuiTab-textColorInherit": {
  //     opacity: 1,
  //   },
  // },

  // tabPaper: {
  //   margin: '6px',
  //   backgroundColor: '#f1f5f8',
  //   border: '1px solid #b8bbbd',
  //   textAlign: 'center',
  // },
  tabPaper: {
    margin: "6px",
    borderRadius: "25px",
    backgroundColor: "#fff",
    border: "none",
    color: "#861932",
    textAlign: "center",
    fontStyle: "normal",
    overflow: "hidden",
    height: 42,
    opacity: 1,
    "& span": {
      fontStyle: "normal",
      opacity: 1,
      paddingBottom: 3,
    },
  },
  activePaperTab: {
    margin: "6px",
    backgroundColor: "#a31d37",
    color: "#fff",
    height: 42,
    overflow: "hidden",
    borderRadius: "25px",
    textAlign: "center",
    "& span": {
      opacity: 1,
      paddingBottom: 3,
    },
    "&.MuiTab-textColorInherit": {
      opacity: 1,
    },
  },
  searchPaper: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    margin: "6px",
    fontStyle: "normal",
    backgroundColor: "#f1f5f8",
  },
  input: {
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },

  // fixedHeight: {
  //     height: 240,
  // },
  triangleRight: {
    width: 0,
    height: 0,
    borderTop: "8px solid transparent",
    borderLeft: "4px solid #861932",
    borderBottom: "8px solid transparent",
    position: "relative",
    float: "right",
    top: "-37px",
    left: "-2px",
  },
  panel: {
    backgroundColor: "#ffffff",
  },
  topTabLink: {
    textDecoratoion: "none",
  },
  alignCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  actionBtnBox: {
    background: "#eadfe4",
    marginLeft: 15,
    borderRadius: "10px",
    marginTop: 25,
    "&.MuiGrid-container": {
      margin: "0px!important" as "0px",
    },
  },
  contxtBoxMt: {
    marginTop: 15,
  },
  actionHdng: {
    textAlign: "center",
    color: "#293947",
    fontSize: "20px!important" as "20px",
    textTransform: "uppercase",
    "& h3": {
      margin: "13px 0 0 0",
      fontSize: "20px!important" as "20px",
      color: "#293947",
    },
  },
  // '.MuiGrid-container':{
  //   marginTop:'20px!important' as '20px',
  // }
}));

export const MainContent = (props: any) => {
  console.log("MainContent  props \x1b[36m" + props + "\x1b[0m");
  const classes = useStyles();

  const a11yProps = (index: number) => {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  };

  const handleDrawerClose = (itemSelected: any) => {
    switch (itemSelected) {
      case "USER_LISTS":
        return props.history.push("/settings/user-management/users");
        break;
      case "CREATE_USER":
        return props.history.push("/settings/user-management/create-new-user");
        break;
      case "USER_ROLES":
        return props.history.push("/settings/user-management/roles");
        break;
      case "CREATE_ROLE":
        return props.history.push("/settings/user-management/create-role");
        break;
      default:
        return props.history.push("/settings/user-management/users");
        break;
    }
  };

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3} className={classes.actionBtnBox}>
          <Grid item xs={2} md={2} lg={2} >
            <Grid container spacing={3}>
              <Grid item className={classes.actionHdng} xs>
                <h3>Actions</h3>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={10} md={10} lg={10} >
            <Grid container>
              <Grid item xs>
                  <Tab
                    className={ props.location.pathname ===
                    "/settings/user-management/users"
                      ? classes.activePaperTab : classes.tabPaper}
                    onClick={() => handleDrawerClose("USER_LISTS")}
                    label="Users"
                    {...a11yProps(0)}
                  />
              </Grid>
              <Grid item xs>
                  <Tab
                    className={
                      props.location.pathname ===
                      "/settings/user-management/create-new-user"
                        ? classes.activePaperTab
                        : classes.tabPaper
                    }
                    onClick={() => handleDrawerClose("CREATE_USER")}
                    label="Create New User"
                    {...a11yProps(1)}
                  />
              </Grid>
              <Grid item xs>
                  <Tab
                    className={
                      props.location.pathname ===
                      "/settings/user-management/roles"
                        ? classes.activePaperTab
                        : classes.tabPaper
                    }
                    onClick={() => handleDrawerClose("USER_ROLES")}
                    label="Roles"
                    {...a11yProps(2)}
                  />
              </Grid>
              <Grid item xs>
                  <Tab
                    className={
                      props.location.pathname ===
                      "/settings/user-management/create-role"
                        ? classes.activePaperTab
                        : classes.tabPaper
                    }
                    onClick={() => handleDrawerClose("CREATE_ROLE")}
                    label="Create Role"
                    {...a11yProps(3)}
                  />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
          {props.location.pathname === "/settings/user-management/users" ||
          props.location.pathname === "/settings/user-management/roles" ? (
            <Grid item xs={12} md={12} lg={12}>
              <Search />
            </Grid>
          ) : null}

        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <Paper className="" elevation={0}>
              <div className={classes.contxtBoxMt}>
                <Launchpad components={props.location.pathname} {...props} />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      {/* <Footer/> */}
    </main>
  );
};
