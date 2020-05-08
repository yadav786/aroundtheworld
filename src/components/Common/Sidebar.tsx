import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect,
} from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import VerifiedUserOutlined from "@material-ui/icons/VerifiedUserOutlined";
import ShopOutlined from "@material-ui/icons/ShopOutlined";
import CalendarTodayOutlined from "@material-ui/icons/CalendarTodayOutlined";
import SettingsApplicationsOutlined from "@material-ui/icons/SettingsApplicationsOutlined";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Icon } from "@material-ui/core";
import styles from "../mainPage.css";

import Link from "@material-ui/core/Link";

import { useLocation } from "react-router-dom";

const drawerWidth: number = 120;

const useStyles = makeStyles((theme: any) => ({
  planningParent: {
    "& > ul": {
      display: "none",
    },
    "&:hover > ul": {
      display: "block!important" as "block",
    },
  },
  planningMenus: {
    top: "10%",
    position: "absolute",
    left: "60px",
    minWidth: "134px",
    borderLeft: "1px solid #fff",
    padding: "0px",
    marginTop: "0px !important" as "0px",
    outline: "none",
    "& a": {
      outline: "none",
    },
    "& a:nth-child(1) li": {
      borderTopRightRadius: "5px",
      textDecoration: "none",
    },
    "& a:nth-child(2) li": {
      borderBottomRightRadius: "5px",
      textDecoration: "none",
    },
    "&:visited": {
      display: "none",
    },
    "&:hover": {
      display: "block",
    },
    "& > a:nth-child(1)": {
      borderTopRightRadius: "5px",
      textDecoration: "none",
    },
    "& > a:nth-child(2)": {
      borderBottomRightRadius: "5px",
      textDecoration: "none",
    },
    "&:hover > li": {
      padding: "11.5px 0px",
      background: "#e4e7e8",
      color: "#8d1f3c",
      cursor: "pointer",
      textDecoration: "none",
    },
    "&:hover > a > li": {
      padding: "11.5px 0px",
      background: "#e4e7e8",
      color: "#8d1f3c",
      cursor: "pointer",
      textDecoration: "none",
    },
    "&:hover > li:hover": {
      padding: "11.5px 0px",
      background: "#8e1f3c",
      color: "#f1f5f8",
      cursor: "pointer",
      textDecoration: "none",
    },
    "&:hover > a:hover > li:hover": {
      padding: "11.5px 0px",
      background: "#8e1f3c",
      color: "#f1f5f8",
      cursor: "pointer",
      textDecoration: "none",
    },
  },
  planningMenusList: {
    padding: "11.5px 0px",
    background: "#e4e7e8",
    color: "#8d1f3c",
    outline: "none",
    textDecoration: "none",
  },
  planningMenusActiveList: {
    padding: "11.5px 0px",
    background: "#8e1f3c",
    color: "#f1f5f8",
    outline: "none",
    textDecoration: "none",
  },
  lists: {
    textAlign: "center",
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    fontSize: 20,
    justifyContent: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    color: "#FFFFFF",
    fontWeight: 400,
    marginBottom: 30,
    marginTop: 15,
  },
  list: {
    whiteSpace: "initial",
    textAlign: "center",
  },
  listItem: {
    display: "block",
    textAlign: "center",
  },
  activeListItem: {
    display: "block",
    textAlign: "center",
    backgroundColor: "#f1f5f8",
  },
  listIcon: {
    minWidth: 0,
  },
  sidebarMenu: {
    color: "#f1f5f8",
    width: "36px !important",
    height: "36px !important",
  },
  sidebarMenuActive: {
    color: "#9f1d38",
    width: "36px !important",
    height: "36px !important",
  },
  sidebarParentMenuActive: {},
  sidebarMenuDivActive: {
    marginLeft: "4px !important",
    fontSize: "12px",
    letterSpacing: "0.2px !important",
    color: "#9f1d38",
    backgroundColor: "#f1f5f8",
    borderRadius: "5px 0px 0px 5px !important",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: "linear-gradient(0deg, #49294E, #A11C37)",
    borderBottomRightRadius: "40px !important",
    borderTopRightRadius: "30px !important",
    border: "0px",
    overflow: "unset",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  sidebarMenuDiv: {
    display: "block",
    fontSize: "12px",
    letterSpacing: "0.2px !important",
    color: "#f1f5f8",
    textDecoration: "none",
    cursor: "pointer",
    paddingTop: 10,
    transition: "all .5s",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    "& + ul": {
      display: "none",
    },
    "&:hover": {
      background: "#fff",
      color: "#9f1d38",
      fontWeight: "bold",
    },
  },
  activeSideMenuItem: {
    display: "block",
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "#f1f5f8",

    color: "#9f1d38",
    paddingTop: 10,
    borderRadius: "8px 0px 0px 8px !important",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover + ul": {
      display: "block",
    },
  },
  menuListItem: {
    marginBottom: "35px !important",
    whiteSpace: "normal",
    verticalAlign: "top",
    paddingBottom: 6,
    fontSize: 12,
    fontWeight: "normal",
    textTransform: "uppercase",
    outline: "none",
  },
  icons: {
    width: 48,
  },
}));

export const Sidebar = () => {
  const [state, setState] = React.useState({
    activeMenu: "user_management",
  });

  const classes = useStyles();

  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      open={true}
    >
      <div className={classes.toolbarIcon}>
        <span className={styles.logo}></span>
        {/* DIAGEO */}
      </div>

      <List
        component="nav"
        className={classes.lists}
        aria-label="main mailbox folders"
      >
        <NavLink
          exact
          to="/home"
          className={`${classes.sidebarMenuDiv} ${styles.iconHome}`}
          activeClassName={styles.iconHomeActive}
        >
          <span className={styles.iconn}></span>

          <MenuList disablePadding>
            <div className={classes.menuListItem}>
              <div>Home</div>
            </div>
          </MenuList>
        </NavLink>

        <span className={styles.subNavList}>
          <Link
            className={`${classes.sidebarMenuDiv} ${styles.iconPlanning}  ${
              location.pathname.indexOf("planning") > -1
                ? styles.iconPlanningActive
                : ""
            } `}
          >
            <span className={styles.iconn}></span>
            <MenuList disablePadding>
              <div className={classes.menuListItem}>
                <div>Planning</div>
              </div>
            </MenuList>
          </Link>

          <MenuList
            className={`${classes.planningMenus} ${styles.planningSubMenu}`}
          >
            <NavLink exact to="/planning/premises/program-standard">
              <li className={classes.planningMenusList}>On/Off Premises</li>
            </NavLink>
            <NavLink exact to="/">
              <li className={classes.planningMenusActiveList}>Non-Premises</li>{" "}
            </NavLink>
            {/* <NavLink exact to="/planning/non-premise">
              <li className={classes.planningMenusActiveList}>Non-Premises</li>
            </NavLink> */}
          </MenuList>
        </span>

        <NavLink
          exact
          to="/activation"
          className={`${classes.sidebarMenuDiv} ${styles.iconActivation}`}
          activeClassName={styles.iconActivationActive}
        >
          <span className={styles.iconn}></span>
          {/* <Icon>
          <img src={location.pathname === '/activation' ? activationActive : activation} className={classes.icons} />
      </Icon> */}

          <MenuList disablePadding>
            <div className={classes.menuListItem}>
              <div>Activation</div>
            </div>
          </MenuList>
        </NavLink>

        <NavLink
          exact
          to="/measurement"
          className={`${classes.sidebarMenuDiv} ${styles.iconMeasurement}`}
          activeClassName={styles.iconMeasurementActive}
        >
          <span className={styles.iconn}></span>

          <MenuList disablePadding>
            <div className={classes.menuListItem}>
              <div>Measurement</div>
            </div>
          </MenuList>
        </NavLink>

        <NavLink
          exact
          to="/settings/user-management/users"
          className={`${classes.sidebarMenuDiv} ${styles.iconSettings}  ${
            location.pathname.indexOf("settings") > -1
              ? styles.iconSettingsActive
              : ""
          } `}
        >
          <span className={styles.iconn}></span>

          <MenuList disablePadding>
            <div className={classes.menuListItem}>
              <div>Settings</div>
            </div>
          </MenuList>
        </NavLink>
      </List>
    </Drawer>
  );
};
