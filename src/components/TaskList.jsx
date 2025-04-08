import React from 'react';

const TaskList = ({ tasks, deleteTask }) => {
    if (tasks.length === 0) {
        return <p>No tasks available. Start by adding one above.</p>;
    }

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <div key={task.id} className={`task ${task.priority.toLowerCase()}`}>
                    <div className="task-details">
                        <div>
                            {task.text}
                            <br />
                            <strong>Priority:</strong> {task.priority}
                        </div>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );

};

export default TaskList;
