import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import SearchIcon from "@material-ui/icons/Search";
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import CloseIcon from '@material-ui/icons/Close';
import { useRouteMatch } from 'react-router-dom'

import { fetchUsers, fetchAllUsers } from "../../reducers/UserReducer";
import { fetchRoles, fetchAllRoles } from "../../reducers/RoleReducer";
import { RootState } from "../../store/rootReducer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      flexBasis: 200,
      width: "30%",
    },
    input: {
      "& .MuiInputBase-input": {
        marginBottom: "0px",
        background: "none",
        color: "#454545",
      },
    },
    inputLabel: {
      color: "rgba(14, 13, 13, 0.64)",
      fontWeight: 500,
      fontSize:17,
    },
    iconSearch: {
      padding: 0,
      color: "rgba(0, 0, 0, 0.44)",
    },
    search: {
      color: '#ffffff',
      padding: 5,
      backgroundColor: '#a31d37',
      borderRadius: '100%',
      // cursor: 'pointer',
      // '&:hover': {
      //     backgroundColor: '#da0a33',
      // },
    },
    clear: {
      fontSize: 8,
      fontColor: '#fafafa',
      position: 'absolute',
      right: 0,
      top: 0,
      width: 'auto',
      minWidth: 0,
      '&:hover': {
        backgroundColor: 'transparent',
        color: '#a31d37'
      }
    },
    popupIndicatorOpen: {
      transform: 'none',
    }
  })
);

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

export function Search() {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  let match = useRouteMatch({
    path: '/settings/user-management/users',
  });

  const dispatch = useDispatch();

    const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };


  const handleClickShowPassword = (event: any, value: unknown) => {
    // dispatch(fetchUsers(values.password));
    // setValues({ ...values, showPassword: !values.showPassword });
    setSearchValue(value as string);
    match ? dispatch(fetchUsers(value as string)) : dispatch(fetchRoles(value as string));
    
    //
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  // Search Autopopulate
  const [searchValue, setSearchValue] = React.useState('');
  const [filter, setFilter] = React.useState('');

  const {
    users: { allUsers },
    roles: {allRoles}
  } = useSelector((state: RootState) => state)

  useEffect(() => {
    match ? dispatch(fetchAllUsers()) : dispatch(fetchAllRoles()); 
    setSearchValue('')
    // console.log('dispatch called');
  }, [location.pathname])

  useEffect(() => {
    (filter === 'search') ? match ? dispatch(fetchUsers()) : dispatch(fetchRoles()) : null;
    (searchValue === null) ? match ? dispatch(fetchUsers()) : dispatch(fetchRoles()) : null;
    setFilter('');
  }, [filter, searchValue]);

  const handleSearchChange = (event: any, value: unknown) => {
    setSearchValue(value as string);
    console.log(value as string);
  }

  return (
    <FormControl color="secondary" className={clsx(classes.margin, classes.textField)}>
       {/* <InputLabel className={classes.inputLabel} htmlFor="adornment-user">
        Search Users
      </InputLabel>
      <Input
        id="adornment-user"
        type="text"
        value={values.password}
        onChange={handleChange("password")}
        className={classes.input}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle user visibility"
              onClick={handleClickShowPassword}
              className={classes.iconSearch}
            >
              {values.showPassword ? <Visibility /> : <SearchIcon />}
            </IconButton>
          </InputAdornment>
        }
      />  */}

      <Autocomplete
        freeSolo
        id="search-event"
        color="secondary"
        options={match ? allUsers : allRoles}
        getOptionLabel={(option: any) => option}
        filterOptions={createFilterOptions({ limit: 20 })}
        renderInput={(params) => <TextField {...params} color="secondary" label={match ? "Search User" : "Search Role"} />}
        // renderInput={(params) => <TextField {...params} label={match ? "Search User" : "Search Role"} InputProps={{ ...params.InputProps, endAdornment: (<InputAdornment position="end"><SearchIcon className={classes.search} onClick={() => { handleClickShowPassword }} /></InputAdornment>) }} />}
        value={searchValue}
        onChange={handleClickShowPassword}
        classes={{ popupIndicatorOpen: classes.popupIndicatorOpen }}
        popupIcon={<SearchIcon className={classes.search} onClick={() => { handleClickShowPassword }} />}
        forcePopupIcon= {true}
        closeIcon={<CloseIcon fontSize="small" onClick={() => { setSearchValue(''); setFilter('search'); }} />}
      />


    </FormControl>
  );
}
