import React from "react";
import { Form } from "react-router";
import '../assets/css/contact.css';


export default function Contact(props) {
  return(
    <section id="contact-section" className="contact-container" >
      <h2>contact me</h2>
      <p>
        Please feel free to email 
        me and I will get back to 
        you shortly.
      </p>
      <Form method="POST">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" placeholder="Name" />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" placeholder="Email" type="email" required/>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Message" rows={2}/>
        <button type="submit">Send Message</button>
      </Form>
    </section>
  )
}