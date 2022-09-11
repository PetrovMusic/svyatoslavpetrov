import React, { FC } from "react";
import s from "./style/contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact: FC = () => {
  const form = useRef();
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_n0jjqbj",
      "template_y7b8fiq",
      form?.current as any,
      "Ze5P7wPdZUy1vY3Ze"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact-options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>savita985233@gmail.com</h5>
            <a
              href="mailto:savita985233@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>savita kri</h5>
            <a
              href="https://m.me/100037460253793"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form as any} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
