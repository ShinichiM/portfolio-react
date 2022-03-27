import React from "react";
import { Footer } from "../Footer";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        // <header className="flex-row align-center py-2 mb-3">
        //     <div className="container">
        //         <span className="flex-row">
        //             <div style={{width: '2%'}}>
        //                 <img src="img/github-brands.svg" alt="Link to Github"></img>
        //             </div>
        //             <div className="ml-3"style={{width: '2%'}}>
        //                 <img src="img/linkedin-brands.svg" alt="Link to LinkedIn"></img>
        //             </div>
        //             <div className="ml-3"style={{width: '2%'}}>
        //                 <img src="img/twitter-brands.svg" alt="Link to Twitter"></img>
        //             </div>
        //         </span>
        //         <div className="flex-row justify-space-between-lg justify-center align-center my-2">
        //             <span>Shinichi Miyakawa</span>
        //             <nav className="text-center">
        //                 <a href='#'>About me</a>
        //                 <a href="#">Porfolio</a>
        //                 <a href="#">Contact</a>
        //                 <a href="#">Resume</a>
        //             </nav>
        //         </div>
        //     </div>
        // </header>
        <div className="pl-5 h-100-vh w-25 flex-column justify-center background-dark">
                <div>
                    <div>
                        <Link className="transition-a font-size-lg text-format" to='/' style={{color: '#FFFFFF'}}>SM</Link>
                    </div>
  
                    <ul>
                        <li>
                            <Link className="transition-a"to='/about-me'>About me </Link>

                        </li>
                    </ul>

                    <ul>
                        <li>

                            <Link className="transition-a"to='/portfolio'>Portfolio</Link>

                        </li>
                    </ul>
                    <ul>
                        <li>
  
                            <Link className="transition-a"to='/contact'>Contact</Link>
                            {/* <a className="transition-a" href="#">Contact</a> */}
                        </li>
                    </ul>
                    <ul>
                        <li>

                            <Link className="transition-a"to='/resume'>Resume</Link>
                            {/* <a className="transition-a" href="#">Resume</a> */}
                        </li>
                    </ul>
                    <Footer />
                </div>
        </div>
    )
};