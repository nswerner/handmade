import React from 'react';
import { Route } from 'react-router-dom';
import Modal from './modal/modal_container';
import NavBar from './nav_bar/nav_bar_container';
import Footer from "./footer/footer_container";
import ProductIndex from './products/product_index_container';

const AboutUs = () => {
  return <div>Hello, this is about us</div>
}


const App = () => (
  <>
    <Modal/>
    <NavBar/>
    <Route exact path="/" component={ProductIndex} />
    <Footer/>
  </>
);

export default App;