import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import NativeSelect from '@material-ui/core/NativeSelect';

import { useLocation } from "react-router-dom";

import {UserStyle} from './UserStyle';

export const UserDetails = (props:any) => {

    const location = useLocation();
    let userState: any = typeof location.state !== 'undefined' ?  location.state : {}; 
    const user_id:string = typeof userState._id !== 'undefined' ? userState._id : '';
    
    const classes = UserStyle();
      
    let firstName_ : string = userState.firstName;
    const [firstName, selectFirstName] = useState(firstName_);
    const handleFirstName = (event: any) => {
       selectFirstName(event.target.value)
    };
    let lastName_: string = userState.lastName;
    const [lastName, selectLastName] = useState(lastName_);
    const handleLastName = (event: any) => {
        selectLastName(event.target.value)
    };
  
    let emailAddress_: string = userState.email;
    const [emailAddress, selectEmail] = useState(emailAddress_);
    const handleEmailAddress = (event: any) => {
        selectEmail(event.target.value)
      };

    let status_: any = userState.active === true ? 'Active' : userState.active === false ? 'Inactive' : 'status';
    const [status, selectStatus] = useState(status_);

    const handleStatus = (event: any) => {
        selectStatus(event.target.value)
    };

    let role_: any = userState.roleId;
    const [role, selectRole] = useState(role_);
    const handleRole = (event: any) => {
      selectRole(event.target.value)
    };  

    const {
      roles
   } = useSelector((state: RootState) => state);

    const toggleBoxUserDetails = () => {
        setUserDetailsOpened(!userDetaisOpened);
    }

    const [userDetaisOpened, setUserDetailsOpened] = useState(true);

  return(<div className="box">
                <div className="boxTitle" onClick={() => toggleBoxUserDetails()}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "0 10px",
                      cursor: "pointer",
                    }}
                  >
                    {userDetaisOpened && (
                      <RemoveCircleIcon style={{ color: "rgb(134, 25, 50)" }} />
                    )}
                    {!userDetaisOpened && (
                      <AddCircleIcon style={{ color: "rgb(134, 25, 50)" }} />
                    )}
                    <p
                      style={{
                        paddingLeft: "5px",
                        fontWeight: "bold",
                        fontSize: 16,
                        color: "#293947",
                      }}
                    >
                      USER DETAILS
                    </p>
                  </div>
                </div>
                {userDetaisOpened && (
                  <div style={{ padding: "0 10px" }}>
                    <Grid container spacing={3}>
                      <Grid item xs={3}>
                        <FormControl className={classes.formControl}>
                          <TextField
                            color="secondary"
                            id="firstname-dense"
                            label="First Name"
                            defaultValue={firstName_}
                            value={firstName}
                            InputProps={{ classes: { input: classes.resize } }}
                            className={clsx(classes.textField, classes.dense)}
                            margin="dense"
                            onChange={handleFirstName}
                            inputRef={props.firstNameRef}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={3}>
                        <FormControl className={classes.formControl}>
                          <TextField
                            id="lastname-dense"
                            label="Last Name"
                            defaultValue={lastName_}
                            value={lastName}
                            inputRef={props.lastNameRef}
                            color="secondary"
                            InputProps={{ classes: { input: classes.resize } }}
                            className={clsx(classes.textField, classes.dense)}
                            margin="dense"
                            onChange={handleLastName}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl className={classes.formControl} disabled>
                          <TextField
                            id="email-dense"
                            label="Email Address"
                            defaultValue={emailAddress_} 
                            value={emailAddress}
                            color="secondary"
                            InputProps={{ classes: { input: classes.resize } }}
                            className={clsx(classes.textField, classes.dense)}
                            margin="dense"
                            onChange={handleEmailAddress}
                            inputRef={props.emailAddressRef}
                            disabled={user_id ? true : false}
                          />
                        </FormControl>
                      </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                      <Grid item xs={3}>
                        <FormControl className={classes.formControl}>
                        <InputLabel color="secondary" htmlFor="agffffe-simple">
                            Select Role
                          </InputLabel>
                          <NativeSelect
                              defaultValue={role_}
                              value={role}
                              color="secondary"
                              className={classes.selectOptn}
                              onChange={handleRole}
                              inputRef={props.roleRef}
                            >  
                            <option value="role">
                              Please Select
                              </option>
                              {roles.roles.map((value: any) => {
                                return (
                                  <option value={value._id}>
                                    {value.prettyName}
                                  </option>
                                );
                              })}
                            </NativeSelect>
                        </FormControl>
                      </Grid>
                      <Grid item xs={2}>
                        <FormControl className={classes.formControl}>
                          <InputLabel color="secondary" htmlFor="agffffe-simple">
                            Select Status
                          </InputLabel>
                          <NativeSelect 
                            defaultValue={status_}
                            value={status}
                            inputRef={props.statusRef}
                            className={classes.selectOptn}
                            color="secondary"
                            onChange={handleStatus}
                          >
                             <option value="status">
                              Please Select 
                              </option>
                                <option value="Active">
                                  Active
                                </option>
                                <option value="Inactive">
                                  Inactive
                                </option>
                          </NativeSelect>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </div>
                )}
              </div>)
              }