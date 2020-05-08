import React from "react";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";

import Checkbox from "@material-ui/core/Checkbox";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

export const RoleStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: theme.spacing(1),
      overflow: "visible",
      // overflowY: "hidden",
      padding: "0",
    },

    containerRoot: {
      flexGrow: 1,
    },
    formControl: {
      margin: theme.spacing(4),
      minWidth: "60%",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "92%",
      color: "#0f0",
      fontSize: "12px",
    },
    RadioGroup: {
      fontSize: "12px",
      color: "red",
    },
    dense: {
      marginTop: 19,
    },
    headng: {
      textTransform: "uppercase",
      fontSize: 16,
    },
    tblheadng: {
      marginLeft: "6px",
      textTransform: "uppercase",
      fontSize: "16px",
      fontWeight: "bold",
    },
    table: {
      minWidth: 700,
      "& td": {
        padding: "16px 10px",
      },
      "& td:first-child": {
        paddingLeft: 16,
      },
    },
    toglTrigr: {
      paddingLeft: 20,
      cursor: "pointer",
      textTransform: "uppercase",
      fontSize: "20px !important" as "20px",
      color: "#861932",
      fontWeight: "bold",
      marginTop: 14,
      "& MuiFormControlLabel-label": {
        fontSize: "25px !important" as "25px",
      },
    },
    head: {
      color: "#25303a",
      backgroundColor: "#EAEBED",
      fontWeight: 500,
      textTransform: "uppercase",
      textAlign: "left",
    },
    theadTxt: {
      color: "#48525b",
      fontSize: "14px",
      textTransform: "capitalize",
      textAlign: "center",
      fontWeight: 500,
    },
    theadTxtFirst: {
      color: "#48525b",
      fontSize: "14px",
      fontWeight: 500,
      textTransform: "capitalize",
      textAlign: "left",
    },
    tModulesTxt: {
      fontWeight: "normal",
      textAlign: "left",
      color: "#808080",
    },
    body: {
      fontSize: 15,
      textAlign: "left",
    },
    NA: {
      color: "#b6b6b6",
      fontSize: "13px",
      textAlign: "center",
    },
    permsnRdio: {
      color: "#999",
      fontSize: "8px !important",
    },
    PermsnRdioGroup: {
      paddingLeft: "10px",
      marginTop: "10px",
    },
    rolDtlsInpt: {
      marginTop: "-18px",
      marginLeft: 0,
    },
    Checkbox: {
      color: "red",
    },
    toglerChckBox: {
      marginLeft: "-8px !important",
      marginRight: "-25px",
      fontSize: "20px!important" as any,
    },
    toglerChckBoxLabel: {
      "& span": {
        fontSize: 20,
        color: "#a21d37",
      },
    },
    MuiInputLabel: {
      fontSize: 10,
    },
    resize: {
      fontSize: 15,
      color: "#999",
    },
    MuiRadio: {
      root: {
        "&$disabled": {
          color: "red",
        },
      },
    },
    contntBox: {
      boxShadow: "0px 0px 25px 15px rgba(0,0,0,0.08)",
      background: "#fff",
      marginTop: 20,
    },
    mainTabs: {
      background: "none",
      boxShadow: "none",
      marginTop: 10,
      overflow: "visible",
      "& div": {
        overflow: "visible!important" as "visible",
      },
    },
    tab: {
      background: "none",
      border: "1px solid #b9c0c6",
      marginBottom: 12,
      color: "#293947",
      borderRadius: 5,
      paddingTop: 7,
      minWidth: 0,
      "&.Mui-selected": {
        background: "#a31d37!important" as "#a31d37",
        color: "#fff",
      },
      "&.MuiTab-textColorInherit": {
        opacity: 1,
      },
    },

    button: {
      color: "#ffffff",
      padding: "5px 30px",
      borderRadius: 50,
      textTransform: "capitalize",
      marginRight: 10,
    },
    edit: {
      backgroundColor: "#a31d37",
      "&:hover": {
        backgroundColor: "#a31d37",
      },
    },
    marginLRAuto: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  })
);

export const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:hover": {
        boxShadow: "1px 1px 1px 1px rgba(234, 235, 237, 1)",
        cursor: "pointer",
        borderLeft: "1px solid rgba(234, 235, 237, 1)",
        borderRight: "1px solid rgba(234, 235, 237, 1)",
      },
    },
  })
)(TableRow);

export const GreenCheckbox = withStyles({
  root: {
    // marginLeft: "30px",
    color: "#c2c2c2",
    "&$checked": {
      color: "#A11C37",
    },
    "&$disabled": {
      color: "rgba(0,0,0,.06)",
    },
  },
  checked: {},
  disabled: {},
})((props: any) => (
  <Checkbox
    color="default"
    key={props.id}
    onChange={props.handleCheckChieldElement}
    type="checkbox"
    checked={props.isChecked}
    value={props.value}
    {...props}
  />
));

export const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      color: "#000",
      backgroundColor: "#EAEBED",
      fontWeight: 600,
      textTransform: "uppercase",
      textAlign: "center",
      paddingTop: "7px",
      paddingBottom: "7px",
    },
    body: {
      fontSize: 16,
      border: "none",
      paddingTop: "3px",
      paddingBottom: "3px",
      // textAlign: "center",
    },
  })
)(TableCell);
