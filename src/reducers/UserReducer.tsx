import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getUsers, getProductGroups, getAllUsers, putUserStatus, postCreateUser, putUserRole, updateUser } from '../api/UserApi'
import { AppThunk } from '../store'

interface UsersState {
  users: any,
  activePage: number,
  totalPages: number,
  msg: any,
  programStandard: any,
  allUsers: any,
  userData: any,
  userRoleData: any,
  createUserResponse: any
}

type UsersResult = any;

const usersInitialState: UsersState = {
  users: [],
  activePage: 0,
  totalPages: 0,
  msg: '',
  programStandard: [],
  allUsers: [],
  userData: {},
  userRoleData: {},
  createUserResponse:''
}

const users = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    getUserProductGroups(state, { payload }: PayloadAction<UsersResult>) {
      state.programStandard = payload;
    },
    getUsersSuccess(state, { payload }: PayloadAction<UsersResult>) {
      const { page, pages, message } = payload.data.data
      state.activePage = page
      state.totalPages = pages
      state.msg = message
      state.users = payload.data.data.users
    },
    getAllUsersList(state, { payload }: PayloadAction<UsersResult>) {
      state.allUsers = payload
    },
    putUserStatusData(state, { payload }: PayloadAction<UsersResult>) {
      state.userData = payload
    },
    putUserRoleData(state, { payload }: PayloadAction<UsersResult>) {
      state.userRoleData = payload
    },
    userCreateSuccess(state, { payload }: PayloadAction<UsersResult>) {
      state.createUserResponse = payload.data
    },
  }
})

export const {
  getUserProductGroups,
  getUsersSuccess,
  getAllUsersList,
  putUserStatusData,
  putUserRoleData,
  userCreateSuccess
} = users.actions

export default users.reducer


export const fetchUsers = (search = '', page = 1): AppThunk => async dispatch => {
  try {
    const getResult: any = await getUsers(search, page)
    console.log('getResult fetchUsers===', getResult);
    dispatch(getUsersSuccess(getResult))
  } catch (err) {
    // dispatch(getIssuesFailure(err.toString()))
  }
}

export const fetchProductGroups = (user_id:string=''): AppThunk => async dispatch => {
  try {
    const getResult: any = await getProductGroups(user_id)
    console.log('getResult fetchUsers===', getResult);
    dispatch(getUserProductGroups(getResult.data.data))
  } catch (err) {
    // dispatch(getIssuesFailure(err.toString()))
  }
}

export const fetchAllUsers = (): AppThunk => async dispatch => {
  try {
    const getResult: any = await getAllUsers()
    // console.log('getResult fetchAllPrograms===', getResult.data.data);
    dispatch(getAllUsersList(getResult.data.data))
  } catch (err) {
    // dispatch(getIssuesFailure(err.toString()))
  }
}


export const updateUserStatus = (userId = '', userIsActive = false, pageNo = 1): AppThunk => async dispatch => {
  try {
    const getResult: any = await putUserStatus(userId, userIsActive)
    console.log('getResult updateUserStatus===', getResult);
    //dispatch(putUserStatusData(getResult))
    dispatch(fetchUsers("", pageNo))
  } catch (err) {
  }
}

export const updateUserRole = (userId = '', userRoleId = '', pageNo = 1): AppThunk => async dispatch => {
  try {
    const getResult: any = await putUserRole(userId, userRoleId)
    console.log('getResult updateUserRole===', getResult);
    //dispatch(putUserRoleData(getResult))
    dispatch(fetchUsers("", pageNo))
  } catch (err) {
  }
}


export const createUserAPI = (details: any): AppThunk => async dispatch => {
  try {
    const getResult: any = await postCreateUser(details)
    dispatch(userCreateSuccess(getResult))
  } catch (err) {
  }
}


export const updateUserDetails = (id: string, userdetails: any): AppThunk => async dispatch => {
  try {
    const getResult: any = await updateUser(id, userdetails)
    dispatch(userCreateSuccess(getResult))
  } catch (err) {
  }
}

