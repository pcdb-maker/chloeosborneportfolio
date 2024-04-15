import "./contact.scss";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'

export default function Contact() {
  
  


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ydpnipo', 'template_j5rw93p', form.current, {
        publicKey: 'HQQ8fN7WdS6UlUzHt',
      })
      .then(
        () => {
          alert('Message succesfuly sent! Thank you for contacting me. I will endevour to return your message as soon as possible. :)');
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };


  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="\assests\shake.svg" alt="" />

       
      </div>
      <div className="right">
        <h1>Contact.</h1>

        <form ref={form} onSubmit={sendEmail}>
          
      <label>Name</label>
      <input type="text" placeholder="Name..." name="user_name" required />
      <label>Email</label>
      <input type="email" placeholder="Email..." name="user_email" required/>
      <label>Message</label>
      <textarea name="message" placeholder="Message..." required />
      <button name="message" placeholder="Message..." required />
      
      <button input type="submit" value="Send" placeholder="Send" />
      <input type="submit" value="Send" />
    </form>

    <div className="socialIcon1">
    <SocialIcon aria-label="my video channel" url="https://vimeo.com/535511325" target="_blank" rel="noreferrer"/>
    <SocialIcon aria-label="my video channel" url="https://github.com/pcdb-maker" target="_blank" rel="noreferrer"/>
    <SocialIcon aria-label="my video channel" url="https://github.com/pcdb-maker" target="_blank" rel="noreferrer"/>

</div>

</div>

</div>

    

  );
}