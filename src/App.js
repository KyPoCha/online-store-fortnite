import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Shop from './components/Shop';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Shop />
      <Footer />
    </React.Fragment>
  );
}

export default App;
