import React, { FC } from "react";
import Image from "next/image";
import s from "./style/about.module.css";
import h from "./style/header.module.css";
import Work from "../../public/assets/work.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const About: FC = () => (
  <section id="about" style={{ marginTop: "3rem" }}>
    <header className={h.header}>
      <div className={`${h.header__container}`}>
        <h5>Hello I`m</h5>
        <h1>Svyatoslav Petrov</h1>
        <h5 className="text-light"> Compositor </h5>
      </div>
    </header>

    <div className={`container ${s.about__container}`}>
      <div>
        <div className={`${s.about__me}`}>
          <div className={`${s.about__me__image}`}>
            <Image src={Work} alt="My work photo" />
          </div>
        </div>
        <HeaderSocials />
      </div>
      <div className={`${s.about__content}`}>
        <div className={`${s.about__cards}`}>
          <article className={`${s.about__card}`}>
            <FaAward className={`${s.about__icon}`} />
            <h5> Experience </h5>
            <small> 11+ Years Working</small>
          </article>
          <article className={`${s.about__card}`}>
            <FiUsers className={`${s.about__icon}`} />
            <h5> Clients </h5>
            <small> 60+ Worldwide </small>
          </article>
          <article className={`${s.about__card}`}>
            <VscFolderLibrary className={`${s.about__icon}`} />
            <h5> Projects </h5>
            <small> 100+ completed </small>
          </article>
        </div>
        <p>
          I was born in Ukraine, and my musical adventures began at the age of 4
          with a violin. I took part in many competitions and received the Grand
          Prix at most of them. At the age of 11, I&apos;ve begun to be
          interested in musical composition, starting with the creation of small
          pieces for piano and violin, as well as electronic music. Now I can
          compose music for a large orchestra, EDM, Rock band and pop music.
          I&apos;ve studied violin and composition at the Benedetto Marcelo
          Conservatory in Venice, but because I was interested in creating music
          for video games, movies, television and animation, I got my way to
          study in Japan. I&apos;ve graduated from Tokyo Visual Arts and have
          got my first well-paid video game music concerts. Right now I am
          continuing my journey with new projects and discoveries.
        </p>
        <CTA />
      </div>
    </div>
  </section>
);

export default About;
