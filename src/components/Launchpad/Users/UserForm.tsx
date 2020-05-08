import React, { useState, useRef, MouseEvent, SyntheticEvent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import clsx from "clsx";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Icon, Button } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { red } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";

import { UserTabs } from "../../Common/UserTabs";

import { UserDetails } from './UserDetails';
import { UserPermission } from './UserPermission';

import {UserStyle} from './UserStyle';

interface IProps {
  // standard: string
}
export const UserForm: React.FunctionComponent<IProps> = (props) => { //: React.FC = () => {

  // Content toggle tab start ==================>
    
  interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    togleValue: any;
  }
  function TabPanel(props: TabPanelProps) {
    const { children, togleValue, index, ...other } = props;
    const [userState, setUserState] = React.useState("");

    const handleUserState = (
      event: React.ChangeEvent<{ togleValue: unknown }>
    ) => {
      setUserState(event.target.togleValue as string);
    };

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={togleValue !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {togleValue === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  function a11yProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
 
  const classes = UserStyle();
  const [togleValue, setValue] = React.useState(0);
  const togleHandleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number
  ) => {
    setValue(newValue);
  };
  // Content toggle tab end ==================>
  
  const firstNameRef =  useRef('');
  const lastNameRef =  useRef('');
  const emailAddressRef =  useRef('');
  const roleRef =  useRef('');
  const statusRef =  useRef('');
     
  return (
    <Grid container style={{ backgroundColor: "#f3f3f3" }} spacing={3}>
      <Grid item xs={12} md={3} lg={2}>
        <AppBar className={classes.mainTabs} position="static">
          <Tabs
            TabIndicatorProps={{
              style: {
                background: "none",
                marginTop: 18,
                borderTop: "6px solid transparent",
                right: "-5px",
                borderLeft: "6px solid #a31d37",
                borderBottom: "6px solid transparent",
                height: 0,
              },
            }}
            orientation="vertical"
            value={togleValue}
            onChange={togleHandleChange}
          >
            <UserTabs />
            <UserTabs />
          </Tabs>
        </AppBar>
      </Grid>

      <Grid className={classes.contntBox} item xs={12} md={9} lg={10}>
        <TabPanel togleValue={togleValue} index={0}>
          <Paper className={classes.root} elevation={0}>
            <div className={classes.containerRoot}>
              
              {<UserDetails firstNameRef={firstNameRef}  lastNameRef={lastNameRef}  emailAddressRef={emailAddressRef}  roleRef={roleRef}  statusRef={statusRef} />}
              {/* <UserDetails firstNameRef={firstNameRef}/> */}
              <UserPermission  {...props} firstNameRef={firstNameRef}  lastNameRef={lastNameRef}  emailAddressRef={emailAddressRef}  roleRef={roleRef}  statusRef={statusRef} /> 
  
            </div>
          </Paper>
        </TabPanel>

        <TabPanel togleValue={togleValue} index={1}>
          <Paper className={classes.root} elevation={0}>
            Configuration
          </Paper>
        </TabPanel>
      </Grid>
    </Grid>
  );
};
