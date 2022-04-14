import React from "react";

export const Project = (props) => {
  const { projects } = props;
  console.log(projects);
  console.log(projects[0].name);

  const displayLink = (e) => {};
  return (
    <div
      className="project-list justify-space-around"
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      <div className="text-format" style={{ width: "45%" }}>
        <span className="background-dark px-1">
          {projects[0].name} : <a href={projects[0].github}> Github </a> :{" "}
          <a href={projects[2].deployed}>Deployed</a>
        </span>
        <div className="img-project-container">
          <img
            className="img-project"
            style={{ borderRadius: "2%" }}
            src={projects[0].img}
            alt="deep-thoughts-project"
          ></img>
        </div>
      </div>
      <div className="text-format" style={{ width: "45%" }}>
        <span className="background-dark px-1">
          {projects[1].name} : <a href={projects[1].github}> Github </a> :{" "}
          <a href={projects[1].deployed}>Deployed</a>
        </span>
        <div className="img-project-container">
          <img
            className="img-project"
            style={{ borderRadius: "2%" }}
            src={projects[1].img}
            alt="obscure-tv-project"
          ></img>
        </div>
      </div>
      <div className="text-format" style={{ width: "45%" }}>
        <span className="background-dark px-1">
          {projects[2].name} : <a href={projects[2].github}> Github </a> :{" "}
          <a href={projects[2].deployed}>Deployed</a>
        </span>
        <div className="img-project-container">
          <img
            className="img-project"
            style={{ borderRadius: "2%" }}
            src={projects[2].img}
            alt="job-hunter-project"
            onMouseEnter={displayLink}
          ></img>
        </div>
      </div>
      <div className="text-format" style={{ width: "45%" }}>
        <span className="background-dark px-1">
          {projects[3].name} : <a href={projects[3].github}> Github </a> :{" "}
          <a href={projects[3].deployed}>Deployed</a>
        </span>
        <div className="img-project-container">
          <img
            className="img-project"
            style={{ borderRadius: "2%" }}
            src={projects[3].img}
            alt="tech-blog-project"
          ></img>
        </div>
      </div>
      <div className="text-format" style={{ width: "45%" }}>
        <span className="background-dark px-1">
          {projects[4].name} : <a href={projects[4].github}> Github </a> :{" "}
          <a href={projects[4].deployed}>Deployed</a>
        </span>
        <div className="img-project-container">
          <img
            className="img-project"
            style={{ borderRadius: "2%" }}
            src={projects[4].img}
            alt="budget-tracker-project"
          ></img>
        </div>
      </div>
      <div className="text-format" style={{ width: "45%" }}>
        <span className="background-dark px-1">
          {projects[5].name} : <a href={projects[5].github}> Github </a> :{" "}
          <a href={projects[5].deployed}>Deployed</a>
        </span>
        <div className="img-project-container">
          <img
            className="img-project"
            style={{ borderRadius: "2%" }}
            src={projects[5].img}
            alt="note-taker-project"
          ></img>
        </div>
      </div>
      <div className="text-format" style={{ width: "45%" }}>
        <span className="background-dark px-1">
          {projects[6].name} : <a href={projects[6].github}> Github </a> :{" "}
          <a href={projects[6].deployed}>Deployed</a>
        </span>
        <div className="img-project-container">
          <img
            className="img-project"
            style={{ borderRadius: "2%" }}
            src={projects[6].img}
            alt="note-taker-project"
          ></img>
        </div>
      </div>
    </div>
  );
};
