import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useLocation } from "react-router-dom";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
// import Link from '@material-ui/core/Link';
import { NavLink } from "react-router-dom";
import { RootState } from "../../store/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { fetchFinancialYear } from "../../reducers/FinancialYearReducer";

const drawerWidth: number = 84;
const userPhoto = "https://randomuser.me/api/portraits/men/47.jpg";

const useStyles = makeStyles((theme: any) => ({
  toolbar: {
    paddingRight: "40px!important" as "40px",
    paddingLeft: "86px!important" as "86px",
    "& .makeStyles-title-7": {},
    "& .MuiListItem-gutters": {
      paddingLeft: "16px  !important",
      paddingRight: "16px !important",
      paddingTop: "8px !important",
    },
    "& .MuiIconButton-root": {
      flex: "0 0 auto",
      color: "rgba(0, 0, 0, 0.54)  !important",
      padding: "12px  !important",
      overflow: "visible",
      fontSize: "1.5rem",
      textAlign: "center",
      borderRadius: "50%",
    },
    "& .MuiIconButton-edgeStart": {
      marginLeft: "-12px !important",
    },
    "& .makeStyles-menuButton-5": {
      marginRight: "36px !important",
    },
  },
  navlink: {
    color: "inherit",
    textDecoration: "none",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    boxShadow: "none!important" as "none",
    background: "#F1F5F8!important" as "#F1F5F8",
  },
  appBarShift: {
    paddingTop: "5px!important" as "5px",
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxShadow: "none!important" as "none",
    background: "#F1F5F8!important" as "#F1F5F8",
  },
  menuButton: {
    marginRight: "36!important" as "36",
  },
  menuButtonHidden: {
    display: "none !important",
  },
  title: {
    flexGrow: 1,
    fontSize: "24px!important" as "24px",
    color: "#293947",
    textTransform: "uppercase!important" as "uppercase",
    marginTop: -5,
  },
  fixedHeight: {
    height: "240px !important",
  },
  listItemText: {
    fontSize: "0.7rem!important" as "0.7rem",
  },
  hr: {
    border: ".5px solid rgba(0,0,0,.10)",
    width: "calc(100% - 140px)",
    marginLeft: "86px!important" as "86px",
  },
  loginedUserName: {
    fontSize: 17,
    color: "#293947",
  },
  userPhotoStyle: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
  },
  notifictn: {
    color: "#8d979f",
  },
  notifictnDot: {
    background: "#9f1d38",
    width: 9,
    height: 9,
    borderRadius: "50%",
    position: "absolute",
    right: 2,
    top: 2,
    border: "1px solid #fff",
  },
  formControl: {
    margin: "8px!important" as "8px",
    minWidth: "150px!important" as "150px",
    marginTop: 0,
  },
  bredcrumb: {
    color: "rgba(41, 57, 71, 0.5)!important" as "rgba(41, 57, 71, 0.5)",
    marginTop: "5px",
    fontSize: "14px!important" as "14px",
  },
  bredcrumbBox: {
    position: "absolute",
    top: "48px!important" as "0px",
  },
  lognedUserBox: {
    paddingBottom: 15,
    paddingTop: 15,
  },
  fncialYearSelct: {
    fontSize: "17px",
    color: "#293947",
    fontWeight: 500,
    "&.MuiListItem-button": {
      display: "block!important" as "flex",
      paddingLeft: "5px!important" as "5px",
    },
  },
}));

export const Header = (props: any) => {
  const [FYValue, setFYValue] = useState("");
  const { financialyear } = useSelector(
    (state: RootState) => state.financialyear
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFinancialYear());
  }, [dispatch]);

  const classes = useStyles();
  const location = useLocation();

  const routes: { path: string; breadcrumb: string }[] = [];

  console.log("location outer", location);
  const pathName: string = location.pathname;
  let module: string =
    location.pathname === "/" ? "User Management" : "Program Standards ";
  // const pathArray = path.split('/');
  // pathArray.forEach(pathName => {
  if (pathName === "/") {
    routes.push({ path: "/home", breadcrumb: "Home" });
    routes.push({ path: "/", breadcrumb: "Settings" });
  } else if (pathName === "/home") {
    routes.push({ path: pathName, breadcrumb: "Home" });
  } else if (pathName.indexOf("/planning/premises") > -1) {
    routes.push({ path: "/home", breadcrumb: "Home" });
    routes.push({ path: pathName, breadcrumb: "On/Off Premises" });
    routes.push({ path: pathName, breadcrumb: "Program Standard" });
  } else if (pathName === "/activation") {
    routes.push({ path: "/home", breadcrumb: "Home" });
    routes.push({ path: pathName, breadcrumb: "Activation" });
  } else if (pathName === "/measurement") {
    routes.push({ path: "/home", breadcrumb: "Home" });
    routes.push({ path: pathName, breadcrumb: "Measurement" });
  } else if (pathName.indexOf("settings") > -1) {
    routes.push(
      { path: pathName, breadcrumb: "Settings" },
      { path: pathName, breadcrumb: "User Management" }
    );
    const internalPathname = pathName.split("/");
    const matchPath = internalPathname[internalPathname.length - 1];
    module = "User Management";
    switch (matchPath) {
      case "users":
        routes.push({ path: pathName, breadcrumb: "Users" });
        break;
      case "create-new-user":
        routes.push({ path: pathName, breadcrumb: "Create New User" });
        break;
      case "create-role":
        routes.push({ path: pathName, breadcrumb: "Create Role" });
        break;
      case "roles":
        routes.push({ path: pathName, breadcrumb: "Roles" });
        break;
    }
  }
  // });

  const handleFinancialYearChange = (
    event: React.ChangeEvent<{ value: any }>
  ) => {
    setFYValue(event.target.value as string);
  };

  useEffect(() => {
    financialyear.map((financialyear: any) => {
      if (financialyear.isDefault === true && FYValue === "") {
        return setFYValue(financialyear.fiscalYear as string);
      }
      return FYValue;
    });
  });
  // console.log('pling---2->>>', FYValue);

  return (
    <AppBar color="default" position="absolute" className={classes.appBarShift}>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h1"
          color="inherit"
          noWrap
          className={classes.title}
        >
          {module}
        </Typography>

        <div className={classes.bredcrumbBox}>
          <Breadcrumbs
            className={classes.bredcrumb}
            separator="›"
            aria-label="breadcrumb"
          >
            {routes.map(({ path, breadcrumb }) => (
              <NavLink className={classes.navlink} key={path} to={path}>
                {breadcrumb}
              </NavLink>
            ))}

            {/* <Link color="inherit" href="/">Material-UI</Link>
            <Link color="inherit" href="/">Core</Link>
            <Typography className={classes.bredcrumb}>Breadcrumb</Typography> */}
          </Breadcrumbs>
        </div>

        <FormControl color="secondary" className={classes.formControl}>
          {/* <InputLabel id="demo-simple-select-label">Select</InputLabel> */}
          <Select value={"DIAGEO"} defaultValue={"DIAGEO"}>
            <MenuItem className={classes.fncialYearSelct} value={"DIAGEO"}>
              DIAGEO
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl color="secondary" className={classes.formControl}>
          {/* <InputLabel >Select</InputLabel> */}
          <Select
            value={FYValue}
            defaultValue={FYValue}
            onChange={handleFinancialYearChange}
          >
            {financialyear.map((financialyear: any) => (
              <MenuItem
                className={classes.fncialYearSelct}
                value={financialyear.fiscalYear}
                aria-label={financialyear.fiscalYear}
                id={financialyear["id"]}
              >
                {financialyear.fiscalYear}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <IconButton>
          {/* <Badge badgeContent={1} color="secondary"> */}
          <Badge className={classes.notifictn}>
            <span className={classes.notifictnDot}></span>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <List
          component="nav"
          className={classes.lognedUserBox}
          aria-label="main mailbox folders"
        >
          <ListItem button>
            <ListItemIcon>
              <img src={userPhoto} className={classes.userPhotoStyle} />
            </ListItemIcon>
            <ListItemText
              className={classes.loginedUserName}
              disableTypography={true}
              children="George Martin"
            />
          </ListItem>
        </List>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <hr className={classes.hr} />
    </AppBar>
  );
};
