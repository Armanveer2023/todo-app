import React from 'react';

const ToDoList = ({ tasks }) => {
    return (
        <div>
            {tasks.map((task, index) => (
                <div key={index}>{task}</div>
            ))}
        </div>
    );
};

export default ToDoList;
