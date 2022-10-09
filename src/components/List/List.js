import React from 'react';

import Item from '../Item/Item';

import { Link } from 'react-router-dom'

import Images from '../../images';

import './List.css';

const List = ({list = ['hello', 'yes', 'oui'], onDelete}) => {
    return (
        <div className='list__wrapper'>
           {list.map((item, index) => {
            return (
                <Link key={index} className='text__wrapper' to={`/item/${index}`} state={{title: item, id: index}} component={<Item/>} >
                     <p className='text'>
                        {item}
                    </p>
                    <img className='icon' onClick={() => onDelete(index)} alt='trash' src={Images.trashicon} />
                </Link>
            )
           })}
        </div>
    )
}

export default List;