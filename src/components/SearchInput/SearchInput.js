import React from 'react';

import './SearchInput.css';

const CONSTANTS = {
    PLACEHOLDER: 'New Task',
    SUBMIT: 'Submit',
    CLEAR: 'Clear'
}

const SearchInput = ({placeholder = CONSTANTS.PLACEHOLDER, value, onChange, onSubmit, onClear, isSubmitDisabled}) => {
    return (
        <>
          <div>
            <input className='input__wrapper' type={'text'} onChange={e => onChange(e.target.value)} value={value} placeholder={placeholder}/>
            <button className='submit__button' title='Submit' onClick={onSubmit} disabled={isSubmitDisabled}> {CONSTANTS.SUBMIT} </button>
        </div>
            <p className='clear__button' onClick={onClear}>
                {CONSTANTS.CLEAR}
            </p>
        </>
      

    )
}

export default SearchInput;