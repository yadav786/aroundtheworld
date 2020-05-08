import { combineReducers } from '@reduxjs/toolkit'
import searchBarSlice from '../reducers/slice'
import usersReducer from '../reducers/UserReducer'
import rolesReducer from '../reducers/RoleReducer'
import financialYearReducer from '../reducers/FinancialYearReducer'

const rootReducer = combineReducers({
    searchBarSlice: searchBarSlice,
    users: usersReducer,
    roles: rolesReducer,
    financialyear: financialYearReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;