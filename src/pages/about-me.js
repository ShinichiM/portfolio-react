import React from "react";

const AboutMe = () => {

return (
        <div style={{overflow: 'hidden'}} className="h-100-vh page-container">
            <div className="tag">         
                <div style={{display: 'flex'}} className='justify-space-around'>
                    <div style={{width: '45%', padding: '0'}} >
                        <div style={{display: 'flex'}} className="background-dark align-center">
                            <div style={{width: '50%'}}>
                                <img style={{"verticalAlign": "middle"}} className="img-background" src="/img/selfie.jpg" alt="shinichi selfie"></img> 
                            </div>
                            <span style={{"fontSize": "200%"}} className="ml-3 justify-center text-format">Shinichi Miyakawa</span>
                        </div> 
                    </div>
                    <div style={{width: '45%'}} className="background-dark">
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
            <img className="img-background" src="/img/leafs.jpg" alt="tropic jungle forestry"></img> 
        </div>
    );
};

export default AboutMe;
