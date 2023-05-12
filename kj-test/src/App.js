import React from 'react';

import { Brands, Navbar, Footer, News, CaseStudies, Offers, Header } from './components';
import './App.css';

const App = () => (
  <div className="App">
      <Navbar />
      <Header />
      <Offers />
      <CaseStudies /> 
      <Brands />
      <Footer />
  </div>
);

export default App;
