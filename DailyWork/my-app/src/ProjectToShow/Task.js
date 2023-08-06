import React, { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import tasks from './tasks'; // Import your tasks data

const Task = () => {
  const { taskId } = useParams();
  const taskRef = useRef(null);

  const scrollToTask = () => {
    if (taskRef.current) {
      taskRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const task = tasks.find(task => task.id === Number(taskId));

  if (!task) {
    return <p>Task not found</p>;
  }

  return (
    <div className="container mt-4">
      <Link to="/task-list" className="btn btn-secondary mb-2">
        Back to Task List
      </Link>
      <div className="card text-center" ref={taskRef}>
        <img src={task.image} className="card-img-top rounded mx-auto d-block" alt="TaskImage" />
        <div className="card-body text-center">
          <h5 className="card-title">{task.title}</h5>
          <p className="card-text">{task.description}</p>
          <button className="btn btn-primary" onClick={scrollToTask}>
            Scroll to Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
