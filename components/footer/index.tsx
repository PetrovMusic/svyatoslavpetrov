import React, { FC } from "react";
import s from "./style/footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

const Footer: FC = () => (
  <footer className={s.footer}>
    <a href="#" className={`${s.footer__logo}`}>
      Svyatoslav Petrov
    </a>
    <ul className={`${s.permalinks}`}>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#protfolio">Portfolio</a>
      </li>
      <li>
        <a href="#testimonials">Testimonials</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
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
      <small>&copy; Svyatoslav Petrov. All right reserved.</small>
    </div>
  </footer>
);

export default Footer;

{
  /* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */
}
