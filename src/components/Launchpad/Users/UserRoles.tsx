import React, { useEffect, MouseEvent, SyntheticEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import MenuItem from "@material-ui/core/MenuItem";
//import Select from "@material-ui/core/Select";
import NativeSelect from '@material-ui/core/NativeSelect';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import LastPageIcon from "@material-ui/icons/LastPage";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import userListsClasses from "./UserLists.module.scss";
import { fetchRoles, updateRoleStatus } from "../../../reducers/RoleReducer";
import { RootState } from "../../../store/rootReducer";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { Icon } from "@material-ui/core";

import { Link as Rlink, withRouter } from "react-router-dom";

import { APP_CONSTANT } from "../../../constants/AppConstant";

type userOne = {
  _id: number;
};

interface enhancedChildren {
  editUser: (user_id: number) => void;
  allUsers: userOne[];
}

// 	children:React.ReactNode

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      color: "#293947",
      backgroundColor: "#EAEBED",
      fontWeight: 600,
      textTransform: "uppercase",

      textAlign: "left",
    },
    body: {
      color: "#293947",
      textAlign: "left",
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
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

function createData(name: string, role: string, state: boolean, _id: number) {
  return { name, role, state, _id };
}

const rows = [
  createData("Petrina", "MKTG", true, 1),
  createData("Brandee", "Client", false, 2),
  createData("Argelia", "Client", true, 3),
  createData("Gary", "Client", false, 4),
  createData("Fredrick", "MKTG", false, 5),
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: theme.spacing(1),
      overflowX: "visible",
      padding: 0,
      // boxShadow: '0px 0px 25px 15px rgba(0,0,0,0.15)'
      background: "transparant",
    },
    table: {
      minWidth: 700,
    },
    active: {
      verticalAlign: "middle",
      paddingRight: "12px",
      color: "#11b511",
    },
    inactive: {
      verticalAlign: "middle",
      paddingRight: "12px",
      color: "#f11212",
    },
    pagination: {
      listStyle: "none",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      margin: "10px 5px",
      // backgroundColor: '#f1f5f8',
      "& > div": {
        marginRight: "-23px",
      },
      "& > div > button": {
        border: "none",
        color: "#abafb3",
        padding: "5px 10px",
        "&:hover": {
          backgroundColor: "transparent",
          border: "none",
        },
        "&.Mui-disabled": {
          border: "none",
        },
      },
    },
    paging: {
      borderRadius: "100%",
      backgroundColor: "#ffffff",
      color: "#abafb3",
      height: "30px",
      width: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&:hover": {
        backgroundColor: "#a31d37",
        color: "#ffffff",
      },
    },
    pagingStatus: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    currentpage: {
      backgroundColor: "#a31d37",
      color: "#ffffff",
      margin: "0 10px",
    },
    contntBox: {
      boxShadow: "0px 0px 25px 15px rgba(0,0,0,0.08)",
      background: "#fff",
      borderRadius: "0px",
      padding: 20,
      margin: "-5px -20px 30px -25px",
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
    tblNmFld: {
      width: "50%",
    },
    gridBox: {
      padding: "0px!important" as "0px",
      "&.MuiBox-root": {
        padding: "0px!important" as "0px",
      },
    },
  })
);

const editIcon =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDQtMjFUMTQ6MTQ6MTgrMDU6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTA0LTIxVDE0OjE0OjM1KzA1OjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA0LTIxVDE0OjE0OjM1KzA1OjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1M0Q5NERFNTgzQUMxMUVBOURENUZDQzZCOTBENDcwOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1M0Q5NERFNjgzQUMxMUVBOURENUZDQzZCOTBENDcwOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUzRDk0REUzODNBQzExRUE5REQ1RkNDNkI5MEQ0NzA5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUzRDk0REU0ODNBQzExRUE5REQ1RkNDNkI5MEQ0NzA5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+6Me4MAAAAfVJREFUeNrUmMsrRFEcx+cOpWTBSPLIo2EzdmOh2FAe47EwNYXGRvEf+AcQW0XJQnnuiI28shwLolAKKQsrYhLyyGN8T33V7TZ35t47587k1qdTM9P9fO/vnvs7544SiUQcqTzSPbW+1AZIgqMEtII3sA7CyQzQA2aBE6RR3gH2/37gtFEeBItgGeSyEhdgG3j0KlADBkCpzknfQR+4NyCfBwpYAs9E3IpDMAwC2gCdTHsNjnVO/Ao+DcrF1eeDVeAHOwyxAXzaCoj7M8UvAwYk8eQLrKQ4/xoRIUKswrk2gBsUgAmJ8m/iV4UQ4kLQpZ2EGRw/JModqnMG+VklK3Ai8ynojSEXRyav3kH5nvpLpwT5XBy5mFfeaPJEAyQsT6QTquX94MeK3GoFpMmtBJAqNxsgC8ywmw3KkJsN0MB+obCtZuvI24zKzQbwcZ2oB2VglyG08pBdG5IWsMWFqpEBBC9W5WYq4Cai9C5QAU5BtUn5EWiyEqCZ4xC447ItFq9xUGfiyr0Mb/oWuLidugST3NXcJHNTOgrGgPQ9vJmnwJYXCDs3pf8rwCPHIhtdxRzD0QKIGX0ARtR7dolHHpgGT2xeUZ+CIBvNGRecL4kBctgxu8GDXoArUAXaQbnk+XELNjnG7APiBXIlmZNQSfX/A78CDABP7Y4Od+VV3QAAAABJRU5ErkJggg==";
const copyIcon =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAbCAYAAABiFp9rAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDQtMjFUMTQ6MTQ6MTgrMDU6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTA0LTIxVDE0OjE1OjU2KzA1OjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA0LTIxVDE0OjE1OjU2KzA1OjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4NDA4QkQzQjgzQUMxMUVBQTUzNUY4REQ1RUM5NEZEOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4NDA4QkQzQzgzQUMxMUVBQTUzNUY4REQ1RUM5NEZEOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg0MDhCRDM5ODNBQzExRUFBNTM1RjhERDVFQzk0RkQ5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg0MDhCRDNBODNBQzExRUFBNTM1RjhERDVFQzk0RkQ5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+PmQ3QAAAAM5JREFUeNpi/P//PwM9AAsyR8vKww9IzQZiMTLMKrx2bMcEoiwCghlQSz6SYdFPon0EBJIgS4AuE6B20DEx0AmwEFIAjDdFIOUCxNwkmn0biHcAQ+cvQYuAlqgDqfNAzEmmR+YBcTIxPgqHWnIIaiEpIBOIY4i1SAhKr8eXdHGERgKQ4qd7Yhi1aNSiUYuGcOkNKqn/0dwiYHn2YDSOqGXRf1olBnRwHUq3A+uXBhLNBtVFz4m1aBEQ+wOxOxBzkGjRKyDOgHEY6dVSBQgwAFhDLTSm/ix0AAAAAElFTkSuQmCC";

export const UserRoles: React.FC<enhancedChildren> = ({
  allUsers,
  editUser,
}) => {
  const classes = useStyles();
  const handleClick = (
    event: MouseEvent<HTMLInputElement | HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const onInputSyn = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const { roles, activePage, totalPages, msg } = useSelector(
    (state: RootState) => state.roles
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRoles());
    console.log("dispatch called");
  }, [dispatch]);

  console.log("roles===", roles);

  const goToPage = (pageNo: number) => {
    console.log("pageNo called=====", pageNo);
    dispatch(fetchRoles("", pageNo));
  };

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

  // const classes = useStyles();
  const [togleValue, setValue] = React.useState(0);
  const togleHandleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number
  ) => {
    setValue(newValue);
  };
  // Content toggle tab end ==================>

  const handleRoleStatusChange = (
    _id: any,
    isActive: boolean,
    activePage: number
  ) => (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    console.log("isActive", !isActive);
    console.log("activePage", activePage);
    dispatch(updateRoleStatus(_id, !isActive, activePage));
  };

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
            <Tab
              className={classes.tab}
              label="User Management"
              {...a11yProps(0)}
            />
            <Tab
              className={classes.tab}
              label={APP_CONSTANT.CONFIGURATION}
              {...a11yProps(1)}
            />
          </Tabs>
        </AppBar>
      </Grid>
      <Grid className={classes.gridBox} item xs={12} md={9} lg={10}>
        <TabPanel togleValue={togleValue} index={0}>
          <Paper className={classes.contntBox} elevation={0}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <StyledTableCell className={classes.tblNmFld} align="right">
                    Role
                  </StyledTableCell>
                  <StyledTableCell align="right">Status</StyledTableCell>
                  <StyledTableCell align="right">Edit</StyledTableCell>
                  {/* <StyledTableCell align="right">Copy</StyledTableCell> */}
                </TableRow>
              </TableHead>
              {totalPages > 0 ? (
                <TableBody>
                  {roles.map((row: any) => (
                    <StyledTableRow key={row.prettyName}>
                      <StyledTableCell component="td" scope="row">
                        {row.prettyName}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <FiberManualRecordIcon
                          className={
                            row.active ? classes.active : classes.inactive
                          }
                        />
                        <NativeSelect
                          disableUnderline
                          value={row.active ? "Active" : "InActive"}
                          name="state"
                          onChange={handleRoleStatusChange(
                            row._id,
                            row.active,
                            activePage
                          )}
                        >
                          <option value="Active">Active</option>
                          <option value="InActive">InActive</option>
                        </NativeSelect>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Rlink
                          to={{
                            pathname: `/settings/user-management/update-role/${row._id}`,
                            state: row,
                          }}
                        >
                          <Icon>
                            {" "}
                            <img src={editIcon} width={25} />{" "}
                          </Icon>
                        </Rlink>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              ) : (
                <TableBody>
                  <TableCell align="center" colSpan={4}>
                    {msg}
                  </TableCell>
                </TableBody>
              )}
            </Table>
          </Paper>

          {totalPages > 0 ? (
            <Grid container className={classes.pagination}>
              <ButtonGroup
                color="primary"
                aria-label="text primary button group"
              >
                <Button
                  onClick={() => {
                    goToPage(1);
                  }}
                  disabled={activePage === 1 ? true : false}
                >
                  <div className={classes.paging}>
                    <FirstPageIcon />
                  </div>
                </Button>
                <Button
                  onClick={() => {
                    goToPage(activePage - 1);
                  }}
                  disabled={activePage === 1 ? true : false}
                >
                  <div className={classes.paging}>
                    <NavigateBeforeIcon />
                  </div>
                </Button>
                <div className={classes.pagingStatus}>
                  PAGE{" "}
                  <span
                    className={`${classes.paging}
                      ${classes.currentpage}`}
                  >
                    {activePage}
                  </span>{" "}
                  of {totalPages}
                </div>
                <Button
                  onClick={() => {
                    goToPage(activePage + 1);
                  }}
                  disabled={activePage === totalPages ? true : false}
                >
                  <div className={classes.paging}>
                    <NavigateNextIcon />
                  </div>
                </Button>
                <Button
                  onClick={() => {
                    goToPage(totalPages);
                  }}
                  disabled={activePage === totalPages ? true : false}
                >
                  <div className={classes.paging}>
                    <LastPageIcon />
                  </div>
                </Button>
              </ButtonGroup>
            </Grid>
          ) : (
            ""
          )}
        </TabPanel>

        <TabPanel togleValue={togleValue} index={1}>
          <Paper className={classes.contntBox} elevation={0}>
            <br />
            Configuration
            <br />
            <br />
            <br />
            <br />
          </Paper>
        </TabPanel>
      </Grid>
    </Grid>
  );
};
