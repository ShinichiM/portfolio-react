import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import AboutMe from '../../pages/about-me';
import Contact from '../../pages/contact';
import Portfolio from '../../pages/portfolio';
import Resume from '../../pages/resume';
import Home from "../../pages/home";

export const Main = (props) => {
    const { setPage, currentPage } = props;
    const location = useLocation();
    const pathname = location.pathname.split('/')[1];

    console.log(pathname);
    useEffect(() => {
        setPage(pathname)
    })

    // make div container transparent
    return (
        <div className="main-width flex-column justify-center" >
            {/* {currentPage === '' ? <Home /> : ''} */}
            {currentPage === 'about-me' ? <AboutMe /> : ''}
            {currentPage === 'contact' ? <Contact /> : ''}
            {currentPage === 'portfolio' ? <Portfolio /> : ''}
            {currentPage === 'resume' ? <Resume /> : ''}
        </div>
    )
};