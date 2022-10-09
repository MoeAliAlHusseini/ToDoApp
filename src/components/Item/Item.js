import React, {useEffect} from 'react';

import { useLocation } from "react-router-dom";


import './Item.css'

const Item = () => {
    const location = useLocation();
    useEffect(() => {

    })
    return(
        <div className='item__wrapper'>
            <p>
            {location.state.title}
            </p>
        </div>
    )
   
}

export default Item;