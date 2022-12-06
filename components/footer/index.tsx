import React, { FC } from "react";
import s from "./style/footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

export type FooterProps = {
  name: string;
  exp: string;
  portfolio: string;
  testimonial: string;
  contact: string;
};
const Footer: FC<FooterProps> = ({
  name,
  exp,
  portfolio,
  testimonial,
  contact,
}) => (
  <footer className={s.footer}>
    <a href="#" className={`${s.footer__logo}`}>
      {name}
    </a>
    <ul className={`${s.permalinks}`}>
      <li>
        <a href="#experience">{exp}</a>
      </li>
      <li>
        <a href="#portfolio">{portfolio}</a>
      </li>
      <li>
        <a href="#testimonials">{testimonial}</a>
      </li>
      <li>
        <a href="#contact">{contact}</a>
      </li>
    </ul>

    <div className={`${s.footer__socials}`}>
      <a href="https://facebook.com" title="social_network_link">
        <FaFacebookF />
      </a>
      <a href="https://twitter.com" title="social_network_link">
        <IoLogoTwitter />
      </a>
    </div>

    <div className={`${s.footer__copyright}`}>
      <small>&copy; {name}. All right reserved.</small>
    </div>
  </footer>
);

export default Footer;
