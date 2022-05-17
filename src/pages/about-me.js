import React from "react";

const AboutMe = () => {
  return (
    <div
      style={{ overflowY: "scroll" }}
      className="h-100-vh page-container background-beige border-dark"
    >
      <div className="tag">
        <div className="about-me-img-container">
          <div className="p-2 about-me-content-container">
            {/* background-dark */}
            <div style={{ display: "flex" }} className=" align-center">
              <div className="selfie-container">
                <img
                  style={{ width: "100%", height: "100%" }}
                  className="img-background"
                  src="/img/selfie.jpg"
                  alt="shinichi selfie"
                />
              </div>
              <span
                style={{ fontSize: "200%" }}
                className="ml-3 justify-center text-format "
              >
                Shinichi Miyakawa
              </span>
            </div>
          </div>
          {/* background-dark */}
          <div className="p-2 about-me-content-container ">
            <h1 className="text-format ml-2">About Me</h1>
            <p className="ml-2">
              Junior software engineer leveraging a Computer Systems Validation
              and Applied Physics background to create a more performant and
              accessible user experience on the web. I am a recent graduate of
              The Ohio State University's full-stack web development bootcamp
              where I created responsive web applications utilizing React.js,
              JavaScript, Node.js, Express.js, and several CSS frameworks. I
              work with computer validation and as a result, I excel at making
              sure applications function properly. I use these skills as well as
              my creativity to create sites that are simple and intuitive. I am
              looking to contribute my skills and experience to a team dedicated
              to developing user focused applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
