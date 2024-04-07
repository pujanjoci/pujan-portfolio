import React from 'react';
import { useState } from 'react';
import SideNav from './components/SideNav'
import Main from './components/Main'
import About from './components/About'
import Contacts from './components/Contacts';

function App() {
  return (
    <div>
      <SideNav />
      <Main />
      <About />
      <Contacts />
    </div>
  );
}

export default App;
