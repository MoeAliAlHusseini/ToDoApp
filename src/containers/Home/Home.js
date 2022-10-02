import React, {useEffect, useState} from 'react'

import SearchInput from '../../components/SearchInput'

import './Home.css'

const Home = () => {

    const [newTask, setNewTask] = useState('');
    const [listOfTasks, setListOfTasks] = useState([]);

    useEffect(() => {
        console.log("the homepage being rendered")
        console.log("new task: ", newTask)
        console.log("listOfTasks: ", listOfTasks)
    });

    const handleOnSubmit = () => {
        // this function will handle the on submit functionality
        if(listOfTasks.includes(newTask)) {
            let updatedListOfTasks = listOfTasks.filter(item => item !== newTask)
            setListOfTasks(updatedListOfTasks);
        }
        else {
            setListOfTasks([...listOfTasks, newTask]);
        }
    }

    return (
        <div className='Home'>
            <p>
                This is the Homepage
            </p>
            <SearchInput onChange={setNewTask} value={newTask} onClear={() => setNewTask('')} onSubmit={handleOnSubmit} isSubmitDisabled={!newTask}/>
    </div>
    )
}

export default Home;