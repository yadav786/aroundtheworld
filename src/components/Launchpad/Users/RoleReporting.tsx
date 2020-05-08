import React, { useRef, useEffect } from "react"; 
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

export const RoleReporting = (props:any) => {

const location = useLocation();
let roleState: any = typeof location.state !== 'undefined' ?  location.state : {}; 

const classes = RoleStyle();  
let reportingRef = useRef('');
  const [state, setState] = React.useState({
    active: true,
    reportingOpened: true,
    // Reporting
    reporting: false,
    event_planned_isSelected: false,
    event_planned: [
      {
        name: "View",
        data: [
          { id: 0, value: "Create", isChecked: false, isDisabled: true },
          { id: 1, value: "Edit", isChecked: false, isDisabled: true },
          { id: 2, value: "Delete", isChecked: false, isDisabled: false },
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
        name: "CSV",
        data: [
          { id: 9, value: "Create", isChecked: false, isDisabled: true },
          { id: 10, value: "Edit", isChecked: false, isDisabled: true },
          { id: 11, value: "Delete", isChecked: false, isDisabled: false },
          { id: 12, value: "Upload", isChecked: false, isDisabled: true },
          { id: 13, value: "Download", isChecked: false, isDisabled: false },
          { id: 14, value: "Share", isChecked: false, isDisabled: true },
          { id: 15, value: "View", isChecked: false, isDisabled: true },
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
    ],

    performance_and_kpi_isSelected: false,
    performance_and_kpi: [
      {
        name: "View",
        data: [
          { id: 0, value: "Create", isChecked: false, isDisabled: true },
          { id: 1, value: "Edit", isChecked: false, isDisabled: true },
          { id: 2, value: "Delete", isChecked: false, isDisabled: false },
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
        name: "CSV",
        data: [
          { id: 9, value: "Create", isChecked: false, isDisabled: true },
          { id: 10, value: "Edit", isChecked: false, isDisabled: true },
          { id: 11, value: "Delete", isChecked: false, isDisabled: false },
          { id: 12, value: "Upload", isChecked: false, isDisabled: true },
          { id: 13, value: "Download", isChecked: false, isDisabled: false },
          { id: 14, value: "Share", isChecked: false, isDisabled: true },
          { id: 15, value: "View", isChecked: false, isDisabled: true },
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
    ],

    pacing_isSelected: false,
    pacing: [
      {
        name: "By Markets",
        data: [
          { id: 0, value: "Create", isChecked: false, isDisabled: true },
          { id: 1, value: "Edit", isChecked: false, isDisabled: true },
          { id: 2, value: "Delete", isChecked: false, isDisabled: false },
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
        name: "By Brands",
        data: [
          { id: 9, value: "Create", isChecked: false, isDisabled: true },
          { id: 10, value: "Edit", isChecked: false, isDisabled: true },
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
        name: "By Program",
        data: [
          { id: 18, value: "Create", isChecked: false, isDisabled: true },
          { id: 19, value: "Edit", isChecked: false, isDisabled: true },
          { id: 20, value: "Delete", isChecked: false, isDisabled: false },
          { id: 21, value: "Upload", isChecked: false, isDisabled: true },
          { id: 22, value: "Download", isChecked: false, isDisabled: true },
          { id: 23, value: "Share", isChecked: false, isDisabled: true },
          { id: 24, value: "View", isChecked: false, isDisabled: false },
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
        name: "CSV",
        data: [
          { id: 27, value: "Create", isChecked: false, isDisabled: true },
          { id: 28, value: "Edit", isChecked: false, isDisabled: true },
          { id: 29, value: "Delete", isChecked: false, isDisabled: false },
          { id: 30, value: "Upload", isChecked: false, isDisabled: true },
          { id: 31, value: "Download", isChecked: false, isDisabled: false },
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
    ],

    financial_isSelected: false,
    financial: [
      {
        name: "View",
        data: [
          { id: 0, value: "Create", isChecked: false, isDisabled: true },
          { id: 1, value: "Edit", isChecked: false, isDisabled: true },
          { id: 2, value: "Delete", isChecked: false, isDisabled: false },
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
        name: "CSV",
        data: [
          { id: 9, value: "Create", isChecked: false, isDisabled: true },
          { id: 10, value: "Edit", isChecked: false, isDisabled: true },
          { id: 11, value: "Delete", isChecked: false, isDisabled: false },
          { id: 12, value: "Upload", isChecked: false, isDisabled: true },
          { id: 13, value: "Download", isChecked: false, isDisabled: false },
          { id: 14, value: "Share", isChecked: false, isDisabled: true },
          { id: 15, value: "View", isChecked: false, isDisabled: true },
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
    ],
  });


  
  useEffect(() => {
   
    console.log('roleState=====', roleState);
    console.log('state=====', state);

    if(roleState.reportingModule !== undefined){
  
    // All USER MANAGEMENT SELECTED
   // Event Planned 
    let event_planned = state.event_planned;
    let eventPlanned_manageAll = true;
    event_planned.forEach((selectAll, index) => {
      selectAll.data.forEach((data) => {
         if(selectAll['name']==='CSV'){ 
          if(roleState.reportingModule.eventPlanned.csv[data.value.toLowerCase()]){
            data.isChecked = true;
          }
          else if(data.isDisabled === false){
            eventPlanned_manageAll = false
          }
         }
         if(selectAll['name']==='View'){
          if(roleState.reportingModule.eventPlanned.view[data.value.toLowerCase()]){
            data.isChecked = true;
          }
          else if(data.isDisabled === false){
            eventPlanned_manageAll = false
          }
         }
         
      });
  
        let newArray = [...state.event_planned];
        newArray[index] = { ...newArray[index], data: newArray[index].data };
        setState({ ...state, event_planned: newArray });
  
    }); 
    
  // All financial SELECTED
  
    let financial = state.financial;
    let financial_manageall = true;
    
    financial.forEach((selectAll, index) => {
      
      selectAll.data.forEach((data) => {
         if(selectAll['name']==='CSV'){ 
          if(roleState.reportingModule.financial.csv[data.value.toLowerCase()]){
            data.isChecked = true;
          }
          else if(data.isDisabled === false){
            financial_manageall = false
          }
         }
         
         if(selectAll['name']==='VIEW'){
          if(roleState.reportingModule.financial.view[data.value.toLowerCase()]){
            data.isChecked = true;
          }
          else if(data.isDisabled === false){
            financial_manageall = false
          }
         }
      });
  
        let newArray = [...state.financial];
        newArray[index] = { ...newArray[index], data: newArray[index].data };
        setState({ ...state, financial: newArray });
     
      }); 
  
      // setState({ ...state, financial_isSelected: financial_manageall   });

    // All pacing  CONFIGURATION SELECTED
    let pacing = state.pacing;
    let pacing_allSelected = true;
    pacing.forEach((selectAll, index) => {
  
      selectAll.data.forEach((data) => {
         if(selectAll['name']==='By Brands'){ 
          if(roleState.reportingModule.pacing.byBrands[data.value.toLowerCase()]){
            data.isChecked = true;
          }
          else if(data.isDisabled === false){
            pacing_allSelected = false
          }
         }
         
         if(selectAll['name']==='By Markets'){
          if(roleState.reportingModule.pacing.byMarkets[data.value.toLowerCase()]){
            data.isChecked = true;
          }
          else if(data.isDisabled === false){
            pacing_allSelected = false
          }
         }
         if(selectAll['name']==='By Program'){
          if(roleState.reportingModule.pacing.byProgram[data.value.toLowerCase()]){
            data.isChecked = true;
          }
          else if(data.isDisabled === false){
            pacing_allSelected = false
          }
        }
       if(selectAll['name']==='CSV'){
          if(roleState.reportingModule.pacing.csv[data.value.toLowerCase()]){
            data.isChecked = true;
          }
          else if(data.isDisabled === false){
            pacing_allSelected = false
          } 
        }

      });
  
        let newArray = [...state.pacing];
        newArray[index] = { ...newArray[index], data: newArray[index].data };
        setState({ ...state, pacing: newArray });
  
      });
      
    // setState({ ...state, pacing_isSelected: pacing_allSelected });
   
  // All performanceKpis  CONFIGURATION SELECTED
  
    let performance_and_kpi = state.performance_and_kpi;
    let performance_and_kpi_selcted = true;
    performance_and_kpi.forEach((selectAll, index) => {
  
      selectAll.data.forEach((data) => {
         if(selectAll['name']==='CSV'){ 
          if(roleState.reportingModule.performanceKpis.csv[data.value.toLowerCase()]){
            data.isChecked = true;
          }
          else if(data.isDisabled === false){
            performance_and_kpi_selcted = false
          }
         }
         
         if(selectAll['name']==='View'){
          if(roleState.reportingModule.performanceKpis.view[data.value.toLowerCase()]){
            data.isChecked = true;
          }
          else if(data.isDisabled === false){
            performance_and_kpi_selcted = false
          }
         }

      });
  
        let newArray = [...state.performance_and_kpi];
        newArray[index] = { ...newArray[index], data: newArray[index].data };
        setState({ ...state, performance_and_kpi: newArray });
  
      });
        
    console.log('financial_manageall===', financial_manageall);   
     
    // All reporting SELECTED
    let updateReporting = false;
    if(pacing_allSelected && eventPlanned_manageAll && performance_and_kpi_selcted && financial_manageall){
      updateReporting = true;
     }
  
     setState({ ...state, reporting:updateReporting, performance_and_kpi_isSelected: performance_and_kpi_selcted, event_planned_isSelected: eventPlanned_manageAll, pacing_isSelected: pacing_allSelected, financial_isSelected: financial_manageall });

  }
  
    },[location.state])


const { reportingOpened } = state;

  // ===> Reporting Handler
  const handleReportingChecked = (event: { target: { checked: boolean } }) => {
    handleEventPlannedAllChecked("fromMain")(event);
    handlePerformanceKPIAllChecked("fromMain")(event);
    handleFinancialAllChecked("fromMain")(event);
    handlePacingAllChecked("fromMain")(event);

    const { reporting } = state;
    // setState({ ...state, user_and_role_management: !user_and_role_management, user_management_isSelected: !user_management_isSelected, role_management_isSelected: !role_management_isSelected })
    setState({
      ...state,
      reporting: !reporting,
      event_planned_isSelected: !reporting,
      performance_and_kpi_isSelected: !reporting,
      financial_isSelected: !reporting,
      pacing_isSelected: !reporting,
    });
  };

  // event_planned Handlers===>
  const handleEventPlannedAllChecked = (itemCusData: string) => (event: {
    target: { checked: boolean };
  }) => {
    let event_planned = state.event_planned;
    event_planned.forEach((data, index) => {
      data.data.forEach((item) => {
        if (!item.isDisabled) {
          item.isChecked = event.target.checked;
        }
      });
      let newArray = [...state.event_planned];
      newArray[index] = { ...newArray[index], data: newArray[index].data };
      setState({ ...state, event_planned: newArray });
    });
    if (itemCusData !== "fromMain") {
      const { event_planned_isSelected, reporting } = state;
      // setState({ ...state, user_management_isSelected: !user_management_isSelected })

      if (reporting && event_planned_isSelected) {
        setState({
          ...state,
          event_planned_isSelected: !event_planned_isSelected,
          reporting: !reporting,
        });
      } else {
        setState({
          ...state,
          event_planned_isSelected: !event_planned_isSelected,
        });
      }
    }
  };

  const handleEventPlannedCheckChieldElement = (item_id: number) => (event: {
    target: { value: string; checked: boolean };
  }) => {
    let event_planned = state.event_planned;
    event_planned.forEach((selectAll, index) => {
      selectAll.data.forEach((data) => {
        if (data.id === item_id && data.value === event.target.value && !data.isDisabled) {
          data.isChecked = event.target.checked;
        }
      });
      let newArray = [...state.event_planned];
      newArray[index] = { ...newArray[index], data: newArray[index].data };
      setState({ ...state, event_planned: newArray });
      let found: any = false;
      found = selectAll.data.find((data) => (!data.isChecked && !data.isDisabled)) ? true : false;
      if (!found) {
        setState({ ...state, event_planned_isSelected: true });
      } else if (found) {
        setState({ ...state, event_planned_isSelected: false });
      }
    });

    let arr = [];
    for (let index in state.event_planned) {
      let found: any;
      found = state.event_planned[index].data.find((data) => (!data.isChecked && !data.isDisabled))
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
      setState({ ...state, event_planned_isSelected: true });
    } else if (got) {
      const { reporting } = state;
      if (reporting) {
        setState({
          ...state,
          event_planned_isSelected: false,
          reporting: !reporting,
        });
      } else {
        setState({ ...state, event_planned_isSelected: false });
      }
      // setState({ ...state, user_management_isSelected: false })
    }
  };

  // performance_and_kpi Handlers===>
  const handlePerformanceKPIAllChecked = (itemCusData: string) => (event: {
    target: { checked: boolean };
  }) => {
    let performance_and_kpi = state.performance_and_kpi;
    performance_and_kpi.forEach((data, index) => {
      data.data.forEach((item) => {
        if (!item.isDisabled) {
          item.isChecked = event.target.checked;
        }
      });
      let newArray = [...state.performance_and_kpi];
      newArray[index] = { ...newArray[index], data: newArray[index].data };
      setState({ ...state, performance_and_kpi: newArray });
    });
    if (itemCusData !== "fromMain") {
      const { performance_and_kpi_isSelected, reporting } = state;
      // setState({ ...state, user_management_isSelected: !user_management_isSelected })

      if (reporting && performance_and_kpi_isSelected) {
        setState({
          ...state,
          performance_and_kpi_isSelected: !performance_and_kpi_isSelected,
          reporting: !reporting,
        });
      } else {
        setState({
          ...state,
          performance_and_kpi_isSelected: !performance_and_kpi_isSelected,
        });
      }
    }
  };
  const handlePerformanceKPICheckChieldElement = (item_id: number) => (event: {
    target: { value: string; checked: boolean };
  }) => {
    let performance_and_kpi = state.performance_and_kpi;
    performance_and_kpi.forEach((selectAll, index) => {
      selectAll.data.forEach((data) => {
        if (data.id === item_id && data.value === event.target.value && !data.isDisabled) {
          data.isChecked = event.target.checked;
        }
      });
      let newArray = [...state.performance_and_kpi];
      newArray[index] = { ...newArray[index], data: newArray[index].data };
      setState({ ...state, performance_and_kpi: newArray });
      let found: any = false;
      found = selectAll.data.find((data) => (!data.isChecked && !data.isDisabled)) ? true : false;
      if (!found) {
        setState({ ...state, performance_and_kpi_isSelected: true });
      } else if (found) {
        setState({ ...state, performance_and_kpi_isSelected: false });
      }
    });

    let arr = [];
    for (let index in state.performance_and_kpi) {
      let found: any;
      found = state.performance_and_kpi[index].data.find(
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
      setState({ ...state, performance_and_kpi_isSelected: true });
    } else if (got) {
      const { reporting } = state;
      if (reporting) {
        setState({
          ...state,
          performance_and_kpi_isSelected: false,
          reporting: !reporting,
        });
      } else {
        setState({ ...state, performance_and_kpi_isSelected: false });
      }
      // setState({ ...state, user_management_isSelected: false })
    }
  };

  // Pacing Handlers===>
  const handlePacingAllChecked = (itemCusData: string) => (event: {
    target: { checked: boolean };
  }) => {
    let pacing = state.pacing;
    pacing.forEach((data, index) => {
      data.data.forEach((item) => {
        if (!item.isDisabled) {
          item.isChecked = event.target.checked;
        }
      });
      let newArray = [...state.pacing];
      newArray[index] = { ...newArray[index], data: newArray[index].data };
      setState({ ...state, pacing: newArray });
    });
    if (itemCusData !== "fromMain") {
      const { pacing_isSelected, reporting } = state;
      // setState({ ...state, user_management_isSelected: !user_management_isSelected })

      if (reporting && pacing_isSelected) {
        setState({
          ...state,
          pacing_isSelected: !pacing_isSelected,
          reporting: !reporting,
        });
      } else {
        setState({ ...state, pacing_isSelected: !pacing_isSelected });
      }
    }
  };

  const handlePacingCheckChieldElement = (item_id: number) => (event: {
    target: { value: string; checked: boolean };
  }) => {
    let pacing = state.pacing;
    pacing.forEach((selectAll, index) => {
      selectAll.data.forEach((data) => {
        if (data.id === item_id && data.value === event.target.value && !data.isDisabled) {
          data.isChecked = event.target.checked;
        }
      });
      let newArray = [...state.pacing];
      newArray[index] = { ...newArray[index], data: newArray[index].data };
      setState({ ...state, pacing: newArray });
      let found: any = false;
      found = selectAll.data.find((data) => (!data.isChecked && !data.isDisabled)) ? true : false;
      if (!found) {
        setState({ ...state, pacing_isSelected: true });
      } else if (found) {
        setState({ ...state, pacing_isSelected: false });
      }
    });

    let arr = [];
    for (let index in state.pacing) {
      let found: any;
      found = state.pacing[index].data.find((data) => (!data.isChecked && !data.isDisabled))
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
      setState({ ...state, pacing_isSelected: true });
    } else if (got) {
      const { reporting } = state;
      if (reporting) {
        setState({ ...state, pacing_isSelected: false, reporting: !reporting });
      } else {
        setState({ ...state, pacing_isSelected: false });
      }
      // setState({ ...state, user_management_isSelected: false })
    }
  };

  // financial Handlers===>
  const handleFinancialAllChecked = (itemCusData: string) => (event: {
    target: { checked: boolean };
  }) => {
    let financial = state.financial;
    financial.forEach((data, index) => {
      data.data.forEach((item) => {
        if (!item.isDisabled) {
          item.isChecked = event.target.checked;
        }
      });
      let newArray = [...state.financial];
      newArray[index] = { ...newArray[index], data: newArray[index].data };
      setState({ ...state, financial: newArray });
    });
    if (itemCusData !== "fromMain") {
      const { financial_isSelected, reporting } = state;
      // setState({ ...state, user_management_isSelected: !user_management_isSelected })

      if (reporting && financial_isSelected) {
        setState({
          ...state,
          financial_isSelected: !financial_isSelected,
          reporting: !reporting,
        });
      } else {
        setState({ ...state, financial_isSelected: !financial_isSelected });
      }
    }
  };

  const handleFinancialCheckChieldElement = (item_id: number) => (event: {
    target: { value: string; checked: boolean };
  }) => {
    let financial = state.financial;
    financial.forEach((selectAll, index) => {
      selectAll.data.forEach((data) => {
        if (data.id === item_id && data.value === event.target.value && !data.isDisabled) {
          data.isChecked = event.target.checked;
        }
      });
      let newArray = [...state.financial];
      newArray[index] = { ...newArray[index], data: newArray[index].data };
      setState({ ...state, financial: newArray });
      let found: any = false;
      found = selectAll.data.find((data) => (!data.isChecked && !data.isDisabled)) ? true : false;
      if (!found) {
        setState({ ...state, financial_isSelected: true });
      } else if (found) {
        setState({ ...state, financial_isSelected: false });
      }
    });

    let arr = [];
    for (let index in state.financial) {
      let found: any;
      found = state.financial[index].data.find((data) => (!data.isChecked && !data.isDisabled))
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
      setState({ ...state, financial_isSelected: true });
    } else if (got) {
      const { reporting } = state;
      if (reporting) {
        setState({
          ...state,
          financial_isSelected: false,
          reporting: !reporting,
        });
      } else {
        setState({ ...state, financial_isSelected: false });
      }
      // setState({ ...state, user_management_isSelected: false })
    }
  };

  const toggleBoxReporting = () => {
    const { reportingOpened } = state;
    const updatedData = { ...state, reportingOpened: !reportingOpened }
    props.reportingData(updatedData);
    //props.settingsRef = updatedData;
    console.log('reportingRef ===== ', reportingRef);
    console.log('props ===== ', props);
    setState(updatedData);
  };

  useEffect(()=>{
    props.reportingData(state)
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
          <span onClick={toggleBoxReporting}>
            {reportingOpened && (
              <RemoveCircleIcon
                style={{ color: "rgb(134, 25, 50)" }}
              />
            )}
            {!reportingOpened && (
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
                  onChange={handleReportingChecked}
                  checked={state.reporting}
                />
              }
              label="Reporting"
            />{" "}
          </p>
        </div>
      </div>
      {reportingOpened && (
        <div>
          {/* Event Planned table start */}
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
                        value="Photo Portal"
                        onChange={handleEventPlannedAllChecked(
                          "event_planned"
                        )}
                        checked={state.event_planned_isSelected}
                      />
                    }
                    label="Event Planned"
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
                  {state.event_planned.map((item, index) => {
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
                                    handleCheckChieldElement={handleEventPlannedCheckChieldElement(
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
          {/* Event Planned table end */}

          {/* Preformance & KPIs table start */}
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
                        value="Performance & KPIsl"
                        onChange={handlePerformanceKPIAllChecked(
                          "performance_kpi"
                        )}
                        checked={state.performance_and_kpi_isSelected}
                      />
                    }
                    label="Performance & KPIs"
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
                  {state.performance_and_kpi.map((item, index) => {
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
                                    handleCheckChieldElement={handlePerformanceKPICheckChieldElement(
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
          {/* Preformance & KPIs table end */}

          {/* Pacing table start */}
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
                        value="Pacing"
                        onChange={handlePacingAllChecked(
                          "performance_kpi"
                        )}
                        checked={state.pacing_isSelected}
                      />
                    }
                    label="Pacing"
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
                  {state.pacing.map((item, index) => {
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
                                    handleCheckChieldElement={handlePacingCheckChieldElement(
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
          {/* Pacing table end */}

          {/* Financials table start */}
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
                        value="Financial"
                        onChange={handleFinancialAllChecked(
                          "financial"
                        )}
                        checked={state.financial_isSelected}
                      />
                    }
                    label="Financial"
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
                  {state.financial.map((item, index) => {
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
                                    handleCheckChieldElement={handleFinancialCheckChieldElement(
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
          {/* Financials table end */}
        </div>
      )}
    </div>
  )

}
