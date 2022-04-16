import React, { useState } from "react";

export const Project = (props) => {
  const { projects } = props;
  const displayLink = (e) => {};

  return (
    <div className="project-list project-container">
      <div className="text-format project-size">
        {/* <span className="background-dark px-1">
          {projects[0].name} : <a href={projects[0].github}> Github </a>
        </span> */}
        <div className="img-project-container">
          <div style={{ zIndex: 90001 }} className="show-desc">
            <a href={projects[0].deployed}>
              <h4 className="desc-text">Deep Thoughts</h4>
              <p></p>
              <p className="desc-text">
                Deep Thoughts is an app that uses Node.js, GraphQL, MongoDB, and
                React.js to create an interactive website for people to share
                their thoughts and opinions.
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
        {/* <span className="background-dark px-1">
          <a href={projects[1].deployed}>Deployed</a>
        </span> */}
        <div className="img-project-container">
          <div style={{ zIndex: 90001 }} className="show-desc">
            <a href={projects[1].deployed}>
              <h4 className="desc-text">TV4U</h4>
              <p></p>
              <p>
                Deep Thoughts is an app that uses Node.js, GraphQL, MongoDB, and
                React.js to create an interactive website for people to share
                their thoughts and opinions.
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
        {/* <span className="background-dark px-1">
          {projects[2].name} : <a href={projects[2].github}> Github </a> :{" "}
          <a href={projects[2].deployed}>Deployed</a>
        </span> */}
        <div className="img-project-container">
             <div style={{ zIndex: 90001 }} className="show-desc">
            <a href={projects[2].deployed}>
              <h4 className="desc-text">Job Hunter</h4>
              <p></p>
              <p>
                Deep Thoughts is an app that uses Node.js, GraphQL, MongoDB, and
                React.js to create an interactive website for people to share
                their thoughts and opinions.
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
        <span className="background-dark px-1">
          {projects[3].name} : <a href={projects[3].github}> Github </a> :{" "}
          <a href={projects[3].deployed}>Deployed</a>
        </span>
        <div className="img-project-container">
          <img
            className="img-project border-radius-2"
            src={projects[3].img}
            alt="tech-blog-project"
          ></img>
        </div>
      </div>
      <div className="text-format project-size">
        <span className="background-dark px-1">
          {projects[4].name} : <a href={projects[4].github}> Github </a> :{" "}
          <a href={projects[4].deployed}>Deployed</a>
        </span>
        <div className="img-project-container">
          <img
            className="img-project border-radius-2"
            src={projects[4].img}
            alt="budget-tracker-project"
          ></img>
        </div>
      </div>
      <div className="text-format project-size">
        <span className="background-dark px-1">
          {projects[5].name} : <a href={projects[5].github}> Github </a> :{" "}
          <a href={projects[5].deployed}>Deployed</a>
        </span>
        <div className="img-project-container">
          <img
            className="img-project border-radius-2"
            src={projects[5].img}
            alt="note-taker-project"
          ></img>
        </div>
      </div>
    </div>
  );
};
