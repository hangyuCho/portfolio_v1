import React from 'react';
import ReactDOM from 'react-dom';
import Intro from "./component/intro/Intro"
import About from "./component/about/About"
import './index.css';

function App() {
  return (
    <>
      <div><Intro/></div>
      <div><About/></div>
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
