import React from "react";
import Tab from "@material-ui/core/Tab";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { APP_CONSTANT } from "../../constants/AppConstant";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    activeTab: {
      background: "#961e3a",
      border: "1px solid #b9c0c6",
      marginBottom: 12,
      color: "#ffffff",
      borderRadius: 5,
      minWidth: 0,
      paddingTop: 7,
      "&.Mui-selected": {
        background: "#a31d37!important" as "#a31d37",
        color: "#fff",
      },
      "&.MuiTab-textColorInherit": {
        opacity: 1,
      },
    },
    tab: {
      background: "none",
      border: "1px solid #b9c0c6",
      marginBottom: 12,
      color: "#293947",
      borderRadius: 5,
      minWidth: 0,
      paddingTop: 7,
      "&.Mui-selected": {
        background: "#a31d37!important" as "#a31d37",
        color: "#fff",
      },
      "&.MuiTab-textColorInherit": {
        opacity: 1,
      },
    },
    checkBoxMain: {
      // color:'#293947',
      fontSize: 14,
    },
  })
);

export const UserTabs = (props: any) => {
  const classes = useStyles();
  function a11yProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const togleHandleChange = (event: any, activeTab: number) => {
    props.onChange(event, activeTab);
  };

  return (
    <>
      <Tab
        className={props.selected ? classes.activeTab : classes.tab}
        label={
          props.value === 0
            ? APP_CONSTANT.USER_MANAGEMENT
            : props.value === 1
            ? APP_CONSTANT.CONFIGURATION
            : ""
        }
        {...a11yProps(props.value)}
        onChange={(event: any) => togleHandleChange(event, props.value)}
      />
    </>
  );
};
