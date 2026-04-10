import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Home />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/tasks" element = {<TaskList />} />
          <Route path = "/tasks/:id" element = {<TaskDetail />} />
        </Routes>
      </Router>
      {/* TODO: Replace this placeholder with Routes */}
    </div>
  );
}

export default App;
