import React, { FC, useState } from "react";
import s from "./style/nav.module.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav: FC = () => {
  const [activeElement, setActiveElement] = useState<string>("#");
  return (
    //ToDo code quality in feature replace it by loop
    <nav className={s.nav}>
      <a
        title="home"
        href="#"
        onClick={() => setActiveElement("#")}
        className={activeElement === "#" ? s.active : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        title="experience"
        href="#experience"
        onClick={() => setActiveElement("#experience")}
        className={activeElement === "#experience" ? s.active : ""}
      >
        <BiBook />
      </a>
      <a
        title="services"
        href="#services"
        onClick={() => setActiveElement("#services")}
        className={activeElement === "#services" ? s.active : ""}
      >
        <RiServiceLine />
      </a>
      <a
        title="contact"
        href="#contact"
        onClick={() => setActiveElement("#contact")}
        className={activeElement === "#contact" ? s.active : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};
export default Nav;
