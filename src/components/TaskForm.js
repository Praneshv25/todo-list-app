import React, { useState } from 'react';

function TaskForm({ tasks, setTasks }) {
    const [newTask, setNewTask] = useState('');

    const handleTaskAddition = () => {
        // Implement code to add a new task
        if (newTask.trim() !== '') {
            // Create a new task object with a 'text' property.
            const newTaskObj = {
                text: newTask, // Assign the task text
                completed: false // Initialize the completion status
            };

            // Create a copy of the existing tasks and add the new task.
            const updatedTasks = [...tasks, newTaskObj];

            // Update the tasks state with the updated array.
            setTasks(updatedTasks);

            // Clear the input field after adding the task.
            setNewTask('');
        }
    };

    const handleEnterKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission
            handleTaskAddition();
        }
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Add a new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={handleEnterKeyPress}
            />
            <button onClick={handleTaskAddition}>Add</button>
        </div>
    );
}

export default TaskForm;
