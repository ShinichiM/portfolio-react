import React from "react";

const Resume = () => {
  return (
    <div className="project-list page-container background-beige">
      <h1 className="text-format w-fit-content mt-0 text-italic px-2">
        Skills
      </h1>
      {/* <img className="img-background" src="/img/resume-page.jpg" alt="city landscape overhead"></img> */}
      <div className="w-100 h-100">
        <div className="skills-container mb-4">
          <div className="odd-row">
            <div className="skill">
              <img
                className="skill-img"
                src="/img/tech-stack/git.svg"
                alt="GitHub"
              />
              <span className="skill-text">Git</span>
            </div>
            <div className="skill">
              <img
                className="skill-img"
                src="/img/tech-stack/javascript.svg"
                alt="JavaScript.js"
              />
              <span className="skill-text">JavaScript</span>
            </div>
            <div className="skill">
              <img
                className="skill-img"
                src="/img/tech-stack/react.svg"
                alt="React.js"
              />
              <span className="skill-text">React.js</span>
            </div>
            <div className="skill">
              <img
                className="skill-img"
                src="/img/tech-stack/node.svg"
                alt="Node.js"
              />
              <span className="skill-text">Node.js</span>
            </div>
            <div className="skill">
              <img
                className="skill-img"
                src="/img/tech-stack/mysql.svg"
                alt="MySQL"
              />
              <span className="skill-text">MySQL</span>
            </div>
          </div>
          <div className="even-row">
            <div
              className="skill"
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <img
                className="skill-img"
                src="/img/tech-stack/mongodb.svg"
                alt="MongoDB"
              />
            </div>
            <div className="skill">
              <img
                className="skill-img"
                src="/img/tech-stack/html5.svg"
                alt="HTML5"
              />
              <span className="skill-text">HTML5</span>
            </div>
            <div className="skill">
              <img
                className="skill-img"
                src="/img/tech-stack/css3.svg"
                alt="CSS3"
              />
              <span className="skill-text">CSS3</span>
            </div>

            <div className="skill">
              <img
                className="skill-img"
                src="/img/tech-stack/graphql.svg"
                alt="GraphQL"
              />
              <span className="skill-text">GraphQL</span>
            </div>
          </div>
          <div className="odd-row">
            <div className="skill">
              <img
                className="skill-img"
                src="/img/tech-stack/bootstrap.svg"
                alt="Bootstrap CSS"
              />
              <span className="skill-text">Bootstrap</span>
            </div>
            <div className="skill">
              <img
                className="skill-img"
                src="/img/tech-stack/jquery.svg"
                alt="jQuery"
              />
              <span className="skill-text">jQuery</span>
            </div>
            <div
              className="skill"
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <img
                className="skill-img"
                src="/img/tech-stack/apollo.svg"
                alt="Apollo Server"
              />
            </div>
          </div>
          <div className="even-row">
            <div
              className="skill"
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <span className="skill-text">Express</span>
            </div>

            <div
              className="skill"
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <span className="skill-text">WebPack</span>
            </div>
            <div
              className="skill"
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <span className="skill-text">Handlebars.js</span>
            </div>
            <div
              className="skill"
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <span className="skill-text">React Router</span>
            </div>
            <div
              className="skill"
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <span className="skill-text">Redux</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
