import React, { useState } from "react";
import { ContactForm } from "../components/ContactForm";

const Contact = () => {
    // const [ ] = useState();
    return (
        <div style={{overflow: 'hidden'}} className="h-100-vh page-container">
            <img style={{height: '100%'}} className="img-background" src="/img/contact.jpg" alt="city landscape overhead"></img>
            <div style={{width: '95%'}} className="tag">         
                <div style={{display: 'flex'}} className='justify-space-around'>
                    <div style={{width: '75%', padding: '0'}} >
                        <span style={{"fontSize": "200%"}} className="justify-center text-format">Contact</span>
                        <div style={{}} className="flex-column background-dark pb-3 align-center"> 
                            <ContactForm />
                        </div> 
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default Contact;