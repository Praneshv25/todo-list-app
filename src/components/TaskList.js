import React from 'react';
import Task from './Task';

function TaskList({ tasks, setTasks }) {
    return (
        <ul>
            {tasks.map((task, index) => (
                <Task key={index} task={task} tasks={tasks} setTasks={setTasks} index={index} />
            ))}
        </ul>
    );
}

export default TaskList;
