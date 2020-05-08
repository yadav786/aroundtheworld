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

export const RoleMeasurement = (props:any) => {

const location = useLocation();
let roleState: any = typeof location.state !== 'undefined' ?  location.state : {}; 

const classes = RoleStyle();  
let measurementRef = useRef('');
  const [state, setState] = React.useState({
    active: true,
    // Measurement
    photoPortalOpened:false,
    measurement: false, 
    photo_portal_isSelected: false,
    photo_portal: [
      {
        name: "Photos",
        data: [
          { id: 0, value: "Create", isChecked: false, isDisabled: false },
          { id: 1, value: "Edit", isChecked: false, isDisabled: false },
          { id: 2, value: "Delete", isChecked: false, isDisabled: false },
          { id: 3, value: "Upload", isChecked: false, isDisabled: false },
          { id: 4, value: "Download", isChecked: false, isDisabled: false },
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
    ],

  });

  const { photoPortalOpened } = state;

  // ===> Measurement Handler
  const handleMeasurementChecked = (event: {
    target: { checked: boolean };
  }) => {
    handlePhotoPortalAllChecked("fromMain")(event);

    const { measurement } = state;
    // setState({ ...state, user_and_role_management: !user_and_role_management, user_management_isSelected: !user_management_isSelected, role_management_isSelected: !role_management_isSelected })
    setState({
      ...state,
      measurement: !measurement,
      photo_portal_isSelected: !measurement,
    });
  };

  // photo_portal Handlers===>
  const handlePhotoPortalAllChecked = (itemCusData: string) => (event: {
    target: { checked: boolean };
  }) => {
    let photo_portal = state.photo_portal;
    photo_portal.forEach((data, index) => {
      data.data.forEach((item) => {
        if (!item.isDisabled) {
          item.isChecked = event.target.checked;
        }
      });
      let newArray = [...state.photo_portal];
      newArray[index] = { ...newArray[index], data: newArray[index].data };
      setState({ ...state, photo_portal: newArray });
    });
    if (itemCusData !== "fromMain") {
      const { photo_portal_isSelected, measurement } = state;
      // setState({ ...state, user_management_isSelected: !user_management_isSelected })

      if (measurement && photo_portal_isSelected) {
        setState({
          ...state,
          photo_portal_isSelected: !photo_portal_isSelected,
          measurement: !measurement,
        });
      } else {
        setState({
          ...state,
          photo_portal_isSelected: !photo_portal_isSelected,
        });
      }
    }
  };
  const handlePhotoPortalCheckChieldElement = (item_id: number) => (event: {
    target: { value: string; checked: boolean };
  }) => {
    let photo_portal = state.photo_portal;
    photo_portal.forEach((selectAll, index) => {
      selectAll.data.forEach((data) => {
        if (data.id === item_id && data.value === event.target.value && !data.isDisabled) {
          data.isChecked = event.target.checked;
        }
      });
      let newArray = [...state.photo_portal];
      newArray[index] = { ...newArray[index], data: newArray[index].data };
      setState({ ...state, photo_portal: newArray });
      let found: any = false;
      found = selectAll.data.find((data) => (!data.isChecked && !data.isDisabled)) ? true : false;
      if (!found) {
        setState({ ...state, photo_portal_isSelected: true });
      } else if (found) {
        setState({ ...state, photo_portal_isSelected: false });
      }
    });

    let arr = [];
    for (let index in state.photo_portal) {
      let found: any;
      found = state.photo_portal[index].data.find((data) => (!data.isChecked && !data.isDisabled))
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
      setState({ ...state, photo_portal_isSelected: true });
    } else if (got) {
      const { measurement } = state;
      if (measurement) {
        setState({
          ...state,
          photo_portal_isSelected: false,
          measurement: !measurement,
        });
      } else {
        setState({ ...state, photo_portal_isSelected: false });
      }
      // setState({ ...state, user_management_isSelected: false })
    }
  };

  const toggleBoxphotoportion = () => {
    const { photoPortalOpened } = state;
    const updatedData = { ...state, photoPortalOpened: !photoPortalOpened }
    props.measurementData(updatedData);
    //props.settingsRef = updatedData;
    console.log('measurementRef ===== ', measurementRef);
    console.log('props ===== ', props);
    setState(updatedData);
  };
 
  useEffect(()=>{
    props.measurementData(state)
   },[state])


   useEffect(() => {
   console.log('Measurement roleState===', roleState);   
   console.log('Measurement roleState===', state);
    
   if(roleState.userRoleManagmentModule !== undefined){
  
    // All PROGRAM  CONFIGURATION SELECTED
    
    let photo_portal = state.photo_portal;
    let photo_portal_all_selcted = true;
    photo_portal.forEach((selectAll, index) => {
  
      selectAll.data.forEach((data) => {
         if(selectAll['name']==='Photos'){
          if(roleState.userRoleManagmentModule.programConfiguration.campaign[data.value.toLowerCase()]){
            data.isChecked = true;
          }
          else if(data.isDisabled === false){
            photo_portal_all_selcted = false
          }
         }

      });
  
        let newArray = [...state.photo_portal];
        newArray[index] = { ...newArray[index], data: newArray[index].data };
        setState({ ...state, photo_portal: newArray });
  
      });
      
    setState({ ...state, photo_portal_isSelected: photo_portal_all_selcted, measurement : photo_portal_all_selcted });
  
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
          <span onClick={toggleBoxphotoportion}>
            {photoPortalOpened && (
              <RemoveCircleIcon
                style={{ color: "rgb(134, 25, 50)" }}
              />
            )}
            {!photoPortalOpened && (
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
                  onChange={handleMeasurementChecked}
                  checked={state.measurement}
                />
              }
              label="Measurement"
            />{" "}
          </p>
        </div>
      </div>
      {photoPortalOpened && (
        <div>
          {/* Photo portal table start */}
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
                        onChange={handlePhotoPortalAllChecked(
                          "photo_portal"
                        )}
                        checked={state.photo_portal_isSelected}
                      />
                    }
                    label="Photo Portal"
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
                  {state.photo_portal.map((item, index) => {
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
                                    handleCheckChieldElement={handlePhotoPortalCheckChieldElement(
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
          {/* Photo portal table end */}
        </div>
      )}
    </div>
  )

}
