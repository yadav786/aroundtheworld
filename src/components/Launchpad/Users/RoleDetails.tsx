import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../../../store/rootReducer";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import { createUserRoleAPI } from "../../../reducers/RoleReducer";

import NativeSelect from "@material-ui/core/NativeSelect";
import { RoleStyle } from "./RoleStyle";

export const RoleDetails = (props: any) => {
  const location = useLocation();
  let roleState: any =
    typeof location.state !== "undefined" ? location.state : {};
  const role_id: string =
    typeof roleState._id !== "undefined" ? roleState._id : "";
  console.log("role details===", roleState);
  const classes = RoleStyle();

  let roleName_: string = roleState.prettyName;
  const [roleName, selectRoleName] = useState(roleName_);
  const handleRoleNameChange = (event: any) => {
    selectRoleName(event.target.value);
  };

  let shortName_: string = roleState.prettyAlias;
  const [shortName, selectShortName] = useState(shortName_);
  const handleShortNameChange = (event: any) => {
    selectShortName(event.target.value);
  };

  let channels_: any = "";
  if (typeof roleState.channel !== "undefined") {
    channels_ =
      roleState.channel.non_premise === true
        ? "Non-Premises"
        : roleState.channel.on_off_premise === true
        ? "On-off Premises"
        : "";
  }
  const [channel, selectChannel] = useState(channels_);
  const handleChannel = (event: any) => {
    selectChannel(event.target.value);
  };

  let permission_: any =
    roleState.isSuperAdminPermission === true
      ? "isSuperAdminPermission"
      : roleState.isSuperAdminPermission === false
      ? "isSetPermissions"
      : "";
  const [permission, selectPermission] = useState(permission_);
  const handlePermissionsRadioChange = (event: any) => {
    selectPermission(event.target.value);
  };

  let status_: any =
    roleState.active === true
      ? "Active"
      : roleState.status === false
      ? "Inactive"
      : "status";
  const [status, selectStatus] = useState(status_);

  const handleStatus = (event: any) => {
    selectStatus(event.target.value);
  };

  // const { roles } = useSelector((state: RootState) => state);

  return (
    <div className="box">
      <Grid container xs={12}>
        <Grid item xs={7}>
          <Grid container xs={12}>
            <Grid item xs={12}>
              <Box pl={1}>
                {" "}
                <Typography className={classes.headng} variant="h6">
                  Role Details
                </Typography>{" "}
              </Box>
            </Grid>

            <Grid item xs={6}>
              <FormControl
                fullWidth
                className={`${classes.formControl} ${classes.rolDtlsInpt}`}
              >
                <TextField
                  label="Role Name"
                  color="secondary"
                  InputProps={{ classes: { input: classes.resize } }}
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
                  defaultValue={roleName}
                  value={roleName}
                  inputRef={props.roleNameRef}
                  onChange={handleRoleNameChange}
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl
                fullWidth
                className={`${classes.formControl} ${classes.rolDtlsInpt}`}
              >
                <TextField
                  id="lastname-dense"
                  label="Short Name"
                  InputProps={{ classes: { input: classes.resize } }}
                  color="secondary"
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
                  defaultValue={shortName}
                  value={shortName}
                  inputRef={props.shortNameRef}
                  onChange={handleShortNameChange}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid container xs={12}>
            <Grid item xs={12}>
              <Box pl={1}>
                {" "}
                <Typography className={classes.headng} variant="h6">
                  Permissions
                </Typography>{" "}
              </Box>
            </Grid>

            <Grid item xs={12}>
              <FormControl component="fieldset" ref={props.permissionRef}>
                <RadioGroup
                  className={classes.PermsnRdioGroup}
                  row
                  aria-label="position"
                  name="position"
                  defaultValue={permission}
                >
                  <FormControlLabel
                    className={classes.permsnRdio}
                    value="isSetPermissions"
                    control={<Radio size="small" color="secondary" />}
                    label="Set Permissions"
                    onChange={handlePermissionsRadioChange}
                  />
                  <FormControlLabel
                    className={classes.permsnRdio}
                    value="isSuperAdminPermission"
                    control={<Radio size="small" color="secondary" />}
                    label="Super Admin Permission"
                    onChange={handlePermissionsRadioChange}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={7}>
          <Grid container xs={12}>
            <Grid item xs={12}>
              <Box pl={1}>
                {" "}
                <Typography className={classes.headng} variant="h6">
                  Channel
                </Typography>{" "}
              </Box>
            </Grid>

            <Grid item xs={12}>
              <FormControl component="fieldset" ref={props.channelRef}>
                <RadioGroup
                  className={classes.PermsnRdioGroup}
                  row
                  aria-label="position"
                  name="position"
                  defaultValue={channel}
                >
                  <FormControlLabel
                    className={classes.permsnRdio}
                    value="On-off Premises"
                    control={<Radio size="small" color="secondary" />}
                    label="On-off Premises"
                    onChange={handleChannel}
                  />
                  <FormControlLabel
                    className={classes.permsnRdio}
                    value="Non-Premises"
                    control={<Radio size="small" color="secondary" />}
                    label="Non-Premises"
                    onChange={handleChannel}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid container xs={12}>
            <Grid item xs={12}>
              <Box pl={1}>
                {" "}
                <Typography className={classes.headng} variant="h6">
                  Status
                </Typography>{" "}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box pl={1}>
                <FormControl component="fieldset">
                  <NativeSelect
                    defaultValue={status_}
                    value={status}
                    inputRef={props.statusRef}
                    color="secondary"
                    onChange={handleStatus}
                  >
                    <option value="status">Please Select</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </NativeSelect>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
