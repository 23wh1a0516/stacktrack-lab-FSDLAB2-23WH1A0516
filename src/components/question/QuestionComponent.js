import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


// TODO: Import any API functions you need from '../../api/client'
// Example: import { get, post } from '../../api/client';

function QuestionComponent() {
  const {id}  = useParams(); 
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch(`http://bvrithcloud.com/api/tasks/${id}`,{
      method: 'GET',
      headers :{
        'Content-Type': 'application/json',
        'x-student-id' : '23WH1A0516'
      }
    }).then(res=> res.json())
    .then(data => setTask(data))
    .catch(err => console.log(err));
  }, [id]);

  return(
    <div>
      <h2>Task Details</h2>
      <p>ID: {task.id}</p>
      <p>Title: {task.title}</p>
      <p>Description: {task.description}</p>
    </div>
  );
}

  // TODO: Define state variables needed for your question set
  

  // TODO: Implement data fetching inside a useEffect hook
  

  // TODO: Implement any event handlers required by your question set
  

  // return (
  //   <div>
  //     {/* TODO: Replace this placeholder with your question set UI */}
  //     <p>QuestionComponent placeholder — implement your assigned question set here.</p>

  //     {/* TODO: Render fetched data or form elements as required */}
  //   </div>
  // );

export default QuestionComponent;
