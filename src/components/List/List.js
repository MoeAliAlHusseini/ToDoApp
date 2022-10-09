import React from 'react';

import Images from '../../images';

import './List.css';

const List = ({list = ['hello', 'yes', 'oui'], onDelete}) => {
    return (
        <div className='list__wrapper'>
           {list.map((item, index) => {
            return (
                <div className='text__wrapper'>
                     <p className='text'>
                        {item}
                    </p>
                    <img className='icon' onClick={() => onDelete(index)} alt='trash' src={Images.trashicon} />
                </div>
            )
           })}
        </div>
    )
}

export default List;