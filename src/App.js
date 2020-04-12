import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState('');
  const [owner, setOwner] = useState('');

  useEffect(() => {
    api.get('projects').then(response => setProjects(response.data));
  }, []);

  const handleAddProject = async () => {
    if(!project || !owner) return;

    const response = await api.post('projects', {
      title: project,
      owner: owner
    });

    setProjects([...projects, response.data]);
  };

  return (
    <>
      <Header title="Homepage" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Add</button>
      <input type="text" onChange={e => setProject(e.target.value)}/>
      <input type="text" onChange={e => setOwner(e.target.value)}/>
    </>
  );
}

export default App;