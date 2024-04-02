import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './component/actions';

function TaskInput() {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      dispatch(addTask(taskText));
      setTaskText('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter task..."
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskInput;