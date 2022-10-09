import React from 'react';

import Home from '../containers/Home';
import Item from '../components/Item/Item';

import { 
    Route,
    Routes,
    Navigate 
  } from 'react-router-dom';


const RootRouter = () => {
    return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/item/:id" element={<Item/>}/>
                <Route path="*" element={<Home/>} />
            </Routes>
    ) 
  }

export default RootRouter;
  