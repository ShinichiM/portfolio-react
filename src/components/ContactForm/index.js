import React from "react";

export const ContactForm = () => {
   return (
        <div style={{width: '95%'}} className="background-dark">
           <form style={{}} className="flex-column">
               <label htmlFor="name">Name: </label>
               <input name="name" placeholder=""></input>
               <label htmlFor="email">Email: </label>
               <input name="email" placeholder=""></input>
               <label htmlFor="message">Message:</label>
               <textarea name="message" placeholder="Send me a message!">
               </textarea>
               <button style={{width: '15%'}} className="mt-3" type='button'>Submit</button>
           </form>
        </div>
   ) 
};