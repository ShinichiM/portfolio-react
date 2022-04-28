import React, { useState } from "react";
import { Redirect } from 'react-router-dom';

export const ContactForm = () => {
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');
   const [name, setName] = useState('');

   const handleMessageChange = (event) => {
      setMessage(event.target.value);
   };

   const handleEmailChange = (event) => {
      setEmail(event.target.value);
   };

   const handleNameChange = (event) => {
      setName(event.target.value);
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log('submitted');
      setMessage('');
      setName('');
      setEmail('');
   }
   return (
        <div style={{width: '95%'}} className="">
           <form style={{}} className="flex-column" onSubmit= {handleSubmit}>
               <label htmlFor="name">Name: </label>
               <input name="name" placeholder="" value={name} onChange={handleNameChange}></input>
               <label htmlFor="email">Email: </label>
               <input name="email" type="email" value={email} onChange={handleEmailChange}></input>
               <label htmlFor="message">Message:</label>
               <textarea name="message" placeholder="Send me a message!" value={message} onChange={handleMessageChange}>
               </textarea>
               <button style={{width: '15%'}} className="mt-3" type='submit'>Submit</button>
           </form>
        </div>
   ) 
};