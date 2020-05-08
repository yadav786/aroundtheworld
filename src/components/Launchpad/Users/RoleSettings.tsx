import React, { useEffect } from "react"; 
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useLocation } from "react-router-dom";

import { RoleStyle, StyledTableRow, StyledTableCell, GreenCheckbox } from './RoleStyle';

export const RoleSettings = (props:any) => {

  const location = useLocation();
  let roleState: any = typeof location.state !== 'undefined' ?  location.state : {}; 

const classes = RoleStyle();  
const [state, setState] = React.useState({
    active: true,
    settings: false,
    // user_and_role_management
    user_and_role_management: false,
    
    user_management_isSelected: false,
    user_management: [
      {
        name: "User Create",
        data: [
          { id: 0, value: "Create", isChecked: false, isDisabled: false },
          { id: 1, value: "Edit", isChecked: false, isDisabled: false },
          { id: 2, value: "Delete", isChecked: false, isDisabled: false },
          { id: 3, value: "Upload", isChecked: false, isDisabled: false },
          { id: 4, value: "Download", isChecked: false, isDisabled: true },
          { id: 5, value: "Share", isChecked: false, isDisabled: true },
          { id: 6, value: "View", isChecked: false, isDisabled: false },
          {
            id: 7,
            value: "Active/Deactive",
            isChecked: false,
            isDisabled: false,
          },
          {
            id: 8,
            value: "Approve/Disapprove",
            isChecked: false,
            isDisabled: true,
          },
        ],
      },
      {
        name: "Role Assigning",
        data: [
          { id: 9, value: "Create", isChecked: false, isDisabled: false },
          { id: 10, value: "Edit", isChecked: false, isDisabled: false },
          { id: 11, value: "Delete", isChecked: false, isDisabled: false },
          { id: 12, value: "Upload", isChecked: false, isDisabled: false },
          { id: 13, value: "Download", isChecked: false, isDisabled: true },
          { id: 14, value: "Share", isChecked: false, isDisabled: true },
          { id: 15, value: "View", isChecked: false, isDisabled: false },
          {
            id: 16,
            value: "Active/Deactive",
            isChecked: false,
            isDisabled: false,
          },
          {
            id: 17,
            value: "Approve/Disapprove",
            isChecked: false,
            isDisabled: true,
          },
        ],
      },
      {
        name: "CSV",
        data: [
          { id: 18, value: "Create", isChecked: false, isDisabled: true },
          { id: 19, value: "Edit", isChecked: false, isDisabled: true },
          { id: 20, value: "Delete", isChecked: false, isDisabled: true },
          { id: 21, value: "Upload", isChecked: false, isDisabled: true },
          { id: 22, value: "Download", isChecked: false, isDisabled: false },
          { id: 23, value: "Share", isChecked: false, isDisabled: true },
          { id: 24, value: "View", isChecked: false, isDisabled: true },
          {
            id: 25,
            value: "Active/Deactive",
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 26,
            value: "Approve/Disapprove",
            isChecked: false,
            isDisabled: true,
          },
        ],
      },
    ],

    role_management_isSelected: false,
    role_management: [
      {
        name: "Role Creation",
        data: [
          { id: 0, value: "Create", isChecked: false, isDisabled: false },
          { id: 1, value: "Edit", isChecked: false, isDisabled: false },
          { id: 2, value: "Delete", isChecked: false, isDisabled: false },
          { id: 3, value: "Upload", isChecked: false, isDisabled: false },
          { id: 4, value: "Download", isChecked: false, isDisabled: true },
          { id: 5, value: "Share", isChecked: false, isDisabled: true },
          { id: 6, value: "View", isChecked: false, isDisabled: false },
          { id: 7, value: "Active/Deactive", isChecked: false, isDisabled: false },
          { id: 8, value: "Approve/Disapprove",
            isChecked: false,
            isDisabled: true,
          },
        ],
      },
      {
        name: "Grant Permission",
        data: [
          { id: 9, value: "Create", isChecked: false, isDisabled: false },
          { id: 10, value: "Edit", isChecked: false, isDisabled: false },
          { id: 11, value: "Delete", isChecked: false, isDisabled: false },
          { id: 12, value: "Upload", isChecked: false, isDisabled: false },
          { id: 13, value: "Download", isChecked: false, isDisabled: true },
          { id: 14, value: "Share", isChecked: false, isDisabled: true },
          { id: 15, value: "View", isChecked: false, isDisabled: false },
          {
            id: 16,
            value: "Active/Deactive",
            isChecked: false,
            isDisabled: false,
          },
          {
            id: 17,
            value: "Approve/Disapprove",
            isChecked: false,
            isDisabled: true,
          },
        ],
      },
      {
        name: "CSV",
        data: [
          { id: 18, value: "Create", isChecked: false, isDisabled: true },
          { id: 19, value: "Edit", isChecked: false, isDisabled: true },
          { id: 20, value: "Delete", isChecked: false, isDisabled: true },
          { id: 21, value: "Upload", isChecked: false, isDisabled: true },
          { id: 22, value: "Download", isChecked: false, isDisabled: false },
          { id: 23, value: "Share", isChecked: false, isDisabled: true },
          { id: 24, value: "View", isChecked: false, isDisabled: true },
          {
            id: 25,
            value: "Active/Deactive",
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 26,
            value: "Approve/Disapprove",
            isChecked: false,
            isDisabled: true,
          },
        ],
      },
    ],

    program_conguration_isSelected: false,
    program_conguration: [
      {
        name: "Campaign",
        data: [
          { id: 0, value: "Create", isChecked: false, isDisabled: false },
          { id: 1, value: "Edit", isChecked: false, isDisabled: false },
          { id: 2, value: "Delete", isChecked: false, isDisabled: true },
          { id: 3, value: "Upload", isChecked: false, isDisabled: true },
          { id: 4, value: "Download", isChecked: false, isDisabled: true },
          { id: 5, value: "Share", isChecked: false, isDisabled: true },
          { id: 6, value: "View", isChecked: false, isDisabled: false },
          {
            id: 7,
            value: "Active/Deactive",
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 8,
            value: "Approve/Disapprove",
            isChecked: false,
            isDisabled: true,
          },
        ],
      },
      {
        name: "Program",
        data: [
          { id: 9, value: "Create", isChecked: false, isDisabled: true },
          { id: 10, value: "Edit", isChecked: false, isDisabled: false },
          { id: 11, value: "Delete", isChecked: false, isDisabled: false },
          { id: 12, value: "Upload", isChecked: false, isDisabled: true },
          { id: 13, value: "Download", isChecked: false, isDisabled: true },
          { id: 14, value: "Share", isChecked: false, isDisabled: true },
          { id: 15, value: "View", isChecked: false, isDisabled: false },
          {
            id: 16,
            value: "Active/Deactive",
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 17,
            value: "Approve/Disapprove",
            isChecked: false,
            isDisabled: true,
          },
        ],
      },
      {
        name: "Salesforce Integration",
        data: [
          { id: 18, value: "Create", isChecked: false, isDisabled: true },
          { id: 19, value: "Edit", isChecked: false, isDisabled: true },
          { id: 20, value: "Delete", isChecked: false, isDisabled: true },
          { id: 21, value: "Upload", isChecked: false, isDisabled: false },
          { id: 22, value: "Download", isChecked: false, isDisabled: true },
          { id: 23, value: "Share", isChecked: false, isDisabled: true },
          { id: 24, value: "View", isChecked: false, isDisabled: true },
          {
            id: 25,
            value: "Active/Deactive",
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 26,
            value: "Approve/Disapprove",
            isChecked: false,
            isDisabled: true,
          },
        ],
      },
      {
        name: "Budget CSV",
        data: [
          { id: 27, value: "Create", isChecked: false, isDisabled: true },
          { id: 28, value: "Edit", isChecked: false, isDisabled: true },
          { id: 29, value: "Delete", isChecked: false, isDisabled: true },
          { id: 30, value: "Upload", isChecked: false, isDisabled: false },
          { id: 31, value: "Download", isChecked: false, isDisabled: true },
          { id: 32, value: "Share", isChecked: false, isDisabled: true },
          { id: 33, value: "View", isChecked: false, isDisabled: true },
          {
            id: 34,
            value: "Active/Deactive",
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 35,
            value: "Approve/Disapprove",
            isChecked: false,
            isDisabled: true,
          },
        ],
      },
      {
        name: "KPI CSV",
        data: [
          { id: 36, value: "Create", isChecked: false, isDisabled: true },
          { id: 37, value: "Edit", isChecked: false, isDisabled: true },
          { id: 38, value: "Delete", isChecked: false, isDisabled: true },
          { id: 39, value: "Upload", isChecked: false, isDisabled: false },
          { id: 40, value: "Download", isChecked: false, isDisabled: true },
          { id: 41, value: "Share", isChecked: false, isDisabled: true },
          { id: 42, value: "View", isChecked: false, isDisabled: true },
          {
            id: 43,
            value: "Active/Deactive",
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 44,
            value: "Approve/Disapprove",
            isChecked: false,
            isDisabled: true,
          },
        ],
      },
    ]
  });

  useEffect(() => {
  
  if(roleState.userRoleManagmentModule !== undefined){

  // All USER MANAGEMENT SELECTED

  let user_management = state.user_management;
  let user_manageAll = true;
  user_management.forEach((selectAll, index) => {
    console.log('selectAll====', selectAll);
    selectAll.data.forEach((data) => {
       if(selectAll['name']==='User Create'){ 
        if(roleState.userRoleManagmentModule.userManagment.userCreate[data.value.toLowerCase()]){
          data.isChecked = true;
        }
        else if(data.isDisabled === false){
          user_manageAll = false
        }
       }
       if(selectAll['name']==='Role Assigning'){
        if(roleState.userRoleManagmentModule.userManagment.roleAssigning[data.value.toLowerCase()]){
          data.isChecked = true;
        }
        else if(data.isDisabled === false){
          user_manageAll = false
        }
       }
       if(selectAll['name']==='CSV'){
        if(roleState.userRoleManagmentModule.userManagment.csv[data.value.toLowerCase()]){
          data.isChecked = true;
        }
        else if(data.isDisabled === false){
          user_manageAll = false
        }
      }
    });

      let newArray = [...state.user_management];
      newArray[index] = { ...newArray[index], data: newArray[index].data };
      setState({ ...state, user_management: newArray });

  });

  setState({
    ...state,
    user_management_isSelected: user_manageAll
  }); 

// All ROLE MANAGEMENT SELECTED

  let role_management = state.role_management;
  let role_manageall = true;
  
  role_management.forEach((selectAll, index) => {
    
    selectAll.data.forEach((data) => {
       if(selectAll['name']==='Role Creation'){ 
        if(roleState.userRoleManagmentModule.roleManagment.roleCreate[data.value.toLowerCase()]){
          data.isChecked = true;
        }
        else if(data.isDisabled === false){
          role_manageall = false
        }
       }
       
       if(selectAll['name']==='Grant Premission'){
        if(roleState.userRoleManagmentModule.roleManagment.grantPermission[data.value.toLowerCase()]){
          data.isChecked = true;
        }
        else if(data.isDisabled === false){
          role_manageall = false
        }
       }
       if(selectAll['name']==='CSV'){
        if(roleState.userRoleManagmentModule.roleManagment.csv[data.value.toLowerCase()]){
          data.isChecked = true;
        }
        else if(data.isDisabled === false){
          role_manageall = false
        }
      }
    });

      let newArray = [...state.role_management];
      newArray[index] = { ...newArray[index], data: newArray[index].data };
      setState({ ...state, role_management: newArray });

    }); 

    setState({
      ...state,
      role_management_isSelected: role_manageall
    });


  // All PROGRAM  CONFIGURATION SELECTED
  let program_conguration = state.program_conguration;
  let program_all_selcted = true;
  program_conguration.forEach((selectAll, index) => {

    selectAll.data.forEach((data) => {
       if(selectAll['name']==='Campaign'){ 
        if(roleState.userRoleManagmentModule.programConfiguration.campaign[data.value.toLowerCase()]){
          data.isChecked = true;
        }
        else if(data.isDisabled === false){
          program_all_selcted = false
        }
       }
       
       if(selectAll['name']==='Program'){
        if(roleState.userRoleManagmentModule.programConfiguration.program[data.value.toLowerCase()]){
          data.isChecked = true;
        }
        else if(data.isDisabled === false){
          program_all_selcted = false
        }
       }
       if(selectAll['name']==='KPI CSV'){
        if(roleState.userRoleManagmentModule.programConfiguration.kpiCsv[data.value.toLowerCase()]){
          data.isChecked = true;
        }
        else if(data.isDisabled === false){
          program_all_selcted = false
        }
      }
      if(selectAll['name']==='Budget CSV'){
        if(roleState.userRoleManagmentModule.programConfiguration.BudgetCsv[data.value.toLowerCase()]){
          data.isChecked = true;
        }
        else if(data.isDisabled === false){
          program_all_selcted = false
        }
      }
      if(selectAll['name']==='Salesforce Integration'){
        if(roleState.userRoleManagmentModule.programConfiguration.salseForceIntegration[data.value.toLowerCase()]){
          data.isChecked = true;
        }
        else if(data.isDisabled === false){
          program_all_selcted = false
        } 
      }
    });

      let newArray = [...state.program_conguration];
      newArray[index] = { ...newArray[index], data: newArray[index].data };
      setState({ ...state, program_conguration: newArray });

    });
    
  setState({ ...state, program_conguration_isSelected: program_all_selcted });

  // All Settings SELECTED
  if(user_manageAll && role_manageall && program_all_selcted){
    const updatedData = { ...state, settings: true }
    setState(updatedData);
   }

}
   

  },[location.state])

  const handleUserManagementCheckChieldElement = (item_id: number) => (event: {
    target: { value: string; checked: boolean };
  }) => {
    let user_management = state.user_management;
    user_management.forEach((selectAll, index) => {
      selectAll.data.forEach((data) => {
        if (data.id === item_id && data.value === event.target.value && !data.isDisabled) {
          data.isChecked = event.target.checked;
        }
      });
      let newArray = [...state.user_management];
      newArray[index] = { ...newArray[index], data: newArray[index].data };
      setState({ ...state, user_management: newArray });
      let found: any = false;
      found = selectAll.data.find((data) => (!data.isChecked && !data.isDisabled)) ? true : false;
      if (!found) {
        setState({ ...state, user_management_isSelected: true });
      } else if (found) {
        setState({ ...state, user_management_isSelected: false });
      }
    });

    let arr = [];
    for (let index in state.user_management) {
      let found: any;
      found = state.user_management[index].data.find((data) => (!data.isChecked && !data.isDisabled))
        ? true
        : false;
      console.log(found);
      arr.push({ tick: found });
    }
    console.log(arr);
    let got: any = false;
    got = arr.find((data) => data.tick) ? true : false;
    console.log(got);
    if (!got) {
      setState({ ...state, user_management_isSelected: true });
    } else if (got) {
      const { user_and_role_management } = state;
      if (user_and_role_management) {
        setState({
          ...state,
          user_management_isSelected: false,
          user_and_role_management: !user_and_role_management,
        });
      } else {
        setState({ ...state, user_management_isSelected: false });
      }
    }
  };

  const { settings } = state;

  const handleProgramCongurationCheckChieldElement = (item_id: number) => (event: { target: { value: string; checked: boolean } }) => {
    let program_conguration = state.program_conguration;
    program_conguration.forEach((selectAll, index) => {
      selectAll.data.forEach((data) => {
        if (data.id === item_id && data.value === event.target.value  && !data.isDisabled) {
          data.isChecked = event.target.checked;
        }
      });
      let newArray = [...state.program_conguration];
      newArray[index] = { ...newArray[index], data: newArray[index].data };
      setState({ ...state, program_conguration: newArray });
      let found: any = false;
      found = selectAll.data.find((data) => (!data.isChecked && !data.isDisabled)) ? true : false;
      if (!found) {
        setState({ ...state, program_conguration_isSelected: true });
      } else if (found) {
        setState({ ...state, program_conguration_isSelected: false });
      }
    });

    let arr = [];
    for (let index in state.program_conguration) {
      let found: any;
      found = state.program_conguration[index].data.find(
        (data) => (!data.isChecked && !data.isDisabled)
      )
        ? true
        : false;
      console.log(found);
      arr.push({ tick: found });
    }
    console.log(arr);
    let got: any = false;
    got = arr.find((data) => data.tick) ? true : false;
    console.log(got);
    if (!got) {
      setState({ ...state, program_conguration_isSelected: true });
    } else if (got) {
      const { user_and_role_management } = state;
      if (user_and_role_management) {
        setState({
          ...state,
          program_conguration_isSelected: false,
          user_and_role_management: !user_and_role_management,
        });
      } else {
        setState({ ...state, program_conguration_isSelected: false });
      }

    }
  };

  
  // role_management Handlers===>
  const handleRoleManagementAllChecked = (itemCusData: string) => (event: {
    target: { checked: boolean };
  }) => {
    let role_management = state.role_management;
    role_management.forEach((data, index) => {
      data.data.forEach((item) => {
        if (!item.isDisabled) {
          item.isChecked = event.target.checked;
        }
      });
      let newArray = [...state.role_management];
      newArray[index] = { ...newArray[index], data: newArray[index].data };
      setState({ ...state, role_management: newArray });
    });
    if (itemCusData !== "fromMain") {
      const { role_management_isSelected, user_and_role_management } = state;

      if (user_and_role_management && role_management_isSelected) {
        setState({
          ...state,
          role_management_isSelected: !role_management_isSelected,
          user_and_role_management: !user_and_role_management,
        });
      } else {
        setState({
          ...state,
          role_management_isSelected: !role_management_isSelected,
        });
      }
    }
  };
  const handleRoleManagementCheckChieldElement = (item_id: number) => (event: {
    target: { value: string; checked: boolean };
  }) => {
    let role_management = state.role_management;
    role_management.forEach((selectAll, index) => {
      selectAll.data.forEach((data) => {
        if (data.id === item_id && data.value === event.target.value && !data.isDisabled) {
          data.isChecked = event.target.checked;
        }
      });
      let newArray = [...state.role_management];
      newArray[index] = { ...newArray[index], data: newArray[index].data };
      setState({ ...state, role_management: newArray });
      let found: any = false;
      found = selectAll.data.find((data) => (!data.isChecked  && !data.isDisabled)) ? true : false;
      if (!found) {
        setState({ ...state, role_management_isSelected: true });
      } else if (found) {
        setState({ ...state, role_management_isSelected: false });
      }
    });

    let arr = [];
    for (let index in state.role_management) {
      let found: any;
      found = state.role_management[index].data.find((data) => (!data.isChecked && !data.isDisabled))
        ? true
        : false;
      console.log(found);
      arr.push({ tick: found });
    }
    console.log(arr);
    let got: any = false;
    got = arr.find((data) => data.tick) ? true : false;
    console.log(got);
    if (!got) {
      setState({ ...state, role_management_isSelected: true });
    } else if (got) {
      const { user_and_role_management } = state;
      if (user_and_role_management) {
        setState({
          ...state,
          role_management_isSelected: false,
          user_and_role_management: !user_and_role_management,
        });
      } else {
        setState({ ...state, role_management_isSelected: false });
      }
    }
  };
  
  // ===> SETTINGS Handler
  const handleUserAndRoleManagementChecked = (event: {
    target: { checked: boolean };
  }) => {
    handleUserManagementAllChecked("fromMain")(event);
    handleRoleManagementAllChecked("fromMain")(event);
    handleProgramCongurationAllChecked("fromMain")(event);
 
    const {
      user_and_role_management,
      user_management_isSelected,
      role_management_isSelected,
    } = state;
    setState({
      ...state,
      user_and_role_management: !user_and_role_management,
      user_management_isSelected: !user_and_role_management,
      role_management_isSelected: !user_and_role_management,
      program_conguration_isSelected: !user_and_role_management,
    });
  };

  const toggleBoxUserDetails = () => {
    const { settings } = state;
    const updatedData = { ...state, settings: !settings }
    setState(updatedData);
  };

  
  // program_configuration Handlers===>
  const handleProgramCongurationAllChecked = (itemCusData: string) => (event: {
    target: { checked: boolean };
  }) => {
    let program_conguration = state.program_conguration;
    program_conguration.forEach((data, index) => {
      data.data.forEach((item) => {
        if (!item.isDisabled) {
          item.isChecked = event.target.checked;
        }
      });
      let newArray = [...state.program_conguration];
      newArray[index] = { ...newArray[index], data: newArray[index].data };
      setState({ ...state, program_conguration: newArray });
    });
    if (itemCusData !== "fromMain") {
      const {
        program_conguration_isSelected,
        user_and_role_management,
      } = state;

      if (user_and_role_management && program_conguration_isSelected) {
        setState({
          ...state,
          program_conguration_isSelected: !program_conguration_isSelected,
          user_and_role_management: !user_and_role_management,
        });
      } else {
        setState({
          ...state,
          program_conguration_isSelected: !program_conguration_isSelected,
        });
      }
    }
  };

  // user_management Handlers===>
  const handleUserManagementAllChecked = (itemCusData: string) => (event: {
    target: { checked: boolean };
  }) => {
    let user_management = state.user_management;
    user_management.forEach((data, index) => {
      data.data.forEach((item) => {
        if (!item.isDisabled) {
          item.isChecked = event.target.checked;
        }
      });
      let newArray = [...state.user_management];
      newArray[index] = { ...newArray[index], data: newArray[index].data };
      setState({ ...state, user_management: newArray });
    });
    if (itemCusData !== "fromMain") {
      const { user_management_isSelected, role_management_isSelected, user_and_role_management, } = state;

      if (user_and_role_management && user_management_isSelected) {
        setState({
          ...state,
          user_management_isSelected: !user_management_isSelected,
          user_and_role_management: !user_and_role_management,
        });
      } else {
        setState({
          ...state,
          user_management_isSelected: !user_management_isSelected,
        });
      }
    }
  };
 
  useEffect(()=>{
   props.settingsData(state)
  },[state])

  return(
      <div className="box">
      <div className="boxTitle">
        {/* {title} */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0 10px",
            cursor: "pointer",
          }}
        >
          <span onClick={toggleBoxUserDetails}>
            {settings && (
              <RemoveCircleIcon
                style={{ color: "rgb(134, 25, 50)" }}
              />
            )}
            {!settings && (
              <AddCircleIcon style={{ color: "rgb(134, 25, 50)" }} />
            )}
          </span>
          <p className={classes.toglTrigr}>
            {" "}
            <FormControlLabel
              className={classes.toglerChckBoxLabel}
              control={
                <GreenCheckbox
                  className={classes.toglerChckBox}
                  style={{
                    marginRight: "-5px",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                  size="medium"
                  value="brand"
                  onChange={handleUserAndRoleManagementChecked}
                  checked={state.user_and_role_management}
                />
              }
              label="Settings"
            />
          </p>
        </div>
      </div>
      {settings && (
        <div>
          {/*User management table start */}
          <Grid container spacing={1}>
            <Grid item xs>
              <Box pl={2}>
                {" "}
                <Typography
                  className={classes.tblheadng}
                  variant="h6"
                >
                  {" "}
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        className={clsx(
                          classes.toglerChckBox,
                          classes.tblheadng
                        )}
                        style={{ marginRight: "-5px" }}
                        size="small"
                        value="User Management"
                        onChange={handleUserManagementAllChecked(
                          "user_management"
                        )}
                        checked={state.user_management_isSelected}
                      />
                    }
                    label="User Management"
                  />{" "}
                </Typography>{" "}
              </Box>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <StyledTableCell
                      className={classes.theadTxtFirst}
                      align="left"
                    >
                      Modules
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.theadTxt}
                      align="center"
                    >
                      Create
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.theadTxt}
                      align="center"
                    >
                      Edit
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.theadTxt}
                      align="center"
                    >
                      Delete
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.theadTxt}
                      align="center"
                    >
                      Upload
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.theadTxt}
                      align="center"
                    >
                      Download
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.theadTxt}
                      align="center"
                    >
                      Share
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.theadTxt}
                      align="center"
                    >
                      View
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.theadTxt}
                      align="center"
                    >
                      Activate/
                      <br />
                      Deactivate
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.theadTxt}
                      align="center"
                    >
                      Approve/
                      <br />
                      Disapprove
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {state.user_management.map((item, index) => {
                    return (
                      <StyledTableRow key={item.name}>
                        <StyledTableCell
                          className={classes.tModulesTxt}
                          component="td"
                          scope="row"
                          align="left"
                        >
                          {item.name}
                        </StyledTableCell>
                        {item.data.map((x, index) => {
                          return (
                            <StyledTableCell align="center">
                              <FormControlLabel
                                disabled={x.isDisabled}
                                className={classes.marginLRAuto}
                                control={
                                  <GreenCheckbox
                                    size="small"
                                    key={x.id}
                                    value={index}
                                    itemClicked={x.id}
                                    handleCheckChieldElement={handleUserManagementCheckChieldElement(
                                      x.id
                                    )}
                                    {...x}
                                  />
                                }
                                label=""
                              />
                            </StyledTableCell>
                          );
                        })}
                      </StyledTableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Grid>
          </Grid>
          {/* User management table end */}

          {/* Role management table start */}
          <Grid container spacing={1}>
            <Grid item xs>
              <Box pl={2}>
                {" "}
                <Typography
                  className={classes.tblheadng}
                  variant="h6"
                >
                  {" "}
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        className={clsx(
                          classes.toglerChckBox,
                          classes.tblheadng
                        )}
                        style={{ marginRight: "-5px" }}
                        size="small"
                        value="Role Management"
                        onChange={handleRoleManagementAllChecked(
                          "role_management"
                        )}
                        checked={state.role_management_isSelected}
                      />
                    }
                    label="Role Management"
                  />{" "}
                </Typography>{" "}
              </Box>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <StyledTableCell
                      className={classes.theadTxtFirst}
                      align="left"
                    >
                      Modules
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.theadTxt}
                      align="center"
                    >
                      Create
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.theadTxt}
                      align="center"
                    >
                      Edit
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.theadTxt}
                      align="center"
                    >
                      Delete
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.theadTxt}
                      align="center"
                    >
                      Upload
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.theadTxt}
                      align="center"
                    >
                      Download
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.theadTxt}
                      align="center"
                    >
                      Share
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.theadTxt}
                      align="center"
                    >
                      View
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.theadTxt}
                      align="center"
                    >
                      Activate/
                      <br />
                      Deactivate
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.theadTxt}
                      align="center"
                    >
                      Approve/
                      <br />
                      Disapprove
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {state.role_management.map((item, index) => {
                    return (
                      <StyledTableRow key={item.name}>
                        <StyledTableCell
                          className={classes.tModulesTxt}
                          component="td"
                          scope="row"
                        >
                          {item.name}
                        </StyledTableCell>
                        {item.data.map((x, index) => {
                          return (
                            <StyledTableCell align="center">
                              <FormControlLabel
                                disabled={x.isDisabled}
                                className={classes.marginLRAuto}
                                control={
                                  <GreenCheckbox
                                    size="small"
                                    key={x.id}
                                    value={index}
                                    itemClicked={x.id}
                                    handleCheckChieldElement={handleRoleManagementCheckChieldElement(
                                      x.id
                                    )}
                                    {...x}
                                  />
                                }
                                label=""
                              />
                            </StyledTableCell>
                          );
                        })}
                      </StyledTableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Grid>
          </Grid>
          {/* Role management table end */}

          {/* Program Conguration table start */}
          <Grid container spacing={1}>
            <Grid item xs>
              <Box pl={2}>
                {" "}
                <Typography
                  className={classes.tblheadng}
                  variant="h6"
                >
                  {" "}
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        className={clsx(
                          classes.toglerChckBox,
                          classes.tblheadng
                        )}
                        style={{ marginRight: "-5px" }}
                        size="small"
                        value="Program Conguration"
                        onChange={handleProgramCongurationAllChecked(
                          "program_conguration"
                        )}
                        checked={state.program_conguration_isSelected}
                      />
                    }
                    label="Program Conguration"
                  />{" "}
                </Typography>{" "}
              </Box>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <StyledTableCell
                      className={classes.theadTxtFirst}
                      align="left"
                    >
                      Modules
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.theadTxt}
                      align="center"
                    >
                      Create
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.theadTxt}
                      align="center"
                    >
                      Edit
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.theadTxt}
                      align="center"
                    >
                      Delete
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.theadTxt}
                      align="center"
                    >
                      Upload
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.theadTxt}
                      align="center"
                    >
                      Download
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.theadTxt}
                      align="center"
                    >
                      Share
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.theadTxt}
                      align="center"
                    >
                      View
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.theadTxt}
                      align="center"
                    >
                      Activate/
                      <br />
                      Deactivate
                    </StyledTableCell>
                    <StyledTableCell
                      className={classes.theadTxt}
                      align="center"
                    >
                      Approve/
                      <br />
                      Disapprove
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {state.program_conguration.map((item, index) => {
                    return (
                      <StyledTableRow key={item.name}>
                        <StyledTableCell
                          className={classes.tModulesTxt}
                          component="td"
                          scope="row"
                        >
                          {item.name}
                        </StyledTableCell>
                        {item.data.map((x, index) => {
                          return (
                            <StyledTableCell align="center">
                              <FormControlLabel
                                disabled={x.isDisabled}
                                className={classes.marginLRAuto}
                                control={
                                  <GreenCheckbox
                                    size="small"
                                    key={x.id}
                                    value={index}
                                    itemClicked={x.id}
                                    handleCheckChieldElement={handleProgramCongurationCheckChieldElement(
                                      x.id
                                    )}
                                    {...x}
                                  />
                                }
                                label=""
                              />
                            </StyledTableCell>
                          );
                        })}
                      </StyledTableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Grid>
          </Grid>
          {/* Program Conguration table end */}
        </div>
      )}
    </div>
  )

}
