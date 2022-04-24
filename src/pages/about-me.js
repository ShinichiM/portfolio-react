import React from "react";

const AboutMe = () => {

return (
        <div style={{overflow: 'hidden'}} className="h-100-vh page-container">
            <div className="tag">         
                <div className='about-me-img-container'>
                    <div style={{padding: '0'}} className='about-me-content-container'>
                        <div style={{display: 'flex'}} className="background-dark align-center">
                            <div style={{width: '50%', alignItems: 'center'}}>
                                <img style={{width: '100%', height: '100%', }} className="img-background" src="/img/selfie.jpg" alt="shinichi selfie" />
                            </div>
                            <span style={{"fontSize": "200%"}} className="ml-3 justify-center text-format">Shinichi Miyakawa</span>
                        </div> 
                    </div>
                    <div className=" about-me-content-container background-dark">
                        <h1 className="text-format ml-2">About</h1>
                        <p  className="ml-2">Hey there! I am a recent graduate from The Ohio State University with a focus in Full Stack Development! Check out some of my work in the portfolio section</p>
                        <ul className="text-format-sm ml-2">
                            <li>Email: miyakawashi@gmail.com</li> 
                            <li>Phone: {'+1 614-578-2539'}</li>
                            <li>Study: Physics & Full Stack Development</li>
                            <li>Location: Columbus, OH</li>
                        </ul>
                    </div>
                </div>  
            </div>
            {/* <img className="img-background" src="/img/leafs.jpg" alt="tropic jungle forestry"></img>  */}
        </div>
    );
};

export default AboutMe;

