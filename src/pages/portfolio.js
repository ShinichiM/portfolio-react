import React from "react";
import { Project } from "../components/Project";

const Portfolio = () => {
    const projects = [
        {
            name: 'Deep Thoughts',
            img: '/img/img-project/deep-thoughts.jpg',
            deployed: 'https://deep-thoughts-sm.herokuapp.com/',
            github: 'https://github.com/ShinichiM/deep-thoughts'
        },
        {
            name: 'Obscure TVs',
            img: '/img/img-project/obscure-tv.jpg',
            deployed: 'https://obscure-tv.herokuapp.com/',
            github: 'https://github.com/ShinichiM/tv-blog'
        },
        {
            name: 'Job Hunter',
            img: '/img/img-project/job-hunter.jpg',
            deployed: 'https://ileachy.github.io/Job-hunter/',
            github: 'https://github.com/ileachy/Job-hunter'
        },
        {
            name: 'Tech Blog',
            img: '/img/img-project/tech-blog.jpg',
            deployed: 'https://tech-glob.herokuapp.com/',
            github: 'https://github.com/ShinichiM/Tech-Blog'
        },
        {
            name: 'Budget Tracker',
            img: '/img/img-project/budget-tracker.jpg',
            deployed: 'https://sm-budget-tracker.herokuapp.com/',
            github: 'https://github.com/ShinichiM/Budget-Tracker'
        },
        {
            name: 'Note Taker',
            img: '/img/img-project/note-taker.jpg',
            deployed: 'https://nt-9000.herokuapp.com/',
            github: 'https://github.com/ShinichiM/note-taker'
        }
    ];

    return (
            <div className="h-100-vh" style={{overflow: 'hidden'}}>
                <img  className="img-background" src="/img/city.jpg" alt="city landscape overhead"></img>
                <div style={{height: "80vh"}} className="tag-portfolio">
                    <h1 className="text-format ml-4">Portfolio</h1> 
                    <Project projects={projects}/>
                </div>
            </div>
    );
};

export default Portfolio;