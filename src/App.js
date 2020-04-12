import React, { useState } from 'react';

import './App.css';
import background from './assets/photo.jpg';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState([]);

  const handleAddProject = () => {
    setProjects([...projects, `New project ${Date.now()}`]);
  };

  return (
    <>
      <Header title="Homepage" />

      <img width={300} src={background} alt="background"/>

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Add</button>
    </>
  );
}

export default App;