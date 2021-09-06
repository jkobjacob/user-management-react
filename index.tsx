import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function App() {
  return <Hello name="sherin" />;
}

render(<App />, document.getElementById('root'));
