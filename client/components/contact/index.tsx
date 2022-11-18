import React, { FC, useRef } from "react";
import s from "./style/contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
import emailjs from "emailjs-com";

export type ContactProps = {
  title: string;
  subtitle: string;
  inputs: {
    name: string;
    email: string;
    msg: string;
    send: string;
  };
};
const Contact: FC<ContactProps> = ({ title, subtitle, inputs }) => {
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
      <h2>{title}</h2>
      <div className={` container ${s.container} ${s.contact__container}`}>
        <div className={`${s.contact__options}`}>
          <article className={`${s.contact__option}`}>
            <MdOutlineEmail className={`${s.contact__option__icon}`} />
            <h4>Email</h4>
            <h5>magicoctopusmusic@gmail.com</h5>
            <a href="mailto:magicoctopusmusic@gmail.com"> {inputs.send} </a>
          </article>
          <article className={`${s.contact__option}`}>
            <RiMessengerLine className={`${s.contact__option__icon}`} />
            <h4>Messenger</h4>
            <h5>Svyatoslav Petrov</h5>
            <a href="https://m.me/svyatoslav.petrov.composer">
              {" "}
              {inputs.send}{" "}
            </a>
          </article>
          {/* <article className={`${s.contact__option}`}>
            <FaTelegramPlane className={`${s.contact__option__icon}`} />
            <h4>Telegram</h4>
            <h5>+380 63 300 4489</h5>
            <a href="https://t.me/Svyatoslavpetrov"> {inputs.send} </a>
          </article> */}
          <article className={`${s.contact__option}`}>
            <FaDiscord className={`${s.contact__option__icon}`} />
            <h4>Discord</h4>
            <h5>Saint Slav#9780</h5>
          </article>
        </div>
        {/* End Of Contact Options */}
        <form ref={form as any} onSubmit={sendEmail} className={`${s.form}`}>
          <input
            className={`${s.input}`}
            type="text"
            name="name"
            placeholder={inputs.name}
            required
          />
          <input
            className={`${s.input}`}
            type="email"
            name="email"
            placeholder={inputs.email}
            required
          />
          <textarea
            className={`${s.input}`}
            name="message"
            rows={7}
            placeholder={inputs.msg}
            required
          />
          <button type="submit" className="btn btn-primary">
            {inputs.send}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
