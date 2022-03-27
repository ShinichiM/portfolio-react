import React from "react";

export const Project = (props) => {
    const  { projects }  = props;
    console.log(projects);
    console.log(projects[0].name)
   return (
    <div className="project-list justify-space-around" style={{display: 'flex', "flexWrap": "wrap"}}>
        <div className="text-format" style={{width: '45%'}}>
            <span>{projects[0].name}</span>
            <div className="img-project-container">
                <img className="img-project" style={{"border-radius": '2%'}}src={projects[0].img} alt='deep-thoughts-project'></img>
            </div>
        </div>
        <div className="text-format" style={{width: '45%'}}>
            <span>{projects[1].name}</span>
            <div className="img-project-container">
                <img className="img-project" style={{"border-radius": '2%'}}src={projects[1].img} alt='obscure-tv-project'></img>
            </div>
        </div>
        <div className="text-format" style={{width: '45%'}}>
            <span>{projects[2].name}</span>
            <div className="img-project-container">
                <img className="img-project" style={{"border-radius": '2%'}}src={projects[2].img} alt='job-hunter-project'></img>
            </div>
        </div>
        <div className="text-format" style={{width: '45%'}}>
            <span>{projects[3].name}</span>
            <div className="img-project-container">
                <img className="img-project" style={{"border-radius": '2%'}}src={projects[3].img} alt='tech-blog-project'></img>
            </div>
        </div>
        <div className="text-format" style={{width: '45%'}}>
            <span>{projects[4].name}</span>
            <div className="img-project-container">
                <img className="img-project" style={{"border-radius": '2%'}}src={projects[4].img} alt='budget-tracker-project'></img>
            </div>
        </div>
        <div className="text-format" style={{width: '45%'}}>
            <span>{projects[5].name}</span>
            <div className="img-project-container">
                <img className="img-project" style={{"border-radius": '2%'}} src={projects[5].img} alt='note-taker-project'></img>
            </div>
        </div> 
    </div>
   );
};