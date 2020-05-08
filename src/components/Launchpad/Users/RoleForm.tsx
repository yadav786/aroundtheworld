import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { APP_CONSTANT } from "../../../constants/AppConstant";
import {
  createUserRoleAPI,
  updateUserRoleAPI,
} from "../../../reducers/RoleReducer";
import { RoleDetails } from "./RoleDetails";
import { RoleStyle } from "./RoleStyle";
import { RoleSettings } from "./RoleSettings";
import { RolePlanning } from "./RolePlanning";
import { RoleMeasurement } from "./RoleMeasurement";
import { RoleReporting } from "./RoleReporting";
import { useLocation } from "react-router-dom";
// Add Modal Popup Error
import { CustomModal } from "../../Common/CustomModal/CustomModal";

export const RoleForm: React.FC = () => {
  const location = useLocation();
  let roleState: any =
    typeof location.state !== "undefined" ? location.state : {};
  const role_id: string =
    typeof roleState._id !== "undefined" ? roleState._id : "";

  const classes = RoleStyle();
  const { roles } = useSelector((state: RootState) => state);

  // Handle Model Close
  const handleClose = () => {
    setModalError(false);
  };

  useEffect(() => {
    if (roles.roleResponse.error) {
      setModalError(true);
    } else {
      setModalError(false);
    }
  }, [roles.roleResponse.error]);

  // If Role already EXIST
  useEffect(() => {
    if (roles.roleResponse.message) {
      setModalError(true);
    } else {
      setModalError(false);
    }
  }, [roles.roleResponse.message]);

  useEffect(() => {
    if (roles.roleResponse.data) {
      setModalError(true);
    } else {
      setModalError(false);
    }
  }, [roles.roleResponse.data]);

  const dispatch = useDispatch();

  const roleNameRef = useRef("" as any);
  const shortNameRef = useRef("" as any);
  const statusRef = useRef("" as any);
  const channelRef = useRef("" as any);
  const permissionRef = useRef("" as any);

  let settingsData = Object.assign({});
  let planningData = Object.assign({});
  let measurementData = Object.assign({});
  let reportingData = Object.assign({});

  const settingsDataFunc = (data: any) => {
    settingsData = data;
    console.log("settingsData====", settingsData);
  };

  const planningDataFunc = (data: any) => {
    planningData = data;
    console.log("planningData====", planningData);
  };

  const measurementDataFunc = (data: any) => {
    measurementData = data;
    console.log("measurementData====", measurementData);
  };

  const reportingDataFunc = (data: any) => {
    reportingData = data;
    console.log("reportingData====", reportingData);
  };

  // Content toggle tab start ==================>

  interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    togleValue: any;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, togleValue, index, ...other } = props;

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

  function filterData(rawData = Object.assign({})) {
    let formattedDataObj = Object.assign({});
    rawData.map((item: any, index: any) => {
      let indexName = Object.assign({});
      // match case and assign required index
      switch (item.name) {
        case "User Create":
          indexName.value = "userCreate";
          break;
        case "Role Assigning":
          indexName.value = "roleAssigning";
          break;
        case "CSV":
          indexName.value = "csv";
          break;
        case "Role Creation":
          indexName.value = "roleCreate";
          break;
        case "Grant Permission":
          indexName.value = "grantPermission";
          break;
        case "Campaign":
          indexName.value = "campaign";
          break;
        case "Program":
          indexName.value = "program";
          break;
        case "Salesforce Integration":
          indexName.value = "salseForceIntegration";
          break;
        case "Budget CSV":
          indexName.value = "budgetCsv";
          break;
        case "KPI CSV":
          indexName.value = "kpiCsv";
          break;
        case "Program Creation":
          indexName.value = "programCreation";
          break;
        case "Program Question Submission":
          indexName.value = "programQuestionSubmission";
          break;
        case "Approval":
          indexName.value = "approval";
          break;
        case "PDF":
          indexName.value = "pdf";
          break;
        case "Central Plan":
          indexName.value = "centralPlan";
          break;
        case "Collection":
          indexName.value = "collection";
          break;
        case "Challenge and Build":
          indexName.value = "challengeBuild";
          break;
        case "Plan":
          indexName.value = "plan";
          break;
        case "Logs":
          indexName.value = "logs";
          break;
        case "Final Plan":
          indexName.value = "finalPlan";
          break;
        case "Events":
          indexName.value = "Events";
          break;
        case "Incremental":
          indexName.value = "incremental";
          break;
        case "Photos":
          indexName.value = "photos";
          break;
        case "View":
          indexName.value = "view";
          break;
        case "By Markets":
          indexName.value = "byMarkets";
          break;
        case "By Brands":
          indexName.value = "byBrands";
          break;
        case "By Program":
          indexName.value = "byProgram";
          break;
      }

      formattedDataObj[indexName.value] = Object.assign({});
      item.data.map((x: any, index: any) => {
        if (x.isChecked === true) {
          if (x.value == "Active/Deactive") {
            x.value = "isActive";
          } else if (x.value == "Approve/Disapprove") {
            x.value = "isApprove";
          } else {
            // lowercase attr value. e.g Create => create
            x.value = x.value.toLowerCase();
          }
          formattedDataObj[indexName.value][x.value] = true;
        }
      });
    });
    return formattedDataObj;
  }

  const createUserRole = () => {
    const roleNames = roleNameRef.current.value;
    const shortNames = shortNameRef.current.value;
    const on_off_premise = channelRef.current.elements[0].checked;
    const non_premise = channelRef.current.elements[1].checked;
    const isSuperAdminPermission = permissionRef.current.elements[1].checked;
    const statuss = statusRef.current.value === "Active" ? true : false;

    roleNameRef.current.value = "";
    shortNameRef.current.value = "";
    statusRef.current.value = "status";

    let roleData = Object.assign({});
    let userManagmentPermsn = Object.assign({}),
      roleManagmentPermsn = Object.assign({}),
      programConfigPermsn = Object.assign({}),
      programStandardPermsn = Object.assign({}),
      centralPlanningPermsn = Object.assign({}),
      challengeBuildPermsn = Object.assign({}),
      finalPlanPermsn = Object.assign({}),
      photoPorttalPermsn = Object.assign({}),
      eventPlannedPermsn = Object.assign({}),
      performanceKpisPermsn = Object.assign({}),
      pacingPermsn = Object.assign({}),
      financialPermsn = Object.assign({});

    if (settingsData.user_management_isSelected) {
      userManagmentPermsn = filterData(settingsData.user_management);
    }
    if (settingsData.role_management_isSelected) {
      roleManagmentPermsn = filterData(settingsData.role_management);
    }
    if (settingsData.program_conguration_isSelected) {
      programConfigPermsn = filterData(settingsData.program_conguration);
    }

    if (planningData.program_standards_isSelected) {
      programStandardPermsn = filterData(planningData.program_standards);
    }

    if (planningData.central_planning_isSelected) {
      centralPlanningPermsn = filterData(planningData.central_planning);
    }

    if (planningData.challenged_build_isSelected) {
      challengeBuildPermsn = filterData(planningData.challenged_build);
    }

    if (planningData.final_plan_isSelected) {
      finalPlanPermsn = filterData(planningData.final_plan);
    }

    if (measurementData.photo_portal_isSelected) {
      photoPorttalPermsn = filterData(measurementData.photo_portal);
    }

    if (reportingData.event_planned_isSelected) {
      eventPlannedPermsn = filterData(reportingData.event_planned);
    }

    if (reportingData.performance_and_kpi_isSelected) {
      performanceKpisPermsn = filterData(reportingData.performance_and_kpi);
    }

    if (reportingData.pacing_isSelected) {
      pacingPermsn = filterData(reportingData.pacing);
    }

    if (reportingData.financial_isSelected) {
      financialPermsn = filterData(reportingData.financial);
    }

    roleData = {
      active: statuss,
      name: roleNames.split(" ").join("-"),
      prettyName: roleNames,
      alias: shortNames.split(" ").join("-"),
      prettyAlias: shortNames,
      isSuperAdminPermission: isSuperAdminPermission,
      channel: {
        on_off_premise: on_off_premise,
        non_premise: non_premise,
      },
      userRoleManagmentModule: {
        userManagment: userManagmentPermsn,
        roleManagment: roleManagmentPermsn,
        programConfiguration: programConfigPermsn,
      },
      planningModule: {
        programStandard: programStandardPermsn,
        centralPlanning: centralPlanningPermsn,
        challengeBuild: challengeBuildPermsn,
        finalPlan: finalPlanPermsn,
      },
      measurementModule: {
        photoPorttal: photoPorttalPermsn,
      },
      reportingModule: {
        eventPlanned: eventPlannedPermsn,
        performanceKpis: performanceKpisPermsn,
        pacing: pacingPermsn,
        financial: financialPermsn,
      },
      activeDirectoryId: "7f12610a-3370-42d2-8b9a-aed08f02f528",
      lastActionIp: "127.0.0.1",
      createdBy: "5d14fa6ea71ff982ccb0dba2",
    };
    if (role_id) {
      dispatch(updateUserRoleAPI(role_id, roleData));
    } else {
      dispatch(createUserRoleAPI(roleData));
    }
  };

  console.log("roles outer roleResponse =====", roles);
  const [modalError, setModalError] = useState(false);

  console.log("modalError====", modalError);

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

      <Grid className={classes.contntBox} item xs={12} md={9} lg={10}>
        <TabPanel togleValue={togleValue} index={0}>
          <Paper className={classes.root} elevation={0}>
            <div className={classes.containerRoot}>
              {(roles.roleResponse.error || roles.roleResponse.message) &&
              modalError ? (
                <CustomModal
                  title="Validation Error Message(s)"
                  errors={
                    roles.roleResponse.error
                      ? roles.roleResponse.error
                      : roles.roleResponse.message
                  }
                  openModal={modalError}
                  handleClose={() => handleClose()}
                />
              ) : null}
              {roles.roleResponse.data && modalError ? (
                <CustomModal
                  title="Role Added Successfully"
                  errors=""
                  success={roles.roleResponse.data}
                  openModal={modalError}
                  handleClose={() => handleClose()}
                />
              ) : null}
              {roles.roleResponse.data && modalError && role_id ? (
                <CustomModal
                  title="Role Updated Successfully"
                  errors=""
                  success={roles.roleResponse.data}
                  openModal={modalError}
                  handleClose={() => handleClose()}
                />
              ) : null}
              <RoleDetails
                roleNameRef={roleNameRef}
                shortNameRef={shortNameRef}
                statusRef={statusRef}
                channelRef={channelRef}
                permissionRef={permissionRef}
              />
              {/* ##################### SETTINGS Toggle ##################### */}
              <RoleSettings
                settingsData={(data: any) => settingsDataFunc(data)}
              />
              {/* ##################### SETTINGS Toggle End ##################### */}

              {/* ##################### Planning Toggle ##################### */}

              <RolePlanning
                planningData={(data: any) => planningDataFunc(data)}
              />
              {/* ##################### Planning Toggle End ##################### */}

              {/* ##################### Measurement Toggle ##################### */}
              <RoleMeasurement
                measurementData={(data: any) => measurementDataFunc(data)}
              />
              {/* ##################### Measurement Toggle End ##################### */}

              {/* ##################### Reporting Toggle ##################### */}
              <RoleReporting
                reportingData={(data: any) => reportingDataFunc(data)}
              />
              {/* ##################### Reporting Toggle End ##################### */}

              <div style={{ padding: "0 10px", marginTop: 20 }}>
                <Button
                  className={`${classes.button} ${classes.edit}`}
                  onClick={createUserRole}
                >
                  {" "}
                  {role_id ? "Update Role" : "Create Role"}{" "}
                </Button>
              </div>
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
