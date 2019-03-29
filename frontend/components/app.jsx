import React from 'react';
import { Route } from 'react-router-dom';
import Modal from './modal/modal_container';
import NavBar from './nav_bar/nav_bar_container';
import Footer from "./footer/footer_container";

const App = () => (
  <>
    <Modal/>
    <NavBar/>
    <Footer/>
  </>
);

export default App;