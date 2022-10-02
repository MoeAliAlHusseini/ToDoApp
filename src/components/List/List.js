import React from 'react';

import './List.css';

const List = ({list = ['hello', 'yes', 'oui']}) => {
    return (
        <div style={{marginTop: 50}}>
           {list.map((item, index) => {
            return (
                <div className='text__wrapper'>
                     <p className='text'>
                        {item}
                    </p>
                </div>
            )
           })}
        </div>
    )
}

export default List;