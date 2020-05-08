import React, {FormEvent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/rootReducer';
import {setSearchBarText} from './slice';

export const SearchBar = () => {
    const dispatch = useDispatch();
    const {searchText} = useSelector(
        (state: RootState) => state.searchBarSlice
    );

    const updateSearchText = (e: FormEvent<HTMLInputElement>) => {
        dispatch(setSearchBarText(e.currentTarget.value || ""));
    };

    return (
        <div>
            <input type={'text'} onChange={updateSearchText}/>
            <p><b>Your input:</b> {searchText}</p>
        </div>
    );
};

export * from './slice';