import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
    const [text, setText] = useState('');
    const [priority, setPriority] = useState('Medium');

    const handlingAdd = () => {
        if (text.trim()) {
            addTask({
                id: Date.now(),
                text,
                priority,
            });
            setText('');
            setPriority('Medium');
        }
    };

    return (
        <div className="task-input">
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter task"
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select>
            <button onClick={handlingAdd}>Add Task</button>
        </div>
    );
};

export default TaskInput;
