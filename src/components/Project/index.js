import React from "react";

export const Project = (props) => {
  const { projects } = props;
  return (
    <div className="project-list project-container">
      <div className="card">
        <div className="card-item">
          <div>
            <h4 className="font-one-eight-vw">{projects[6].name}</h4>
            <p className="subtext">
              A Seafood Bar and Grill located in Dayton, Ohio known for the best
              seafood in the area!
            </p>
            <h6 className="font-one-five-vw">Stack:</h6>
            <p className="subtext">
              React.js, Express.js, MongoDB, GraphQL, Node.js, CSS3,
              JsonWebTokens, Bootstrap, JavaScript
            </p>
          </div>

          <div>
            <ul className="project-socials">
              <li>
                <a className="" href={projects[6].github}>
                  <img
                    src="/img/img-media/github-dark.svg"
                    alt="GitHub for Sweeney's Seafood"
                  />
                </a>
              </li>
              <li>
                <a className="" href={projects[6].deployed}>
                  <img
                    className="w-100"
                    src="/img/img-media/deploy-img.svg"
                    alt="Link to production"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-img">
          <img
            src={projects[6].img}
            className="img-project"
            alt="sweeney's bar and grill"
          />
        </div>
      </div>
      <div className="card">
        <div className="card-item">
          <div>
            <h4 className="font-one-eight-vw">{projects[3].name}</h4>
            <p className="subtext">
              An application that utilizes the Google book search API to allow
              users to search for their favorite books and save them for future
              reference.
            </p>
            <h6 className="font-one-five-vw">Stack:</h6>
            <p className="subtext">
              MongoDB, Express.js, React.js, Node.js, GraphQL, Apollo Server,
              Apollo Client, JsonWebTokens, LocalStorage.
            </p>
          </div>
          <div>
            <ul className="project-socials">
              <li>
                <a className="" href={projects[3].github}>
                  <img
                    src="/img/img-media/github-dark.svg"
                    alt="GitHub for Sweeney's Seafood"
                  />
                </a>
              </li>
              <li>
                <a className="" href={projects[3].deployed}>
                  <img
                    className="w-100"
                    src="/img/img-media/deploy-img.svg"
                    alt="Link to production"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-img">
          <img
            src={projects[3].img}
            className="img-project"
            alt="sweeney's bar and grill"
          />
        </div>
      </div>
      <div className="card">
        <div className="card-item">
          <div>
            <h4 className="font-one-eight-vw">{projects[2].name}</h4>
            <p className="subtext">
              A job search engine that utilizes the USA Jobs API! Customized for
              careers in the Government sector as well as positions open to the
              general public!
            </p>
            <h6 className="font-one-five-vw">Stack:</h6>
            <p className="subtext">
              JavaScript, Node.js, Express.js, HTML5, CSS3, AJAX API calls,
              Tailwind CSS.
            </p>
          </div>
          <div>
            <ul className="project-socials">
              <li>
                <a className="" href={projects[2].github}>
                  <img
                    src="/img/img-media/github-dark.svg"
                    alt="GitHub for Sweeney's Seafood"
                  />
                </a>
              </li>
              <li>
                <a className="" href={projects[2].deployed}>
                  <img
                    className="w-100"
                    src="/img/img-media/deploy-img.svg"
                    alt="Link to production"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-img">
          <img
            src={projects[2].img}
            className="img-project"
            alt="sweeney's bar and grill"
          />
        </div>
      </div>
      <div className="card">
        <div className="card-item">
          <div>
            <h4 className="font-one-eight-vw">{projects[1].name}</h4>
            <p className="subtext">
              An application that allows users to add, comment, and store their
              unique TVs!
            </p>
            <h6 className="font-one-five-vw">Stack:</h6>
            <p className="subtext">
              MySQL, Express.js, Node.js, JavaScript, Handlebars.js, Sequelize,
              Session Storage, AJAX API calls.
            </p>
          </div>
          <div>
            <ul className="project-socials">
              <li>
                <a className="" href={projects[1].github}>
                  <img
                    src="/img/img-media/github-dark.svg"
                    alt="GitHub for Sweeney's Seafood"
                  />
                </a>
              </li>
              <li>
                <a className="" href={projects[1].deployed}>
                  <img
                    className="w-100"
                    src="/img/img-media/deploy-img.svg"
                    alt="Link to production"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-img">
          <img
            src={projects[1].img}
            className="img-project"
            alt="sweeney's bar and grill"
          />
        </div>
      </div>
      <div className="card">
        <div className="card-item">
          <div>
            <h4 className="font-one-eight-vw">{projects[0].name}</h4>
            <p className="subtext">
              A social media application that allows users to share their
              thoughts and opinions on anything!
            </p>
            <h6 className="font-one-five-vw">Stack:</h6>
            <p className="subtext">
              MongoDB, Express.js, React.js, GraphQL, Apollo Server, Apollo
              Client, JsonWebTokens, Mongoose, JavaScript.
            </p>
          </div>
          <div>
            <ul className="project-socials">
              <li>
                <a className="" href={projects[0].github}>
                  <img
                    src="/img/img-media/github-dark.svg"
                    alt="GitHub for Sweeney's Seafood"
                  />
                </a>
              </li>
              <li>
                <a className="" href={projects[0].deployed}>
                  <img
                    className="w-100"
                    src="/img/img-media/deploy-img.svg"
                    alt="Link to production"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-img">
          <img
            src={projects[0].img}
            className="img-project"
            alt="sweeney's bar and grill"
          />
        </div>
      </div>
      <div className="card">
        <div className="card-item">
          <div>
            <h4 className="font-one-eight-vw">{projects[4].name}</h4>
            <p className="subtext">
              A stand-alone application that gives users a one stop shop for
              personalized budgeting inside or outside of the comforts of their
              home.
            </p>
            <h6 className="font-one-five-vw">Stack:</h6>
            <p className="subtext">
              MongoDB, Express.js, Node.js, HTML5, CSS3, JavaScript,
              Manifest.json, Service Workers, LocalStorage.
            </p>
          </div>
          <div>
            <ul className="project-socials">
              <li>
                <a className="" href={projects[4].github}>
                  <img
                    src="/img/img-media/github-dark.svg"
                    alt="GitHub for Sweeney's Seafood"
                  />
                </a>
              </li>
              <li>
                <a className="" href={projects[4].deployed}>
                  <img
                    className="w-100"
                    src="/img/img-media/deploy-img.svg"
                    alt="Link to production"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-img">
          <img
            src={projects[4].img}
            className="img-project"
            alt="sweeney's bar and grill"
          />
        </div>
      </div>
      <div className="card">
        <div className="card-item">
          <div>
            <h4 className="font-one-eight-vw">{projects[5].name}</h4>
            <p className="subtext">
              An application that allows users to store notes.
            </p>
            <h6 className="font-one-five-vw">Stack:</h6>
            <p className="subtext">
              Node.js, JavaScript, HTML5, CSS3, AJAX API calls.
            </p>
          </div>
          <div>
            <ul className="project-socials">
              <li>
                <a className="" href={projects[5].github}>
                  <img
                    src="/img/img-media/github-dark.svg"
                    alt="GitHub for Sweeney's Seafood"
                  />
                </a>
              </li>
              <li>
                <a className="" href={projects[5].deployed}>
                  <img
                    className="w-100"
                    src="/img/img-media/deploy-img.svg"
                    alt="Link to production"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-img">
          <img
            src={projects[5].img}
            className="img-project"
            alt="sweeney's bar and grill"
          />
        </div>
      </div>
    </div>
  );
};
