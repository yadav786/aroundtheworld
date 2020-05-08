import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getRoles, getAllRoles, putRoleStatus, postCreateUserRole, updateUserRole } from '../api/RolesApi'
import { AppThunk } from '../store'

interface RolesState {
  roles: any
  activePage: number
  totalPages: number
  msg: any,
  allRoles: any,
  roleStatusData: any,
  roleResponse:any
}

  
type RolesResult = any;
  
const rolesInitialState: RolesState = {
  roles: [],
  activePage: 0,
  totalPages: 0,
  msg: '',
  allRoles: [],
  roleStatusData: {},
  roleResponse:''
}

const roles = createSlice({
  name: 'roles',
  initialState: rolesInitialState,
  reducers: {
    getRolesGroups(state, { payload }: PayloadAction<RolesResult>) {
      console.log('getUserProductGroups payload====', payload);
    },
    getRolesSuccess(state, { payload }: PayloadAction<RolesResult>) {
      console.log('payload====', payload);
      const { page, pages, message } = payload.data
      state.activePage = page
      state.totalPages = pages
      state.msg = message
      state.roles = payload.data.docs
    },
    getAllRolesList(state, { payload }: PayloadAction<RolesResult>) {
      state.allRoles = payload
    },
    putRoleStatusData(state, { payload }: PayloadAction<RolesResult>) {
      state.roleStatusData = payload
    },
    userCreateRoleSuccess(state, { payload }: PayloadAction<RolesResult>) {
      console.log(payload);
      state.roleResponse = payload.data;
    },
  }
})

export const {
  getRolesGroups,
  getRolesSuccess,
  getAllRolesList,
  putRoleStatusData,
  userCreateRoleSuccess
} = roles.actions
 
export default roles.reducer

export const fetchRoles = (search='', page = 1): AppThunk => async dispatch => {
  try {     
    // dispatch(getIssuesStart())
    const getResult:any = await getRoles(search, page)
    console.log('getResult fetchRoles===', getResult.data); 
    dispatch(getRolesSuccess(getResult))
  } catch (err) {
    // dispatch(getIssuesFailure(err.toString()))
  }
}

export const fetchAllRoles = (): AppThunk => async dispatch => {
  try {
    const getResult: any = await getAllRoles()
    // console.log('getResult fetchAllRoles===', getResult.data.data);
    dispatch(getAllRolesList(getResult.data.data))
  } catch (err) {
    // dispatch(getIssuesFailure(err.toString()))
  }
}

export const updateRoleStatus = (roleId = '', roleIsActive = false, pageNo = 1): AppThunk => async dispatch => {
  try {
    const getResult: any = await putRoleStatus(roleId, roleIsActive)
    console.log('getResult updateRoleStatus===', getResult);
    //dispatch(putRoleStatusData(getResult))
    dispatch(fetchRoles("", pageNo))
  } catch (err) {
  }
}

export const createUserRoleAPI = (details: any): AppThunk => async dispatch => {
  try {
    const getResult: any = await postCreateUserRole(details)
    dispatch(userCreateRoleSuccess(getResult))
  } catch (err) {
  }
}

export const updateUserRoleAPI = (id:string, details:any): AppThunk => async dispatch => {
  try {
    const getResult: any = await updateUserRole(id, details)
    console.log('getResult updateRoleStatus===', getResult);
    dispatch(userCreateRoleSuccess(getResult));
  } catch (err) {
  }
}


