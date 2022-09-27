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

export type AboutProps = {
  greating: string;
  name: string;
  position: string;
  exp: {
    name: string;
    assets: string;
  };
  clients: {
    name: string;
    assets: string;
  };
  projects: {
    name: string;
    assets: string;
  };
  desc: string;
};
const About: FC<AboutProps> = ({
  greating,
  name,
  position,
  exp,
  clients,
  projects,
  desc,
}) => (
  <section id="about" style={{ marginTop: "3rem" }}>
    <header className={h.header}>
      <div className={`${h.header__container}`}>
        <h5>{greating}</h5>
        <h1>{name}</h1>
        <h5 className="text-light"> {position} </h5>
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
            <h5> {exp.name}</h5>
            <small> {exp.assets}</small>
          </article>
          <article className={`${s.about__card}`}>
            <FiUsers className={`${s.about__icon}`} />
            <h5> {clients.name}</h5>
            <small> {clients.assets} </small>
          </article>
          <article className={`${s.about__card}`}>
            <VscFolderLibrary className={`${s.about__icon}`} />
            <h5> {projects.name} </h5>
            <small> {projects.assets}</small>
          </article>
        </div>
        <p>{desc}</p>
        <CTA />
      </div>
    </div>
  </section>
);

export default About;
