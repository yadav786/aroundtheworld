import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../store'
import { getYears } from '../api/FinancialYear';

interface Issue {
    // id: number
    // title: string
    // comments: number
}

interface IssuesState {
    currentPageIssues: number[]
    pageCount: number
    isLoading: boolean
    error: string | null
    financialyear: any
}
type financialyearResult = any;
  
const financialyearInitialState: IssuesState = {
    currentPageIssues: [],
    pageCount: 0,
    isLoading: false,
    error: null,
    financialyear: []
}   


function startLoading(state: IssuesState) {
    state.isLoading = true
}

function loadingFailed(state: IssuesState, action: PayloadAction<string>) {
    state.isLoading = false
    state.error = action.payload
}


const financialyear = createSlice({
    name: 'financialyear',
    initialState: financialyearInitialState,
    reducers: {
        getIssuesStart: startLoading,
        getIssueSuccess(state, { payload }: PayloadAction<Issue>) {
            state.isLoading = false
            state.error = null
        },
        getFinancialYearSuccess(state, { payload }: PayloadAction<financialyearResult>) {
            // console.log('payload====', payload);
            const { pageCount, issues, pageLinks } = payload
            state.isLoading = false
            state.error = null
            state.financialyear = payload
        },
        getFinancialYearFailure: loadingFailed
    }
})

export const {
    getIssuesStart,
    getIssueSuccess,
    getFinancialYearSuccess,
    getFinancialYearFailure,
  
} = financialyear.actions

export default financialyear.reducer


export const fetchFinancialYear = (): AppThunk => async dispatch => {
    try {
        // dispatch(getIssuesStart())
        const getResult: any = await getYears()
        console.log('getResult fetchYear===', getResult.data.docs);
        dispatch(getFinancialYearSuccess(getResult.data.docs))
    } catch (err) {
        // dispatch(getFinancialYearFailure(err.toString()))
    }
}


