import React, { useState } from 'react';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

const Home = () => {
    const [tasks, setTasks] = useState(['Task 1', 'Task 2', 'Task 3']);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    return (
        <div>
            <h1>ToDo List</h1>
            <ToDoForm addTask={addTask} />
            <ToDoList tasks={tasks} />
        </div>
    );
};

export default Home;
