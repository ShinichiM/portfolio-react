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
            name: 'Book Search Engine',
            img: '/img/img-project/book-search.jpg',
            deployed: 'https://sm-book-search.herokuapp.com/',
            github: 'https://github.com/ShinichiM/book-search-engine'
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
        },
        {
            name: "Sweeney's Seafood",
            img: '/img/img-project/Sweeneys.jpg',
            deployed: 'https://sweeney-seafood.herokuapp.com/',
            github: 'https://github.com/AdamAlibraheem000/Sweeney-Seafood'
        }
    ];

  return (
    <div className="h-100-vh page-container background-beige" style={{ overflowY: "scroll" }}>
{/* style={{ height: "80vh" }} */}
      <div className="tag-portfolio">
        <h1 className="text-format w-fit-content mt-0 text-italic px-2">Projects</h1>
        <Project projects={projects} />
      </div>
    </div>
  );
};

export default Portfolio;
