import React, { useState } from 'react';

import { Header } from './components/Header';
import { Main } from './components/Main';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AboutMe from './pages/about-me';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import Home from './pages/home';

function App() {
  const [currentPage, setCurrentPage] = useState('');

  return (
    <div className="App ">
      <Router>
        <div className= {`flex-row img-background-${currentPage}`}  style={{height: 'auto'}}>
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path='/about-me' component={AboutMe} />
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/portfolio' component={Portfolio}/>
            <Route exact path='/skills' component={Resume} />
        </Routes>
        <Main setPage={setCurrentPage} currentPage={currentPage}/>
        </div>
      </Router>
    </div>
  );
}

export default App;