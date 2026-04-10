import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TaskList from './components/TaskList';
import Home from './pages/Home';
import QuestionComponent from './components/question/QuestionComponent';

function App() {
  return (
    <div>
      <Home />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/tasks" element = {<TaskList />} />
          <Route path = "/tasks/:id" element = {<QuestionComponent />} />
        </Routes>
      </Router>
      {/* TODO: Replace this placeholder with Routes */}
    </div>
  );
}

export default App;
