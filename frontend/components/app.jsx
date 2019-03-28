import React from 'react';
import { Route } from 'react-router-dom';
import Modal from './modal/modal_container';
import NavBar from './nav_bar/nav_bar_container';

const App = () => (
  <>
    <Modal/>
    <NavBar/>
  </>
);

export default App;