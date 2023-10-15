import React from 'react';

function Task({ task, tasks, setTasks, index }) {
    const handleTaskCompletion = () => {
        // Create a copy of the tasks array to avoid mutating state directly.
        const updatedTasks = [...tasks];

        // Toggle the completion status of the task at the given index.
        updatedTasks[index] = { ...updatedTasks[index], completed: !updatedTasks[index].completed };

        // Update the tasks state with the updated array.
        setTasks(updatedTasks);
    };

    const handleTaskDeletion = () => {
        // Implement code to delete a task
        const updatedTasks = [...tasks];

        // Remove the task at the given index.
        updatedTasks.splice(index, 1);

        // Update the tasks state with the updated array.
        setTasks(updatedTasks);
    };

    return (
        <div className={task.completed ? 'completed-task' : ''}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={handleTaskCompletion}
            />
            {task.text}
            <button onClick={handleTaskDeletion}>Delete</button>
        </div>
    );
}

export default Task;
