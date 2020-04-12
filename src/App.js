import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => setProjects(response.data));
  }, []);

  const handleAddProject = () => {
    setProjects([...projects, `New project ${Date.now()}`]);
  };

  return (
    <>
      <Header title="Homepage" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Add</button>
    </>
  );
}

export default App;