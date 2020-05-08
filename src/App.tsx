import React, { useReducer, createContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  Header,
  Sidebar,
  MainContent,
  NotFound,
  Footer,
} from "./components/Common";
import Grid from "@material-ui/core/Grid";
import Login from "./Login";

import { AppBuild as ProgramStandard } from "dxc-program-standards";
// import { AppBuild as ProgramStandard } from "@mktginnovate/dxc-program-standards-ui";
// import { NonPremiseComponent } from "@mktginnovate/non-premise-frontend";
const useStyles = makeStyles((theme: any) => ({
  root: {
    display: "flex",
    backgroundColor: "#f1f5f8",
    width: "100%",
  },
}));
const theme = createMuiTheme({
  typography: {
    fontFamily: ["bilo", "sans-serif"].join(","),
  },
});

export const App = () => {
  const classes = useStyles();

  const [access, setAccess] = React.useState(true);

  const accessLoggedIn = () => {
    setAccess(true);
  };

  console.log(access);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        {access ? (
          <div className={classes.root}>
            <Header />
            <Sidebar />
            <Grid container>
              <Grid item xs={12}>
                {/* Routing Starts */}
                <Switch>
                  <Route
                    exact
                    path="/settings/:menu/:content"
                    render={(props) => <MainContent key={1} {...props} />}
                  />
                  <Route
                    exact
                    path="/settings/user-management/update-user/:id"
                    render={(props) => <MainContent key={2} {...props} />}
                  />
                  <Route
                    exact
                    path="/settings/user-management/update-role/:id"
                    render={(props) => <MainContent key={3} {...props} />}
                  />
                  <Route
                    exact
                    path="/planning/premises/program-standard"
                    component={ProgramStandard}
                  />
                  {/* <Route
                    exact
                    path="/planning/non-premise"
                    component={NonPremiseComponent}
                  /> */}

                  <Redirect
                    exact
                    from="/"
                    to="/settings/user-management/users"
                  />
                  <Route component={NotFound} />
                </Switch>
                {/*  Routing Ends */}
              </Grid>
              <Grid item xs={12}>
                <Footer />
              </Grid>
            </Grid>
          </div>
        ) : (
          <Login onClick={accessLoggedIn} />
        )}
      </Router>
    </ThemeProvider>
  );
};
