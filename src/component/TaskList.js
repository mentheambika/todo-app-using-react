import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from './component/actions';

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
   