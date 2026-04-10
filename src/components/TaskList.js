import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function TaskList() {
  const [tasks, setTasks] = useState([]);   

  useEffect(() => {
    fetch('http://bvrithcloud.com/api/tasks', {
      method: 'GET',
      headers :{            
        'Content-Type': 'application/json',
        'x-student-id' : '23WH1A0516'
      }
    }).then(res => res.json())
    .then(data => setTasks(data))
    .catch(err => console.log(err));
  }, []);

  return (  
    <div>
        <h2>Task List</h2> 
        {tasks.map(task => (
            <div key={task.id}>
                <h3>Title :{task.title}</h3>
                <p>id: {task.id}</p>
                <p>Description : {task.description}</p>
                <p>Status : {task.status}</p>
                <Link to={`/tasks/${task.id}`}>View Details</Link>

            </div>
        ))}
    </div>
  )};

export default TaskList;