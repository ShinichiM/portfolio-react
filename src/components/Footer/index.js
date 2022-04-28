import React from "react";

export const Footer = () => {
    return (
        <div className="font-size-sm flex-column" >
            <div>&copy;{new Date().getFullYear()} by Shinichi Miyakawa</div>
            <ul style={{display: 'flex', width: '30%'}} className="social-media">
                <li style={{width: '20%'}}>
                    <a href="https://github.com/ShinichiM"><img src="/img/img-media/github-white.svg" alt="github"></img></a>
                </li>
                <li style={{width: '20%'}}>
                    <a href="https://www.linkedin.com/in/shinichi-miyakawa/"><img src="/img/img-media/linkedin-brands.svg" alt="linkedin"></img></a>
                </li>
                <li style={{width: '20%'}}>
                    <a href="https://twitter.com/itsShinicho"><img src="/img/img-media/twitter-brands.svg" alt="twitter"></img></a>
                </li>
            </ul>
        </div>
    )
};