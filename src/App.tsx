import './App.css';

import React, { useState } from 'react';

import logo from './logo.svg';
import { Index } from './View';

function App() {
  return (
    <>
      {new Array(10).fill(0).map((_, index) => (
        <Index key={index} />
      ))}
    </>
  );
}

export default App;
