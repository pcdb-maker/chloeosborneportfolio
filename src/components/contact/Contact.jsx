import "./contact.scss";
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [message, setMessage] = useState(false);


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ydpnipo', 'template_j5rw93p', form.current, {
        publicKey: 'HQQ8fN7WdS6UlUzHt',
      })
      .then(
        () => {
          alert('Message sent');
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
        <h2>Contact.</h2>

        <form ref={form} onSubmit={sendEmail}>
          
      <label>Name</label>
      <input type="text" placeholder="Name..." name="user_name" required />
      <label>Email</label>
      <input type="email" placeholder="Email..." name="user_email" required/>
      <label>Message</label>
      <textarea name="message" placeholder="Message..." required />
      <input type="submit" value="Send" />
    </form>

      </div>
    </div>
  );
}