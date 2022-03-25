import React from "react";

export const Header = () => {
    return (
        <header className="flex-row align-center py-2 mb-3">
            <div className="container">
                <span>
                    instagram, twitter, github
                </span>
                <div className="flex-row justify-space-between-lg justify-center align-center my-2">
                    <span>Shinichi Miyakawa</span>
                    <nav className="text-center">
                        <a href='#'>About me</a>
                        <a href="#">Porfolio</a>
                        <a href="#">Contact</a>
                        <a href="#">Resume</a>
                    </nav>
                </div>
            </div>
        </header>
    )
};