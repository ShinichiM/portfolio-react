import React from "react";

const Resume = () => {

    return (
        <div style={{overflow: 'hidden'}} className="h-100-vh page-container">
            <img className="img-background" src="/img/resume-page.jpg" alt="city landscape overhead"></img>
            <div style={{width: '100%'}} className="tag-resume">         
                 <div style={{height: '75vh'}} className="w-75  mx-auto project-list">
                    <div style={{'fontSize': '200%'}} className="text-format mb-4">Resume</div>
                    <span className="text-format">Download my <a className="text-dark-bold" href="/img/resume/resume_.pdf" download='resume_.pdf'>resume</a></span>
                    <div className="background-dark">
                        <img className="img-project" src="/img/resume/resume-retake.jpg" alt="shinichi's resume"></img>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Resume;