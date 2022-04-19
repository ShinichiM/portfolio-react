import React, { useState } from "react";

export const Project = (props) => {
  const { projects } = props;
  return (
    <div className="project-list project-container">
      <div className="text-format project-size">
        <div className="img-project-container">
          <div className="show-desc">
            <a href={projects[6].deployed}>
              <h4 className="desc-text">{projects[6].name}</h4>
              <p></p>
              <p className="desc-text">
                Sweeney's Seafood is a Seafood Bar and Grill located in Dayton,
                Ohio. The application utilizes React.js, MongoDb, CSS3, and
                JavaScript to provide modern day functionality to an outdated
                website.
              </p>
            </a>
          </div>
          <a href={projects[6].deployed}>
            <img
              className="img-project border-radius-2 image"
              src={projects[6].img}
              alt="note-taker-project"
            ></img>
          </a>
        </div>
      </div>
      <div className="text-format project-size">
        <div className="img-project-container">
          <div className="show-desc">
            <a href={projects[1].deployed}>
              <h4 className="desc-text">{projects[1].name}</h4>
              <p></p>
              <p className="desc-text">
                Obscure TVs is an application that uses MySQL, Node.js, and
                Handlebars.js to create a unique platform for users to share
                their TVs and reviews!
              </p>
            </a>
          </div>
          <a href={projects[1].deployed}>
            <img
              className="img-project border-radius-2 image"
              src={projects[1].img}
              alt="obscure-tv-project"
            ></img>
          </a>
        </div>
      </div>
      <div className="text-format project-size">
        <div className="img-project-container">
          <div className="show-desc">
            <a href={projects[2].deployed}>
              <h4 className="desc-text">{projects[2].name}</h4>
              <p></p>
              <p className="desc-text">
                Job Hunter is made with JavaScript, HTML5, and CSS3 to create a
                unique application for users on the job hunt! The application
                has two modes of search: Government and General.
              </p>
            </a>
          </div>
          <a href={projects[2].deployed}>
            <img
              className="img-project border-radius-2 image"
              src={projects[2].img}
              alt="job-hunter-project"
            ></img>
          </a>
        </div>
      </div>
      <div className="text-format project-size">
        <div className="img-project-container">
          <div className="show-desc">
            <a href={projects[0].deployed}>
              <h4 className="desc-text">{projects[0].name}</h4>
              <p></p>
              <p className="desc-text">
                Deep Thoughts is an application that uses Node.js, GraphQL,
                MongoDB, and React.js to create an interactive website for
                people to share their thoughts and opinions on anything.
              </p>
            </a>
          </div>
          <a href={projects[0].deployed}>
            <img
              className="img-project border-radius-2 image"
              src={projects[0].img}
              alt="deep-thoughts-project"
            />
          </a>
        </div>
      </div>

      <div className="text-format project-size">
        <div className="img-project-container">
          <div className="show-desc">
            <a href={projects[4].deployed}>
              <h4 className="desc-text">{projects[4].name}</h4>
              <p></p>
              <p className="desc-text">
                Budget Tracker is a stand-alone application that uses MongoDB,
                Node.js, HTML5, CSS3, and JavaScript to give users a one stop
                shop for personalized budgeting inside or outside their home.
              </p>
            </a>
          </div>
          <a href={projects[4].deployed}>
            <img
              className="img-project border-radius-2 image"
              src={projects[4].img}
              alt="budget-tracker-project"
            ></img>
          </a>
        </div>
      </div>
      <div className="text-format project-size">
        <div className="img-project-container">
          <div className="show-desc">
            <a href={projects[5].deployed}>
              <h4 className="desc-text">{projects[5].name}</h4>
              <p></p>
              <p className="desc-text">
                Note Taker is an application that uses Node.js, JavaScript,
                HTML5, and CSS3 to give users a web-based notetaking
                application.
              </p>
            </a>
          </div>
          <a href={projects[5].deployed}>
            <img
              className="img-project border-radius-2 image"
              src={projects[5].img}
              alt="note-taker-project"
            ></img>
          </a>
        </div>
      </div>
      <div className="text-format project-size">
        <div className="img-project-container">
          <div className="show-desc">
            <a href={projects[3].deployed}>
              <h4 className="desc-text">{projects[3].name}</h4>
              <p></p>
              <p className="desc-text">
                Tech Blog is an application that uses Node.js, MySQL,
                JavaScript, HTML5, and CSS3 to give users a place to share their
                thoughts about tech!
              </p>
            </a>
          </div>
          <a href={projects[3].deployed}>
            <img
              className="img-project border-radius-2 image"
              src={projects[3].img}
              alt="tech-blog-project"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};
