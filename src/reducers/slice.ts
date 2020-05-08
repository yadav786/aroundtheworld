import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SearchBarState = {
    searchText: string
}

const initialState: SearchBarState = {
    searchText: ''
};

const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState,
    reducers: {
        setSearchBarText(state, action: PayloadAction<string>) {
            state.searchText = action.payload;
        }
    }
});

export const {
    setSearchBarText
} = searchBarSlice.actions;

export default searchBarSlice.reducer;