import React, { useState, MouseEvent, SyntheticEvent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import clsx from "clsx";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Icon, Button } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { red } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import userFormClasses from "./UserForm.module.css";

import {
  fetchProductGroups,
  createUserAPI,
  updateUserDetails
} from "../../../reducers/UserReducer";

import { UserTabs } from "../../Common/UserTabs";
import { fetchRoles } from "../../../reducers/RoleReducer";
import { useParams, useLocation } from "react-router-dom";

import {UserStyle} from './UserStyle';

// Add Modal Popup Error
import { CustomModal } from '../../Common/CustomModal/CustomModal'

export const UserPermission = (props:any) => {

    // Internal Components Start

    const GreenCheckbox = withStyles({
        root: {
          color: "rgb(184, 187, 189)",
          "&$checked": {
            color: "#A11C37",
          },
        },
        checked: {},
      })((props: any) => (
        <Checkbox
          color="default"
          key={props.id}
          onChange={props.handleCheckChieldElement}
          type="checkbox"
          checked={props.isChecked}
          value={props.value}
          {...props}
        />
      ));

      
    const ColoredLine = () => (
        <hr
          style={{
            color: "rgb(184, 187, 189)",
            backgroundColor: "rgb(184, 187, 189)",
            height: 2,
            margin: "25px 0",
          }}
        />
    );
 
   // Internal Components End

    const location = useLocation();
    let userState: any = typeof location.state !== 'undefined' ?  location.state : {}; 
    const user_id:string = typeof userState._id !== 'undefined' ? userState._id : '';
    const classes = UserStyle();
    
    const {
    users: { createUserResponse, programStandard},
 } = useSelector((state: RootState) => state);
  
    const handleClose =()=> {
        setModalError(false)
        if(createUserResponse.data){ 
        if(user_id){
          // dispatch(fetchProductGroups(user_id));
        }
        else{
        props.firstNameRef.current.value = '';
        props.lastNameRef.current.value = '';
        props.emailAddressRef.current.value = '';
        props.roleRef.current.value = 'role';
        props.statusRef.current.value = 'status';  
        // dispatch(fetchProductGroups());
        const updateProductGroup: any = productGroups.map((data: any) => {
          return { ...data, isChecked: false };
        }); 
        setProductGroups(updateProductGroup);
        const updateDepartments: any = departments.map((data: any) => {
          return { ...data, isChecked: false };
        });
        setDepartments(updateDepartments);
      
        const updateMarkets: any = markets.map((data: any) => { return { ...data, isChecked: false }; });
        setMarkets(updateMarkets);
        
        const updateChannels: any = channels.map((data: any) => {
          return { ...data, isChecked: false };
        });
        setChannels(updateChannels);
      
        const updateBrands: any = brands.map((data: any) => { return { ...data, isChecked: false }; });
        setBrands(updateBrands);
      
        const updateDistributors: any = distributors.map((data: any) => { return { ...data, isChecked: false }; });
        setDistributors(updateDistributors);

        setState({
          ...state, markets_isSelected: (state.markets_isSelected === true ? false : state.markets_isSelected),
          brands_isSelected: (state.brands_isSelected === true ? false : state.brands_isSelected),
          managing_distributors_isSelected: (state.managing_distributors_isSelected === true ? false : state.managing_distributors_isSelected),
          selectAll_isSelected: (state.selectAll_isSelected === true ? false : state.selectAll_isSelected),
          departments_isSelected:  (state.departments_isSelected === true ? false : state.departments_isSelected),
          channels_isSelected : (state.channels_isSelected === true ? false : state.channels_isSelected)
        });
      
        }
         //Redirect the user on create and update as well
          console.log('redirect on the user list', props)
          props.history.push('/settings/user-management/users');
        }
       
    }
    
    useEffect(()=>{
    if(createUserResponse.error){
        setModalError(true)   
    }
    else{
        setModalError(false)   
    } 
    },[createUserResponse.error])

    useEffect(()=>{
    if(createUserResponse.data){
        setModalError(true)   
    }
    else{
        setModalError(false)   
    } 
    },[createUserResponse.data])

  const dispatch = useDispatch();

  React.useEffect(() => {
        dispatch(fetchProductGroups(user_id));
        dispatch(fetchRoles());
  }, [dispatch]);


  // only for submission => CREATE/UPDATE USER

  const filterId = (arr: any) => {
    return arr.filter((x: any) => x.isChecked === true).map((y:any) => y._id);
  };
  
  const createUser = () => {
 
    let booleanStatus:string|boolean =  props.statusRef.current.value === 'Active' ? true : props.statusRef.current.value === 'Inactive' ? false : '';
    let role_:string = props.roleRef.current.value === 'role' ? '' : props.roleRef.current.value;
         
    const filteredBrands = filterId(brands);
    const filteredChannels  = filterId(channels);
    const filteredDistributors  = filterId(distributors);
    const filteredDepartments  = filterId(departments);
    const filteredMarkets  = filterId(markets);
    const filteredProductGroups  = filterId(productGroups);

    const userObj = {
      firstName: props.firstNameRef.current.value,
      lastName: props.lastNameRef.current.value,
      email: props.emailAddressRef.current.value,
      adObjectId: "",
      roleId: role_,
      active:booleanStatus,
      selectAll: {
        brands: state.brands_isSelected,
        channels: state.channels_isSelected,
        clients: false,
        directors: state.managing_distributors_isSelected,
        divisions: false,
        departments: state.departments_isSelected,
        markets: state.markets_isSelected,
        productGroups: state.selectAll_isSelected,
      },
      brands:  state.brands_isSelected ? [] : filteredBrands,
      channels: state.channels_isSelected ? [] : filteredChannels,
      clients: [],
      directors: state.managing_distributors_isSelected ? [] : filteredDistributors,
      divisions: [],
      departments:  state.departments_isSelected ? [] : filteredDepartments,
      markets:  state.markets_isSelected ? [] : filteredMarkets,
      productGroups:  state.selectAll_isSelected ? [] : filteredProductGroups,
      profile: {
        permission: {
          brands: state.brands_isSelected ? [] : filteredBrands,
          channels: state.channels_isSelected ? [] : filteredChannels,
          clients: [],
          directors: state.managing_distributors_isSelected ? [] : filteredDistributors,
          divisions: [],
          departments: state.departments_isSelected ? [] : filteredDepartments,
          markets: state.markets_isSelected ? [] : filteredMarkets,
          productGroups: state.selectAll_isSelected ? [] : filteredProductGroups,
          selectAll: {
            brands: state.brands_isSelected,
            channels: state.channels_isSelected,
            clients: false,
            directors: state.managing_distributors_isSelected,
            divisions: false,
            departments: state.departments_isSelected,
            markets: state.markets_isSelected,
            productGroups: state.selectAll_isSelected,
          },
        },
      },
    };
    
    if(user_id){
     dispatch(updateUserDetails(user_id, userObj));
    } 
    else{
      dispatch(createUserAPI(userObj));
    }
      
  };

  const [modalError, setModalError] = useState(false);
  
  console.log('modalError====', modalError);

  const [state, setState] = React.useState({
    brand: true,
    userDetaisOpened: true,
    userPermissionOpened: false,
    selectAll_isSelected: false,
    selectAll: [],
    productGroups: [],
    departments_isSelected: false,
    departments: [],
    markets_isSelected: false,
    markets: [],
    channels_isSelected: false,
    channels: [],
    brands_isSelected: false,
    brands: [],
    managing_distributors_isSelected: false,
    managing_distributors: [],
  });


  // First select a Product Group to set Market permissions
  const [productGroupSelected, setProductGroupSelected] = React.useState(false);
  const [marketSelected, setmarketSelected] = React.useState(false);
  
  const [productGroups, setProductGroups] = React.useState([]);
  const [departments, setDepartments] = React.useState([]);
  const [markets, setMarkets] = React.useState([]);
  const [marketsCustom, setMarketsCustom] = React.useState([]);
  const [channels, setChannels] = React.useState([]);
  const [brands, setBrands] = React.useState([]);
  const [brandsCustom, setBrandsCustom] = React.useState([]);
  const [distributors, setDistributors] = React.useState([]);
  const [distributorsCustom, setDistributorsCustom] = React.useState([]);


  useEffect(() => {
    setModalError(false)
    if(user_id){
      console.log('userState===', userState)
      const selectAll = userState.profile.permission.selectAll;
      console.log('selectAll====', selectAll); 

         setProductGroupSelected(true);
         setmarketSelected(true)

      // Select All
      // filter markets with respect to product id
      if(programStandard.markets !== undefined && programStandard.productGroups !== undefined && programStandard.departments !== undefined  && programStandard.channels !== undefined && programStandard.brands !== undefined  && programStandard.distributors !== undefined ){
         
        if(!userState.productGroups.length && selectAll.productGroups){
             const selectAllProductGroups = programStandard.productGroups.map( (value:any) => {
                    return {
                      ...value,
                      isChecked : true
                    }
             })
             setProductGroups(selectAllProductGroups);
        } 
        else{
          setProductGroups(programStandard.productGroups);
        }
        
       if(!userState.departments.length && selectAll.departments){
          const selectAllDepartmentsGroups = programStandard.departments.map( (value:any) => {
                 return {
                   ...value,
                   isChecked : true
                 }
          })

          setDepartments(selectAllDepartmentsGroups);
      } 
      else{
      
        setDepartments(programStandard.departments);
      }

      if(!userState.channels.length && selectAll.channels){
        const selectAllChannelsGroups = programStandard.channels.map( (value:any) => {
               return {
                 ...value,
                 isChecked : true
               }
        })
        setChannels(selectAllChannelsGroups);
    } 
    else{
      setChannels(programStandard.channels);
    }

        // for selected markets to the prodcut group
        if(!userState.markets.length && selectAll.markets){
          const selectAllMarketsGroups = programStandard.markets.map( (value:any) => {
                 return {
                   ...value,
                   isChecked : true
                 }
          })
          setMarkets(selectAllMarketsGroups);
      }
      else{
        let selectedMarkets = programStandard.markets.filter((value: any) => value && userState.productGroups.indexOf(value.productGroupId) > -1);
        setMarkets(selectedMarkets);
      }

    
        setMarketsCustom(programStandard.markets);
        // for selected brandds to the product group
        if(!userState.brands.length && selectAll.brands){
          const selectAllBrandsGroups = programStandard.brands.map( (value:any) => {
                 return {
                   ...value,
                   isChecked : true
                 }
          })
          setBrands(selectAllBrandsGroups);
      }
      else{
        let selectedBrands = programStandard.brands.filter((value: any) => value && userState.productGroups.indexOf(value.productGroupId) > -1);
        setBrands(selectedBrands);
      }
 
        setBrandsCustom(programStandard.brands);
        // for managing distributors
        // console.log('userState.directors.length', userState.directors.length)
        // console.log('selectAll.directors', selectAll.directors)
        let managingDistributors = [];
        if(!userState.directors.length && selectAll.directors){
          managingDistributors = programStandard.distributors.map( (value:any) => {
                 return {
                   ...value,
                   isChecked : true
                 }
          })
          // console.log('selectAllDistributorsGroups===', selectAllDistributorsGroups)
          console.log('departmenmanagingDistributorsts====')
      }
      else{
        console.log('departmenmanagingDistributorsts else ====')
        managingDistributors = programStandard.distributors.filter((value: any) => value && userState.productGroups.indexOf(value.productGroupId) > -1 && userState.markets.indexOf(value.marketId) > -1);
        // setDistributors(managingDistributors);
      }
        setDistributors(managingDistributors);  
        setDistributorsCustom(programStandard.distributors);       
      } 

        setState({
          ...state,
          brands_isSelected: selectAll.brands,
          managing_distributors_isSelected: selectAll.directors,
          selectAll_isSelected: selectAll.productGroups,
          departments_isSelected:  selectAll.departments,
          markets_isSelected: selectAll.markets,
          channels_isSelected : selectAll.channels
        });
      

    }
    else{ 
      console.log('for insert the user') 
      setProductGroups(programStandard.productGroups);
      setDepartments(programStandard.departments);
      setMarkets(programStandard.markets);
      setMarketsCustom(programStandard.markets);
      setChannels(programStandard.channels);
      setBrands(programStandard.brands);
      setBrandsCustom(programStandard.brands);
      setDistributors(programStandard.distributors);
      setDistributorsCustom(programStandard.distributors);
    }

  }, [programStandard.departments]);

    const toggleBoxUserPermission = () => {
        const { userPermissionOpened } = state;
        setState({ ...state, userPermissionOpened: !userPermissionOpened });
      };
      const { userDetaisOpened } = state;
      const { userPermissionOpened } = state;
    
      // SELECT ALL Handlers===>
      const handleAllChecked = (event: any) => {
        const updateProductGroup: any = productGroups.map((data: any) => {
          return { ...data, isChecked: event.target.checked };
        });
        setProductGroups(updateProductGroup);
        const { selectAll_isSelected } = state;
        setState({ ...state, selectAll_isSelected: !selectAll_isSelected });
        checkProductGroup(updateProductGroup);
        // checkMarkets(markets)
      };
      const handleCheckChieldElement = (item_id: any) => (event: any) => {
    
        const updateProductGroupChild: any = productGroups.map((data: any) => {
          if (data._id === item_id && data.prettyName === event.target.value) {
            return { ...data, isChecked: event.target.checked };
          } return { ...data };
        });
        
        setProductGroups(updateProductGroupChild);
        if (updateProductGroupChild.filter((value: any) => !value.isChecked).length === 0) {
          setState({ ...state, selectAll_isSelected: true });
        } else {
          setState({ ...state, selectAll_isSelected: false });
        }
        checkProductGroup(updateProductGroupChild);
        // checkMarkets(markets)
      };
    
      // Department Handlers===>
      const handleDepartmentsChecked = (event: any) => {
        const updateDepartments: any = departments.map((data: any) => {
          return { ...data, isChecked: event.target.checked };
        });
        setDepartments(updateDepartments);
        const { departments_isSelected } = state;
        setState({ ...state, departments_isSelected: !departments_isSelected });
      };
      const handleDepartmentsCheckedChieldElement = (item_id: any) => (
        event: any
      ) => {
        const updateDepartmentsChild: any = departments.map((data: any) => {
          if (data._id === item_id && data.prettyName === event.target.value) {
            return { ...data, isChecked: event.target.checked };
          }
          return { ...data };
        });
        setDepartments(updateDepartmentsChild);
        if (
          updateDepartmentsChild.filter((value: any) => !value.isChecked).length ===
          0
        ) {
          setState({ ...state, departments_isSelected: true });
        } else {
          setState({ ...state, departments_isSelected: false });
        }
      };
    
      // Markets Handlers===>
      const handle_Markets_Checked = (event: any) => {
        const updateMarkets: any = markets.map((data: any) => { return { ...data, isChecked: event.target.checked }; });
        const updateAllMarkets: any = marketsCustom.map((data: any) => { return { ...data, isChecked: event.target.checked } });
        setMarkets(updateMarkets);
        setMarketsCustom(updateAllMarkets);
        const { markets_isSelected } = state;
        setState({ ...state, markets_isSelected: !markets_isSelected });
        checkMarkets(updateMarkets)
      };
      const handle_Markets_CheckedChieldElement = (item_id: any) => (event: any) => {
        const updateMarketsChild: any = markets.map((data: any) => {
          if (data._id === item_id && data.prettyName === event.target.value) {
            return { ...data, isChecked: event.target.checked };
          } return { ...data };
        });
        setMarkets(updateMarketsChild);
    
        const updateAllMarketsChild: any = marketsCustom.map((data: any) => {
          if (data._id === item_id && data.prettyName === event.target.value) {
            return { ...data, isChecked: event.target.checked };
          } return { ...data };
        });
        setMarketsCustom(updateAllMarketsChild);
    
        if (updateMarketsChild.filter((value: any) => !value.isChecked).length === 0) {
          setState({ ...state, markets_isSelected: true });
        } else { setState({ ...state, markets_isSelected: false }); }
        checkMarkets(updateMarketsChild)
      };
    
      // Channels Handlers===>
      const handle_Channels_Checked = (event: any) => {
        const updateChannels: any = channels.map((data: any) => {
          return { ...data, isChecked: event.target.checked };
        });
        setChannels(updateChannels);
        const { channels_isSelected } = state;
        setState({ ...state, channels_isSelected: !channels_isSelected });
      };
      const handle_Channels_CheckedChieldElement = (item_id: any) => (
        event: any
      ) => {
        const updateChannelsChild: any = channels.map((data: any) => {
          if (data._id === item_id && data.prettyName === event.target.value) {
            return { ...data, isChecked: event.target.checked };
          }
          return { ...data };
        });
        setChannels(updateChannelsChild);
        if (updateChannelsChild.filter((value: any) => !value.isChecked).length === 0) {
          setState({ ...state, channels_isSelected: true });
        } else {
          setState({ ...state, channels_isSelected: false });
        }
      };
    
      // Brands Handlers===>
      const handle_Brands_Checked = (event: any) => {
        const updateBrands: any = brands.map((data: any) => { return { ...data, isChecked: event.target.checked }; });
        const updateAllBrands: any = brandsCustom.map((data: any) => { return { ...data, isChecked: event.target.checked } });
        setBrands(updateBrands);
        setBrandsCustom(updateAllBrands);
        const { brands_isSelected } = state;
        setState({ ...state, brands_isSelected: !brands_isSelected });
      };
      const handle_Brands_CheckedChieldElement = (item_id: any) => (event: any) => {
    
        const updateBrandsChild: any = brands.map((data: any) => {
          if (data._id === item_id && data.prettyName === event.target.value) {
            return { ...data, isChecked: event.target.checked };
          } return { ...data };
        });
        setBrands(updateBrandsChild);
    
        const updateAllBrandsChild: any = brandsCustom.map((data: any) => {
          if (data._id === item_id && data.prettyName === event.target.value) {
            return { ...data, isChecked: event.target.checked };
          } return { ...data };
        });
        setBrandsCustom(updateAllBrandsChild);
    
        if (updateBrandsChild.filter((value: any) => !value.isChecked).length === 0) {
          setState({ ...state, brands_isSelected: true });
        } else {
          setState({ ...state, brands_isSelected: false });
        }
      };
    
      // managing_distributors Handlers===>
      const handle_Managing_Distributors_Checked = (event: any) => {
        const updateDistributors: any = distributors.map((data: any) => { return { ...data, isChecked: event.target.checked }; });
        const updateAllDistributors: any = distributorsCustom.map((data: any) => { return { ...data, isChecked: event.target.checked }; });
        setDistributors(updateDistributors);
        setDistributorsCustom(updateAllDistributors);
        const { managing_distributors_isSelected } = state;
        setState({ ...state, managing_distributors_isSelected: !managing_distributors_isSelected });
      };
    
      const handle_Managing_Distributors_CheckedChieldElement = (item_id: any) => (event: any) => {
    
        const updateAllDistributorsChild: any = distributorsCustom.map((data: any) => {
          if (data._id === item_id && data.prettyName === event.target.value) {
            return { ...data, isChecked: event.target.checked };
          } return { ...data };
        });
        setDistributorsCustom(updateAllDistributorsChild);
    
        const updateDistributorsChild: any = distributors.map((data: any) => {
          if (data._id === item_id && data.prettyName === event.target.value) {
            return { ...data, isChecked: event.target.checked };
          } return { ...data };
        });
        setDistributors(updateDistributorsChild);
    
        if (updateDistributorsChild.filter((value: any) => !value.isChecked).length === 0) {
          setState({ ...state, managing_distributors_isSelected: true });
        } else {
          setState({ ...state, managing_distributors_isSelected: false });
        }
      };
    
      const [selectedProductGroups, setSelectedProductGroups] = React.useState([] as any);
      const checkProductGroup = (updateProductGroupData: any) => {
        let selectedProductGroups_: any = [];
        updateProductGroupData.forEach((data: any) => { if (data.isChecked) { selectedProductGroups.push(data._id) } })
        setSelectedProductGroups(selectedProductGroups_);
        setProductGroupSelected(selectedProductGroups.length > 0 ? true : false)
        setmarketSelected(selectedProductGroups.length > 0 ? true : false)
    
        if (selectedProductGroups.length <= 0) {
          const setDataToMarkets: any = marketsCustom.map((data: any) => { return { ...data, isChecked: false } })
          const setDataToBrands: any = brandsCustom.map((data: any) => { return { ...data, isChecked: false } })
          const setDataToDistributors: any = distributorsCustom.map((data: any) => { return { ...data, isChecked: false } })
          setMarketsCustom(setDataToMarkets);
          setBrandsCustom(setDataToBrands);
          setDistributorsCustom(setDataToDistributors);
          setDistributors([]);
          setState({
            ...state, markets_isSelected: (state.markets_isSelected === true ? false : state.markets_isSelected),
            brands_isSelected: (state.brands_isSelected === true ? false : state.brands_isSelected),
            managing_distributors_isSelected: (state.managing_distributors_isSelected === true ? false : state.managing_distributors_isSelected),
            selectAll_isSelected: (state.selectAll_isSelected === true ? false : state.selectAll_isSelected)
          });
        }
    
        // setMarkets(programStandard.markets.filter((value: any) => value && selectedProductGroups.indexOf(value.productGroupId) > -1))
        // setBrands(programStandard.brands.filter((value: any) => value && selectedProductGroups.indexOf(value.productGroupId) > -1))
        setMarkets(marketsCustom.filter((value: any) => value && selectedProductGroups.indexOf(value.productGroupId) > -1))
        setBrands(brandsCustom.filter((value: any) => value && selectedProductGroups.indexOf(value.productGroupId) > -1))
        setDistributors(distributorsCustom.filter((value: any) => value && selectedProductGroups.indexOf(value.productGroupId) > -1))
    
        updateDistributorState(selectedProductGroups)
      }
    
      // First select a Market to set Managing Distributor permissions.
      const [selectedMarkets, setSelectedMarkets] = React.useState([] as any);
      const checkMarkets = (updateMarketsData: any) => {
        let selectedMarkets_: any = [];
        updateMarketsData.forEach((data: any) => { if (data.isChecked) { selectedMarkets.push(data._id) } })
        setSelectedMarkets(selectedMarkets_);
        setmarketSelected(selectedMarkets.length > 0 ? true : false)
    
        if (selectedMarkets.length <= 0) {
          // setState({ ...state, managing_distributors_isSelected: false});
          const setDataToDistributors: any = distributorsCustom.map((data: any) => { return { ...data, isChecked: false } })
          setDistributorsCustom(setDataToDistributors);
        }
    
        // setDistributors(programStandard.distributors.filter((value: any) => value && selectedMarkets.indexOf(value.marketId) > -1 )) //&& selectedProductGroups.indexOf(value.productGroupId) > -1))
        setDistributors(distributorsCustom.filter((value: any) => value && selectedMarkets.indexOf(value.marketId) > -1))
      }
    
      const updateDistributorState = (selectedProductGroups: any) => {
        let selectedMarkets_: any = [];
        markets.forEach((data: any) => { if (data.isChecked) { selectedMarkets.push(data._id) } })
        setmarketSelected(selectedProductGroups.length > 0 ? true : false);
        setSelectedMarkets(selectedMarkets_);
        if (selectedMarkets.length > 0) {
          setDistributors(distributorsCustom.filter((value: any) => value && selectedMarkets.indexOf(value.marketId) > -1))
        } else {
          setDistributors([])
          // setState({ ...state, managing_distributors_isSelected: false, markets_isSelected: false  });
        }
      }
      
return(<><div className="box">

        {  createUserResponse.error && modalError ? 
             <CustomModal title="User Add Error" errors={createUserResponse.error} openModal={modalError} handleClose={() => handleClose()}/> 
                :
                null
        }
        {   createUserResponse.data && modalError ? 
         <CustomModal title="User Added Successfully" errors="" success={createUserResponse.data} openModal={modalError} handleClose={() => handleClose()}/> 
         :
         null
        }
        { createUserResponse.data && modalError && user_id ? 
         <CustomModal title="User Updated Successfully" errors="" success={createUserResponse.data} openModal={modalError} handleClose={() => handleClose()}/> 
         :
         null
        }

             <div className="boxTitle" onClick={toggleBoxUserPermission}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "20px 10px",
                      cursor: "pointer",
                    }}
                  >
                    {userPermissionOpened && (
                      <RemoveCircleIcon style={{ color: "rgb(134, 25, 50)" }} />
                    )}
                    {!userPermissionOpened && (
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
                      USER PERMISSION
                    </p>
                  </div>
                </div>
                {userPermissionOpened && (
                  <div style={{ paddingLeft: "10px" }}>
                    <Grid container spacing={3}>
                      <Grid item xs>
                        <FormControlLabel
                          className={classes.prntchkBox}
                          control={
                            <GreenCheckbox
                              onChange={handleAllChecked}
                              checked={state.selectAll_isSelected}
                            />
                          }
                          label="SELECT ALL"
                        />
                      </Grid>
                    </Grid>
                    <p
                      style={{ paddingLeft: "43px" }}
                      className={classes.prntchkBoxSubHead}
                    >
                      PRODUCT GROUPS
                    </p>
                    <Grid container>
                      <Grid item xs={12}>
                        <div className={classes.wrapper}>
                          {(productGroups || []).map(
                            (data: any, index: any) => {
                              return (
                                <FormControlLabel
                                  control={
                                    <GreenCheckbox
                                      size="small"
                                      key={index}
                                      value={data.prettyName}
                                      handleCheckChieldElement={handleCheckChieldElement(
                                        data._id
                                      )}
                                      {...data}
                                    />
                                  }
                                  label={data.prettyName}
                                />
                              );
                            }
                          )}
                        </div>
                      </Grid>
                    </Grid>

                    <ColoredLine />

                    <Grid container spacing={3}>
                      <Grid item xs>
                        <FormControlLabel
                          className={classes.prntchkBox}
                          control={
                            <GreenCheckbox
                              onChange={handleDepartmentsChecked}
                              checked={state.departments_isSelected}
                            />
                          }
                          label="DEPARTMENTS"
                        />
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={12}>
                        <div className={classes.wrapper}>
                          {(departments || []).map((data: any, index: any) => {
                            return (
                              <FormControlLabel
                                control={
                                  <GreenCheckbox
                                    size="small"
                                    key={index}
                                    value={data.prettyName}
                                    handleCheckChieldElement={handleDepartmentsCheckedChieldElement(
                                      data._id
                                    )}
                                    {...data}
                                  />
                                }
                                label={data.prettyName}
                              />
                            );
                          })}
                        </div>
                      </Grid>
                    </Grid>

                    <ColoredLine />

                    <Grid container>
                      <Grid item xs>
                        <FormControlLabel
                          className={classes.prntchkBox}
                          control={
                            <GreenCheckbox
                              onChange={handle_Markets_Checked}
                              checked={state.markets_isSelected}
                              disabled={!productGroupSelected}
                            />
                          }
                          label="MARKETS"
                        />
                      </Grid>
                    </Grid>

                    <Grid container>
                      <Grid item xs={12}>
                        {productGroupSelected ? (
                          <div className={classes.wrapper}>
                            {(markets || []).map((data: any, index: any) => {
                              return (
                                <div>
                                  <FormControlLabel
                                    control={
                                      <GreenCheckbox
                                        size="small"
                                        key={index}
                                        value={data.prettyName}
                                        handleCheckChieldElement={handle_Markets_CheckedChieldElement(
                                          data._id
                                        )}
                                        {...data}
                                      />
                                    }
                                    label={data.prettyName}
                                  />
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                            <div style={{ paddingLeft: "40px" }}>
                              First select a Product Group to set Market
                              permissions.
                            </div>
                          )}
                      </Grid>
                    </Grid>

                    <ColoredLine />

                    <Grid container>
                      <Grid item xs>
                        <FormControlLabel
                          className={classes.prntchkBox}
                          control={
                            <GreenCheckbox
                              onChange={handle_Channels_Checked}
                              checked={state.channels_isSelected}
                            />
                          }
                          label="CHANNELS"
                        />
                      </Grid>
                    </Grid>

                    <Grid container>
                      <Grid item xs={12}>
                        <div className={classes.wrapper}>
                          {(channels || []).map((data: any, index: any) => {
                            return (
                              <FormControlLabel
                                control={
                                  <GreenCheckbox
                                    size="small"
                                    key={index}
                                    value={data.prettyName}
                                    handleCheckChieldElement={handle_Channels_CheckedChieldElement(
                                      data._id
                                    )}
                                    {...data}
                                  />
                                }
                                label={data.prettyName}
                              />
                            );
                          })}
                        </div>
                      </Grid>
                    </Grid>

                    <ColoredLine />

                    <Grid container>
                      <Grid item xs>
                        <FormControlLabel
                          className={classes.prntchkBox}
                          control={
                            <GreenCheckbox
                              onChange={handle_Brands_Checked}
                              checked={state.brands_isSelected}
                              disabled={!productGroupSelected}
                            />
                          }
                          label="BRANDS"
                        />
                      </Grid>
                    </Grid>

                    <Grid container>
                      <Grid item xs={12}>
                        {productGroupSelected ? (
                          <div className={classes.wrapper}>
                            {(brands || []).map((data: any, index: any) => {
                              return (
                                <FormControlLabel
                                  control={
                                    <GreenCheckbox
                                      size="small"
                                      key={index}
                                      value={data.prettyName}
                                      handleCheckChieldElement={handle_Brands_CheckedChieldElement(
                                        data._id
                                      )}
                                      {...data}
                                    />
                                  }
                                  label={data.prettyName}
                                />
                              );
                            })}
                          </div>
                        ) : (
                            <div style={{ paddingLeft: "40px" }}>
                              First select a Product Group to set Brand
                              permissions.
                            </div>
                          )}
                      </Grid>
                    </Grid>

                    <ColoredLine />

                    <Grid container>
                      <Grid item xs>
                        <FormControlLabel
                          className={classes.prntchkBox}
                          control={
                            <GreenCheckbox
                              onChange={handle_Managing_Distributors_Checked}
                              checked={state.managing_distributors_isSelected}
                              disabled={!marketSelected}
                            />
                          }
                          label="MANAGING DISTRIBUTORS"
                        />
                      </Grid>
                    </Grid>

                    <Grid container>
                      <Grid item xs={12}>
                        {marketSelected ? (
                          <div className={classes.wrapper}>
                            {(distributors || []).map(
                              (data: any, index: any) => {
                                return (
                                  <FormControlLabel
                                    control={
                                      <GreenCheckbox
                                        size="small"
                                        key={index}
                                        value={data.prettyName}
                                        handleCheckChieldElement={handle_Managing_Distributors_CheckedChieldElement(
                                          data._id
                                        )}
                                        {...data}
                                      />
                                    }
                                    label={data.prettyName}
                                  />
                                );
                              }
                            )}
                          </div>
                        ) : (
                            <div style={{ paddingLeft: "40px" }}>
                              First select a Market to set Managing Distributor
                              permissions.
                            </div>
                          )}
                      </Grid>
                    </Grid>
                  </div>
                )}
              </div>
              <div style={{ padding: "0 10px", marginTop: 20 }}>
              <Button
                  className={`${classes.button} ${classes.edit}`}
                  onClick={createUser}
                >
                 {
                   user_id ? 'Update User': 'Create User'
                 }
                </Button>
              </div>
              </>
    )
}