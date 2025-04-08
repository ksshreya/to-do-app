import React from 'react';

const TaskList = ({ tasks, deleteTask }) => {
    if (tasks.length === 0) {
        return <p>No tasks available. Start by adding one above.</p>;
    }

    return (
        <div>
            {tasks.map((task) => (
                <div key={task.id}>
                    <div>{task.text}</div>
                    <div>
                        <span>Priority: {task.priority}</span>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default TaskList;
