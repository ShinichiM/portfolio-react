import React, { useState } from 'react';

import { Header } from './components/Header';
import { Main } from './components/Main';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AboutMe from './pages/about-me';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';

function App() {
  const [currentPage, setCurrentPage] = useState('');

  return (
    <div className="App">
      <Router>
        <div className="flex-row" style={{height: 'auto'}}>
        <Header />
        <Routes>
            <Route exact path="/" />
            <Route exact path='/about-me' component={AboutMe} />
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/portfolio' component={Portfolio}/>
            <Route exact path='/resume' component={Resume} />
        </Routes>
        <Main setPage={setCurrentPage} currentPage={currentPage}/>
        </div>
      </Router>
    </div>
  );
}

export default App;