import React from "react";
import { Footer } from "../Footer";
import { Link } from "react-router-dom";

export const Header = () => {
    return ( 
        <div className="header-container">
                <nav className="header-sub-container">
                    <div>
                        <Link className="transition-a font-size-lg text-format" to='/' style={{color: '#FFFFFF'}}>SM</Link>
                    </div> 
                    <ul className="header-list justify-space-between">
                        <li>
                            <Link className="transition-a" to='/about-me'>About me </Link>
                        </li>
                        <li>
                            <Link className="transition-a"to='/portfolio'>Portfolio</Link>
                        </li>
                        <li> 
                            <Link className="transition-a"to='/contact'>Contact</Link>
                        </li>
                        <li>
                            <Link className="transition-a"to='/resume'>Resume</Link>
                        </li>
                    </ul>
                    <Footer />
                </nav>
        </div>
    )
};