import { configureStore } from '@reduxjs/toolkit'

import {tasksReducer} from './tasks';

const reducer = {
    tasks: tasksReducer
  }

export const store = configureStore({
    reducer
});