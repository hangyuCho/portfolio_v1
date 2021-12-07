import React from 'react';
import ReactDOM from 'react-dom';
import Intro from "./component/intro/Intro"
import About from "./component/about/About"
import ProductList from "./component/productList/ProductList"
import './index.css';

function App() {
  return (
    <>
      <div><Intro/></div>
      <div><About/></div>
      <div><ProductList/></div>
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
