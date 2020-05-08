import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

export const UserStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: theme.spacing(1),
      // overflowX: 'auto',
      padding: 0,
      // boxShadow: '0px 0px 25px 15px rgba(0,0,0,0.15)',
      "& .MuiFormControlLabel-root": {
        marginLeft: 0,
        background: "transparant",
      },
    },
    containerRoot: {
      flexGrow: 1,
    },
    formControl: {
      marginLeft: theme.spacing(4),
      // marginRight: theme.spacing(4),
      minWidth: "95%",
    },
    textField: {
      // marginLeft: theme.spacing(1),
      // marginRight: theme.spacing(1),
      width: "100%",
    },
    dense: {
      marginTop: 19,
    },
    mktgCheckbox: {
      color: "red",
      "&$checked": {
        color: "green",
      },
    },

    wrapper: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gridGap: "5px",
    },
    prntchkBox: {
      color: "#293947",
      fontSize: "25px !important" as "25px",
      fontWeight: 500,
      "& span": {
        fontWeight: 500,
        // color:'#293947',
      },
    },
    prntchkBoxSubHead: {
      fontWeight: 500,
      color: "#293947",
      fontSize: "14px!important" as any,
      textTransform: "uppercase",
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
    selectOptn: {
      color: "#828282",
      "& option": {
        outline: "none!important" as "none",
        border: "none!important" as "none",
        "&selected": {
          background: "red!important" as "red",
        },
      },
    },
    resize: {
      fontSize: 15,
      color: "#999",
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
  })
);
