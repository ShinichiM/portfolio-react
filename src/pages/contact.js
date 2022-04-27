import React, { useState } from "react";
import { ContactForm } from "../components/ContactForm";

const Contact = () => {
  // const [ ] = useState();
  return (
    <div className="h-100-vh page-container background-beige">
      {/* <img style={{height: '100%'}} className="img-background" src="/img/contact.jpg" alt="city landscape overhead"></img> */}
      {/* style={{width: '95%'}} */}
      <div className="tag w-100">
        <div style={{ display: "flex" }} className="justify-space-around">
          <div style={{ width: "75%", padding: "0" }}>
            <span
              style={{ fontSize: "200%" }}
              className="justify-center text-format"
            >
              Contact Me
            </span>
            <div
              style={{}}
              className="flex-column background-dark pb-3 align-center"
            >
              <ContactForm />
            </div>
            {/* <ul className="text-format-sm ml-2">
              <li>Email: miyakawashi@gmail.com</li>
              <li>Phone: {"+1 614-578-2539"}</li>
              <li>Study: Physics & Full Stack Development</li>
              <li>Location: Columbus, OH</li>
            </ul> */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
