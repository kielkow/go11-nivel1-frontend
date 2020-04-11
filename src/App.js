import React from 'react';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header title="Homepage">
        <ul>
          <li>Menu</li>
          <li>Projects</li>
          <li>Profile</li>
        </ul>
      </Header>
      <Header title="Projects">
        <ul>
          <li>ReactJS</li>
          <li>Node.js</li>
          <li>React Native</li>
      </ul>
      </Header>
    </>
  );
}

export default App;