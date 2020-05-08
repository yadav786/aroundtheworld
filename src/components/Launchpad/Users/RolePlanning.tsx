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

export const RolePlanning = (props:any) => {

const location = useLocation();
let roleState: any = typeof location.state !== 'undefined' ?  location.state : {};

const classes = RoleStyle();  
  const [state, setState] = React.useState({
    active: true,
    planningOpened: false,
    // PLANNING
    planning: false,

    pre_work_isSelected: false,
    pre_work: [
      {
        name: "Management Console",
        data: [
          { id: 1, value: "Create", isChecked: false, isDisabled: false },
          { id: 2, value: "Edit", isChecked: false, isDisabled: false },
          { id: 3, value: "Upload", isChecked: false, isDisabled: false },
          { id: 4, value: "Download", isChecked: false, isDisabled: true },
          { id: 5, value: "View", isChecked: false, isDisabled: false },
          {
            id: 6,
            value: "Active/Deactive",
            isChecked: false,
            isDisabled: true,
          },
          {
            id: 7,
            value: "Approve/Disapprove",
            isChecked: false,
            isDisabled: false,
          },
        ],
      },
    ],

    program_standards_isSelected: false,
    program_standards: [
      {
        name: "Program Creation",
        data: [
          { id: 0, value: "Create", isChecked: false, isDisabled: false },
          { id: 1, value: "Edit", isChecked: false, isDisabled: false },
          { id: 2, value: "Delete", isChecked: false, isDisabled: false },
          { id: 3, value: "Upload", isChecked: false, isDisabled: false },
          { id: 4, value: "Download", isChecked: false, isDisabled: true },
          { id: 5, value: "Share", isChecked: false, isDisabled: false },
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
            isDisabled: false,
          },
        ],
      },
      {
        name: "Program Question Submission",
        data: [
          { id: 9, value: "Create", isChecked: false, isDisabled: false },
          { id: 10, value: "Edit", isChecked: false, isDisabled: false },
          { id: 11, value: "Delete", isChecked: false, isDisabled: false },
          { id: 12, value: "Upload", isChecked: false, isDisabled: false },
          { id: 13, value: "Download", isChecked: false, isDisabled: true },
          { id: 14, value: "Share", isChecked: false, isDisabled: false },
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
            isDisabled: false,
          },
        ],
      },
      {
        name: "Approval",
        data: [
          { id: 18, value: "Create", isChecked: false, isDisabled: true },
          { id: 19, value: "Edit", isChecked: false, isDisabled: true },
          { id: 20, value: "Delete", isChecked: false, isDisabled: false },
          { id: 21, value: "Upload", isChecked: false, isDisabled: true },
          { id: 22, value: "Download", isChecked: false, isDisabled: true },
          { id: 23, value: "Share", isChecked: false, isDisabled: false },
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
            isDisabled: false,
          },
        ],
      },
      {
        name: "PDF",
        data: [
          { id: 27, value: "Create", isChecked: false, isDisabled: true },
          { id: 28, value: "Edit", isChecked: false, isDisabled: true },
          { id: 29, value: "Delete", isChecked: false, isDisabled: false },
          { id: 30, value: "Upload", isChecked: false, isDisabled: true },
          { id: 31, value: "Download", isChecked: false, isDisabled: false },
          { id: 32, value: "Share", isChecked: false, isDisabled: false },
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
        name: "CSV",
        data: [
          { id: 36, value: "Create", isChecked: false, isDisabled: true },
          { id: 37, value: "Edit", isChecked: false, isDisabled: true },
          { id: 38, value: "Delete", isChecked: false, isDisabled: false },
          { id: 39, value: "Upload", isChecked: false, isDisabled: true },
          { id: 40, value: "Download", isChecked: false, isDisabled: false },
          { id: 41, value: "Share", isChecked: false, isDisabled: false },
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
    ],

    central_planning_isSelected: false,
    central_planning: [
      {
        name: "Central Plan",
        data: [
          { id: 0, value: "Create", isChecked: false, isDisabled: false },
          { id: 1, value: "Edit", isChecked: false, isDisabled: false },
          { id: 2, value: "Delete", isChecked: false, isDisabled: false },
          { id: 3, value: "Upload", isChecked: false, isDisabled: true },
          { id: 4, value: "Download", isChecked: false, isDisabled: false },
          { id: 5, value: "Share", isChecked: false, isDisabled: false },
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
            isDisabled: false,
          },
        ],
      },
      {
        name: "Collection",
        data: [
          { id: 9, value: "Create", isChecked: false, isDisabled: false },
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
            isDisabled: false,
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

    challenged_build_isSelected: false,
    challenged_build: [
      {
        name: "Challenge and Build",
        data: [
          { id: 0, value: "Create", isChecked: false, isDisabled: true },
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
            isDisabled: true,
          },
          {
            id: 8,
            value: "Approve/Disapprove",
            isChecked: false,
            isDisabled: false,
          },
        ],
      },
      {
        name: "Collection",
        data: [
          { id: 0, value: "Create", isChecked: false, isDisabled: true },
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
            isDisabled: true,
          },
          {
            id: 8,
            value: "Approve/Disapprove",
            isChecked: false,
            isDisabled: false,
          },
        ],
      },
      {
        name: "Plan",
        data: [
          { id: 9, value: "Create", isChecked: false, isDisabled: true },
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
            isDisabled: true,
          },
          {
            id: 17,
            value: "Approve/Disapprove",
            isChecked: false,
            isDisabled: false,
          },
        ],
      },
      {
        name: "Logs",
        data: [
          { id: 18, value: "Create", isChecked: false, isDisabled: true },
          { id: 19, value: "Edit", isChecked: false, isDisabled: true },
          { id: 20, value: "Delete", isChecked: false, isDisabled: true },
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
    ],

    final_plan_isSelected: false,
    final_plan: [
      {
        name: "Final Plan",
        data: [
          { id: 0, value: "Create", isChecked: false, isDisabled: true },
          { id: 1, value: "Edit", isChecked: false, isDisabled: true },
          { id: 2, value: "Delete", isChecked: false, isDisabled: true },
          { id: 3, value: "Upload", isChecked: false, isDisabled: false },
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
        name: "Events",
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
            isDisabled: false,
          },
        ],
      },
      {
        name: "Incremental",
        data: [
          { id: 18, value: "Create", isChecked: false, isDisabled: true },
          { id: 19, value: "Edit", isChecked: false, isDisabled: false },
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
            isDisabled: false,
          },
        ],
      },
      {
        name: "Logs",
        data: [
          { id: 27, value: "Create", isChecked: false, isDisabled: true },
          { id: 28, value: "Edit", isChecked: false, isDisabled: true },
          { id: 29, value: "Delete", isChecked: false, isDisabled: true },
          { id: 30, value: "Upload", isChecked: false, isDisabled: true },
          { id: 31, value: "Download", isChecked: false, isDisabled: true },
          { id: 32, value: "Share", isChecked: false, isDisabled: true },
          { id: 33, value: "View", isChecked: false, isDisabled: false },
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

  });

const { planningOpened } = state;
 // ===> PLANNING Handler
  const handlePlanningChecked = (event: { target: { checked: boolean } }) => {
    handleProgramStandardsAllChecked("fromMain")(event);
    handleCentralPlanningAllChecked("fromMain")(event);
    handleChallengedBuildAllChecked("fromMain")(event);
    handleFinalPlanAllChecked("fromMain")(event);

 
    const {
      planning,
    } = state;
    setState({
      ...state,
      planning: !planning,
      final_plan_isSelected: !planning,
      challenged_build_isSelected: !planning,
      central_planning_isSelected: !planning,
      program_standards_isSelected: !planning,
      pre_work_isSelected: !planning,
    });
  };

  // program_standards Handlers===>
  const handleProgramStandardsAllChecked = (itemCusData: string) => (event: {
    target: { checked: boolean };
  }) => {
    let program_standards = state.program_standards;
    program_standards.forEach((data, index) => {
      data.data.forEach((item) => {
        if (!item.isDisabled) {
          item.isChecked = event.target.checked;
        }
      });
      let newArray = [...state.program_standards];
      newArray[index] = { ...newArray[index], data: newArray[index].data };
      setState({ ...state, program_standards: newArray });
    });

    if (itemCusData !== "fromMain") {
      const { program_standards_isSelected, planning } = state;
      // setState({ ...state, program_standards_isSelected: !program_standards_isSelected })
      if (planning && program_standards_isSelected) {
        setState({
          ...state,
          program_standards_isSelected: !program_standards_isSelected,
          planning: !planning,
        });
      } else {
        setState({
          ...state,
          program_standards_isSelected: !program_standards_isSelected,
        });
      }
    }
  };
  const handleProgramStandardsCheckChieldElement = (item_id: number) => (event: { target: { value: string; checked: boolean } }) => {
    let program_standards = state.program_standards;
    program_standards.forEach((selectAll, index) => {
      selectAll.data.forEach((data) => {
        if (data.id === item_id && data.value === event.target.value && !data.isDisabled) {
          data.isChecked = event.target.checked;
        }
      });
      let newArray = [...state.program_standards];
      newArray[index] = { ...newArray[index], data: newArray[index].data };
      setState({ ...state, program_standards: newArray });
      let found: any = false;
      found = selectAll.data.find((data) => (!data.isChecked && !data.isDisabled)) ? true : false;
      if (!found) {
        setState({ ...state, program_standards_isSelected: true });
      } else if (found) {
        setState({ ...state, program_standards_isSelected: false });
      }
    });

    let arr = [];
    for (let index in state.program_standards) {
      let found: any;
      found = state.program_standards[index].data.find(
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
      setState({ ...state, program_standards_isSelected: true });
    } else if (got) {
      const { planning } = state;
      if (planning) {
        setState({
          ...state,
          program_standards_isSelected: false,
          planning: !planning,
        });
      } else {
        setState({ ...state, program_standards_isSelected: false });
      }
      // setState({ ...state, program_standards_isSelected: false })
    }
  };

  // central_planning Handlers===>
  const handleCentralPlanningAllChecked = (itemCusData: string) => (event: {
    target: { checked: boolean };
  }) => {
    let central_planning = state.central_planning;
    central_planning.forEach((data, index) => {
      data.data.forEach((item) => {
        if (!item.isDisabled) {
          item.isChecked = event.target.checked;
        }
      });
      let newArray = [...state.central_planning];
      newArray[index] = { ...newArray[index], data: newArray[index].data };
      setState({ ...state, central_planning: newArray });
    });

    if (itemCusData !== "fromMain") {
      const { central_planning_isSelected, planning } = state;
      // setState({ ...state, central_planning_isSelected: !central_planning_isSelected })
      if (planning && central_planning_isSelected) {
        setState({
          ...state,
          central_planning_isSelected: !central_planning_isSelected,
          planning: !planning,
        });
      } else {
        setState({
          ...state,
          central_planning_isSelected: !central_planning_isSelected,
        });
      }
    }
  };
  const handleCentralPlanningCheckChieldElement = (item_id: number) => (event: {
    target: { value: string; checked: boolean };
  }) => {
    let central_planning = state.central_planning;
    central_planning.forEach((selectAll, index) => {
      selectAll.data.forEach((data) => {
        if (data.id === item_id && data.value === event.target.value && !data.isDisabled) {
          data.isChecked = event.target.checked;
        }
      });
      let newArray = [...state.central_planning];
      newArray[index] = { ...newArray[index], data: newArray[index].data };
      setState({ ...state, central_planning: newArray });
      let found: any = false;
      found = selectAll.data.find((data) => (!data.isChecked && !data.isDisabled)) ? true : false;
      if (!found) {
        setState({ ...state, central_planning_isSelected: true });
      } else if (found) {
        setState({ ...state, central_planning_isSelected: false });
      }
    });

    let arr = [];
    for (let index in state.central_planning) {
      let found: any;
      found = state.central_planning[index].data.find((data) => (!data.isChecked && !data.isDisabled))
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
      setState({ ...state, central_planning_isSelected: true });
    } else if (got) {
      const { planning } = state;
      if (planning) {
        setState({
          ...state,
          central_planning_isSelected: false,
          planning: !planning,
        });
      } else {
        setState({ ...state, central_planning_isSelected: false });
      }
      // setState({ ...state, central_planning_isSelected: false })
    }
  };

  // challenged_build Handlers===>
  const handleChallengedBuildAllChecked = (itemCusData: string) => (event: {
    target: { checked: boolean };
  }) => {
    let challenged_build = state.challenged_build;
    challenged_build.forEach((data, index) => {
      data.data.forEach((item) => {
        if (!item.isDisabled) {
          item.isChecked = event.target.checked;
        }
      });
      let newArray = [...state.challenged_build];
      newArray[index] = { ...newArray[index], data: newArray[index].data };
      setState({ ...state, challenged_build: newArray });
    });

    if (itemCusData !== "fromMain") {
      const { challenged_build_isSelected, planning } = state;
      // setState({ ...state, challenged_build_isSelected: !challenged_build_isSelected })
      if (planning && challenged_build_isSelected) {
        setState({
          ...state,
          challenged_build_isSelected: !challenged_build_isSelected,
          planning: !planning,
        });
      } else {
        setState({
          ...state,
          challenged_build_isSelected: !challenged_build_isSelected,
        });
      }
    }
  };
  const handleChallengedBuildCheckChieldElement = (item_id: number) => (event: {
    target: { value: string; checked: boolean };
  }) => {
    let challenged_build = state.challenged_build;
    challenged_build.forEach((selectAll, index) => {
      selectAll.data.forEach((data) => {
        if (data.id === item_id && data.value === event.target.value && !data.isDisabled) {
          data.isChecked = event.target.checked;
        }
      });
      let newArray = [...state.challenged_build];
      newArray[index] = { ...newArray[index], data: newArray[index].data };
      setState({ ...state, challenged_build: newArray });
      let found: any = false;
      found = selectAll.data.find((data) => (!data.isChecked && !data.isDisabled)) ? true : false;
      if (!found) {
        setState({ ...state, challenged_build_isSelected: true });
      } else if (found) {
        setState({ ...state, challenged_build_isSelected: false });
      }
    });

    let arr = [];
    for (let index in state.challenged_build) {
      let found: any;
      found = state.challenged_build[index].data.find((data) => (!data.isChecked && !data.isDisabled))
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
      setState({ ...state, challenged_build_isSelected: true });
    } else if (got) {
      const { planning } = state;
      if (planning) {
        setState({
          ...state,
          challenged_build_isSelected: false,
          planning: !planning,
        });
      } else {
        setState({ ...state, challenged_build_isSelected: false });
      }
      // setState({ ...state, challenged_build_isSelected: false })
    }
  };

  // final_plan_isSelected Handlers===>
  const handleFinalPlanAllChecked = (itemCusData: string) => (event: {
    target: { checked: boolean };
  }) => {
    let final_plan = state.final_plan;
    final_plan.forEach((data, index) => {
      data.data.forEach((item) => {
        if (!item.isDisabled) {
          item.isChecked = event.target.checked;
        }
      });
      let newArray = [...state.final_plan];
      newArray[index] = { ...newArray[index], data: newArray[index].data };
      setState({ ...state, final_plan: newArray });
    });

    if (itemCusData !== "fromMain") {
      const { final_plan_isSelected, planning } = state;
      // setState({ ...state, final_plan_isSelected: !final_plan_isSelected })
      if (planning && final_plan_isSelected) {
        setState({
          ...state,
          final_plan_isSelected: !final_plan_isSelected,
          planning: !planning,
        });
      } else {
        setState({ ...state, final_plan_isSelected: !final_plan_isSelected });
      }
    }
  };
  const handleFinalPlanCheckChieldElement = (item_id: number) => (event: {
    target: { value: string; checked: boolean };
  }) => {
    let final_plan = state.final_plan;
    final_plan.forEach((selectAll, index) => {
      selectAll.data.forEach((data) => {
        if (data.id === item_id && data.value === event.target.value && !data.isDisabled) {
          data.isChecked = event.target.checked;
        }
      });

      let newArray = [...state.final_plan];
      newArray[index] = { ...newArray[index], data: newArray[index].data };
      setState({ ...state, final_plan: newArray });
      let found: any = false;
      found = selectAll.data.find((data) => (!data.isChecked && !data.isDisabled)) ? true : false;
      if (!found) {
        setState({ ...state, final_plan_isSelected: true });
      } else if (found) {
        setState({ ...state, final_plan_isSelected: false });
      }
    });

    let arr = [];
    for (let index in state.final_plan) {
      let found: any;
      found = state.final_plan[index].data.find((data) => (!data.isChecked && !data.isDisabled))
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
      setState({ ...state, final_plan_isSelected: true });
    } else if (got) {
      const { planning } = state;
      if (planning) {
        setState({
          ...state,
          final_plan_isSelected: false,
          planning: !planning,
        });
      } else {
        setState({ ...state, final_plan_isSelected: false });
      }

    }

  };

  const toggleBoxUserDetails = () => {
    const { planningOpened } = state;
    const updatedData = { ...state, planningOpened: !planningOpened }
    props.planningData(updatedData);
    setState(updatedData);
  };
 
  useEffect(()=>{
    props.planningData(state)
   },[state])

  
   useEffect(() => {

    console.log('roleState=====', roleState)
    console.log('plannning state=====', state)

    if(roleState.planningModule !== undefined){
  
    // All program_standards SELECTED
  
    let centralPlanning = state.central_planning;
    let centralPlanning_manageAll = true;
    centralPlanning.forEach((selectAll, index) => {
      console.log('selectAll====', selectAll);
      selectAll.data.forEach((data) => {
         if(selectAll['name']==='Central Plan'){ 
          if(roleState.planningModule.centralPlanning.centralPlan[data.value.toLowerCase()]){
            data.isChecked = true;
          }
          else if(data.isDisabled === false){
            centralPlanning_manageAll = false
          }
         }
         if(selectAll['name']==='Collection'){
          if(roleState.planningModule.centralPlanning.collection[data.value.toLowerCase()]){
            data.isChecked = true;
          }
          else if(data.isDisabled === false){
            centralPlanning_manageAll = false
          }
         }
         if(selectAll['name']==='CSV'){
          if(roleState.planningModule.centralPlanning.csv[data.value.toLowerCase()]){
            data.isChecked = true;
          }
          else if(data.isDisabled === false){
            centralPlanning_manageAll = false
          }
        }
      });
  
        let newArray = [...state.central_planning];
        newArray[index] = { ...newArray[index], data: newArray[index].data };
        setState({ ...state, central_planning: newArray });
    
    });

    setState({
      ...state,
      central_planning_isSelected: centralPlanning_manageAll
    }); 
  

  // All ROLE MANAGEMENT SELECTED
  
    let challenged_build = state.challenged_build;
    let challengeBuild_manageall = true;
    
    challenged_build.forEach((selectAll, index) => {
      
      selectAll.data.forEach((data) => {
         if(selectAll['name']==='Challenge and Build'){
          if(roleState.planningModule.challengeBuild.challengeBuild[data.value.toLowerCase()]){
            data.isChecked = true;
          }
          else if(data.isDisabled === false){
            challengeBuild_manageall = false
          }
         }
         
         if(selectAll['name']==='Collection'){
          if(roleState.planningModule.challengeBuild.collection[data.value.toLowerCase()]){
            data.isChecked = true;
          }
          else if(data.isDisabled === false){
            challengeBuild_manageall = false
          }
         }
         if(selectAll['name']==='Logs'){
          if(roleState.planningModule.challengeBuild.logs[data.value.toLowerCase()]){
            data.isChecked = true;
          }
          else if(data.isDisabled === false){
            challengeBuild_manageall = false
          }
        }
        if(selectAll['name']==='Plan'){
          if(roleState.planningModule.challengeBuild.plan[data.value.toLowerCase()]){
            data.isChecked = true;
          }
          else if(data.isDisabled === false){
            challengeBuild_manageall = false
          }
        }
      });
  
        let newArray = [...state.challenged_build];
        newArray[index] = { ...newArray[index], data: newArray[index].data };
        setState({ ...state, challenged_build: newArray });
  
      }); 
  
      setState({
        ...state,
        challenged_build_isSelected: challengeBuild_manageall
      });
      
    // All Final Plan SELECTED
    
    let final_plan = state.final_plan;
    let finalPlan_all_selcted = true;
    final_plan.forEach((selectAll, index) => {
  
      selectAll.data.forEach((data) => {
         if(selectAll['name']==='Events'){ 
          if(roleState.planningModule.finalPlan.events[data.value.toLowerCase()]){
            data.isChecked = true;
          }
          else if(data.isDisabled === false){
            finalPlan_all_selcted = false
          }
         }
         
         if(selectAll['name']==='Final Plan'){
          if(roleState.planningModule.finalPlan.finalPlan[data.value.toLowerCase()]){
            data.isChecked = true;
          }
          else if(data.isDisabled === false){
            finalPlan_all_selcted = false
          }
         }
         if(selectAll['name']==='Incremental'){
          if(roleState.planningModule.finalPlan.incremental[data.value.toLowerCase()]){
            data.isChecked = true;
          }
          else if(data.isDisabled === false){
            finalPlan_all_selcted = false
          }
        }
        if(selectAll['name']==='Logs'){
          if(roleState.planningModule.finalPlan.logs[data.value.toLowerCase()]){
            data.isChecked = true;
          }
          else if(data.isDisabled === false){
            finalPlan_all_selcted = false
          }
        }
        
      });
  
        let newArray = [...state.final_plan];
        newArray[index] = { ...newArray[index], data: newArray[index].data };
        setState({ ...state, final_plan: newArray });
  
      });
      
    setState({ ...state, final_plan_isSelected: finalPlan_all_selcted });
  
    // All PROGRAM  CONFIGURATION SELECTED
    
    let program_standards = state.program_standards;
    let programStandard_all_selcted = true;
    program_standards.forEach((selectAll, index) => {
  
      selectAll.data.forEach((data) => {
         if(selectAll['name']==='Approval'){ 
          if(roleState.planningModule.programStandard.approval[data.value.toLowerCase()]){
            data.isChecked = true;
          }
          else if(data.isDisabled === false){
            programStandard_all_selcted = false
          }
         }
         
         if(selectAll['name']==='Program'){
          if(roleState.planningModule.programStandard.csv[data.value.toLowerCase()]){
            data.isChecked = true;
          }
          else if(data.isDisabled === false){
            programStandard_all_selcted = false
          }
         }
         if(selectAll['name']==='PDF'){
          if(roleState.planningModule.programStandard.pdf[data.value.toLowerCase()]){
            data.isChecked = true;
          }
          else if(data.isDisabled === false){
            programStandard_all_selcted = false
          }
        }
        if(selectAll['name']==='Program Creation'){
          if(roleState.planningModule.programStandard.programCreation[data.value.toLowerCase()]){
            data.isChecked = true;
          }
          else if(data.isDisabled === false){
            programStandard_all_selcted = false
          }
        }
        if(selectAll['name']==='Program Question Submission'){
          if(roleState.planningModule.programStandard.programQuestionSubmission[data.value.toLowerCase()]){
            data.isChecked = true;
          }
          else if(data.isDisabled === false){
            programStandard_all_selcted = false
          } 
        }
      });
  
        let newArray = [...state.program_standards];
        newArray[index] = { ...newArray[index], data: newArray[index].data };
        setState({ ...state, program_standards: newArray });
  
      });
      
    setState({ ...state, program_standards_isSelected: programStandard_all_selcted });

    // All Planning SELECTED
     
    if(programStandard_all_selcted && challengeBuild_manageall && finalPlan_all_selcted && centralPlanning_manageAll){
      const updatedData = { ...state,     planning: true }
      setState(updatedData);
     }
    
  
  }   
  
    },[location.state])

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
          {planningOpened && (
            <RemoveCircleIcon
              style={{ color: "rgb(134, 25, 50)" }}
            />
          )}
          {!planningOpened && (
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
                style={{ marginRight: "-5px" }}
                size="medium"
                value="Planning"
                onChange={handlePlanningChecked}
                checked={state.planning}
              />
            }
            label="Planning"
          />
        </p>
      </div>
    </div>
    {planningOpened && (
      <div>
        {/* Program Statndard table start */}
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
                      value="Program Standards"
                      onChange={handleProgramStandardsAllChecked(
                        "program_standards"
                      )}
                      checked={state.program_standards_isSelected}
                    />
                  }
                  label="Program Statndard"
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
                {state.program_standards.map((item, index) => {
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
                                  handleCheckChieldElement={handleProgramStandardsCheckChieldElement(
                                    x.id
                                  )}
                                  {...x}
                                />
                              }
                              label=""
                            />

                            {/* <FormControlLabel disabled={x.isDisabled}
                        control={
                          <GreenCheckbox size="small" key={index} value={x.value} />
                        }
                        label=""
                      /> */}
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
        {/* Program Statndard table end */}

        {/*Central Planning table start */}
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
                      value="Central Planning"
                      onChange={handleCentralPlanningAllChecked(
                        "central_planning"
                      )}
                      checked={state.central_planning_isSelected}
                    />
                  }
                  label="Central Planning"
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
                {state.central_planning.map((item, index) => {
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
                                  handleCheckChieldElement={handleCentralPlanningCheckChieldElement(
                                    x.id
                                  )}
                                  {...x}
                                />
                              }
                              label=""
                            />

                            {/* <FormControlLabel disabled={x.isDisabled}
                        control={
                          <GreenCheckbox size="small" key={index} value={x.value} />
                        }
                        label=""
                      /> */}
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
        {/* Central Planning table end */}

        {/*challenged build table start */}
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
                      value="Central Planning"
                      onChange={handleChallengedBuildAllChecked(
                        "challenge_build"
                      )}
                      checked={state.challenged_build_isSelected}
                    />
                  }
                  label="Challenge & Build"
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
                {state.challenged_build.map((item, index) => {
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
                                  handleCheckChieldElement={handleChallengedBuildCheckChieldElement(
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
        {/* challenged build table end */}

        {/*Final Plan table start */}
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
                      value="Central Planning"
                      onChange={handleFinalPlanAllChecked(
                        "final_plan"
                      )}
                      checked={state.final_plan_isSelected}
                    />
                  }
                  label="Final Plan"
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
                {state.final_plan.map((item, index) => {
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
                                  handleCheckChieldElement={handleFinalPlanCheckChieldElement(
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
        {/* Final Plan table end */}
      </div>
    )}
  </div>
  )

}
