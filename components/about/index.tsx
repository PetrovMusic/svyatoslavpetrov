import React, { FC } from "react";
import Image from "next/image";
import s from "./style/about.module.css";
import Work from "../../public/assets/work.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About: FC = () => (
  <section id="about">
    <h5> Get To Know</h5>
    <h2> About Me</h2>

    <div className={`container ${s.about__container}`}>
      <div className={`${s.about__me}`}>
        <div className={`${s.about__me__image}`}>
          <Image src={Work} alt="My work photo" />
        </div>
      </div>

      <div className={`${s.about__content}`}>
        <div className={`${s.about__cards}`}>
          <article className={`${s.about__card}`}>
            <FaAward className={`${s.about__icon}`} />
            <h5> Experience </h5>
            <small> 6+ Years Working</small>
          </article>
          <article className={`${s.about__card}`}>
            <FiUsers className={`${s.about__icon}`} />
            <h5> Clients </h5>
            <small> 300 + Worldwide </small>
          </article>
          <article className={`${s.about__card}`}>
            <VscFolderLibrary className={`${s.about__icon}`} />
            <h5> Projects </h5>
            <small> 400+ completed </small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
          doloremque magni earum ex similique placeat iste, amet alias
          repudiandae beatae totam? Esse quisquam rerum placeat aut doloribus,
          deserunt sint unde?
        </p>
        <a href="#contact" className="btn btn-primary">
          Let`s Talk
        </a>
      </div>
    </div>
  </section>
);

export default About;
