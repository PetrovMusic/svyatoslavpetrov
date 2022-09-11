import React, { FC } from "react";
import s from "./style/contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact: FC = () => {
  const form = useRef();
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_hqolve5",
      "template_ehwmq18",
      form?.current as any,
      "Po6Tun4HpyzUbRmf0"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className={` container ${s.container} ${s.contact__container}`}>
        <div className={`${s.contact__options}`}>
          <article className={`${s.contact__option}`}>
            <MdOutlineEmail className={`${s.contact__option__icon}`} />
            <h4>Email</h4>
            <h5>magicoctopusmusic@gmail.com</h5>
            <a href="mailto:magicoctopusmusic@gmail.com">Send a message</a>
          </article>
          <article className={`${s.contact__option}`}>
            <RiMessengerLine className={`${s.contact__option__icon}`} />
            <h4>Messenger</h4>
            <h5>Svyat</h5>
            <a href="https://m.me/amit.halevi.5.com">Send a message</a>
          </article>
          <article className={`${s.contact__option}`}>
            <BsWhatsapp className={`${s.contact__option__icon}`} />
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=0542395715">
              Send a message
            </a>
          </article>
        </div>
        {/* End Of Contact Options */}
        <form ref={form as any} onSubmit={sendEmail} className={`${s.form}`}>
          <input
            className={`${s.input}`}
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            className={`${s.input}`}
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className={`${s.input}`}
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
