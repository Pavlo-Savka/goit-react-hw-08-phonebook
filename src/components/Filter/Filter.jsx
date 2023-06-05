import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue } from 'redux/selectors';
import { filterChange } from 'redux/filterSlice';

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);

  const handleChangeInputFilter = (evt) => {
  const { target: { value } } = evt;
    dispatch(filterChange(value));
  };

        return (
    <div className='filter'>
        <p>Find contacts by name</p>
        <input
          name="filter"
          value={filterValue}
          onChange={handleChangeInputFilter}>      
          </input>
        </div>    
        )
    }
export default Filter;