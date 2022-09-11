import React, { FC } from "react";
import s from "./style/header.module.css";
import CTA from "./CTA";
import Image from "next/image";
import ME from "../../public/assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header: FC = () => {
  return (
    <header className={s.header}>
      <div className={`${s.container} ${s.header__container}`}>
        <h5>Hello I`m</h5>
        <h1>Svyatoslav Petrov</h1>
        <h5 className="text-light"> Compositor </h5>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className={s.scroll__down}>
          Scroll Down
        </a>
        <div className={`${s.me}`}>
          <Image src={ME} alt="me" />
        </div>
      </div>
    </header>
  );
};

export default Header;
