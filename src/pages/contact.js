import React, { useState } from "react";
import { ContactForm } from "../components/ContactForm";

const Contact = () => {
  // const [ ] = useState();
  return (
    <div className="h-100-vh page-container background-beige pr-3 pl-3">
      <span style={{ fontSize: "200%" }} className="justify-center text-format">
        Contact Me
      </span>
      <div className="contact-container mb-5">
        <div className="contact-item">
          <a className="mail-container" href="mailto:miyakawashi@gmail.com">
            <img src="/img/img-media/mail.svg" alt="email shinichi" />
          </a>
          miyakawashi@gmail.com
        </div>
        <div className="contact-item">
          <a className="mail-container" href="/img/resume/resume_SM.pdf">
            <img src="/img/img-media/paper.svg" alt="shinichi's resume" />
          </a>
          Resume
        </div>
        <div className="contact-item">
          <a className="mail-container" href="tel:+16145782539">
            <img src="/img/img-media/phone.svg" alt="shinichi's phone number" />
          </a>
          (614)578-2539
        </div>
      </div>
      <div className="socials">
        <div className="socials-item">
          <a href="https://github.com/ShinichiM">
            <img src="/img/img-media/github-dark.svg" alt="shinichi's github" />
          </a>
        </div>
        <div className="socials-item">
          <a href="https://www.linkedin.com/in/shinichi-miyakawa/">
            <img
              src="/img/img-media/linkedin-dark.svg"
              alt="shinichi's linkedin"
            />
          </a>
        </div>
        <div className="socials-item">
          <a className="" href="https://twitter.com/itsShinicho">
            <img
              src="/img/img-media/twitter-dark.svg"
              alt="shinichi's twitter"
            />
          </a>
        </div>
      </div>
      {/* <div className="tag w-100">
style={{ display: "flex" }} className="justify-space-around"
        <div >
          <div className="w-100 h-100">
            <span
              style={{ fontSize: "200%" }}
              className="justify-center text-format"
            >
              Contact Me
            </span>
            <div
              style={{}}
              className="flex-column space-around pb-3 align-center"
            >
              <ContactForm />
            </div>
            <ul className="text-format-sm ml-2">
              <li>Email: miyakawashi@gmail.com</li>
              <li>Phone: {"+1 614-578-2539"}</li>
              <li>Study: Physics & Full Stack Development</li>
              <li>Location: Columbus, OH</li>
            </ul>
            <div className="contact-container">
              <div>
                <a
                  className="mail-container"
                  href="mailto:miyakawashi@gmail.com"
                >
                  <img src="/img/img-media/mail.svg" alt="email shinichi" />
                </a>
                miyakawashi@gmail.com
              </div>
              <div>
                <a className="mail-container" href="/img/resume/resume_.pdf">
                  <img src="/img/img-media/paper.svg" alt="shinichi's resume" />
                </a>
                Resume
              </div>
              <div>
                <a className="mail-container" href="tel:+16145782539">
                  <img
                    src="/img/img-media/phone.svg"
                    alt="shinichi's phone number"
                  />
                </a>
                (614)578-2539
              </div>
            </div>
            <div className="odd-row">
              <div>
                <a
                  className="mail-container"
                  href="mailto:miyakawashi@gmail.com"
                >
                  <img
                    src="/img/img-media/github-dark.svg"
                    alt="shinichi's github"
                  />
                </a>
                GitHub
              </div>
              <div>
                <a
                  className="mail-container"
                  href="mailto:miyakawashi@gmail.com"
                >
                  <img
                    src="/img/img-media/linkedin-dark.svg"
                    alt="shinichi's linkedin"
                  />
                </a>
                LinkedIn
              </div>
              <div>
                <a
                  className="mail-container"
                  href="mailto:miyakawashi@gmail.com"
                >
                  <img
                    src="/img/img-media/twitter-dark.svg"
                    alt="shinichi's twitter"
                  />
                </a>
                Twitter
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
