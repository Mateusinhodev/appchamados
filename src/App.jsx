import { useState } from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes';

function App() {
  return (
    <BrowserRouter>
          <RoutesApp/>
    </BrowserRouter>
  )
}

export default App;
