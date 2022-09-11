import React, { FC } from "react";
import s from "./style/header.module.css";

const Header: FC = () => {
  return (
    <header className={s.header}>
      <div className={`${s.container} ${s.header__container}`}>
        <h5>Hello I`m</h5>
        <h1>Svyatoslav Petrov</h1>
        <h5 className="text-light"> Compositor </h5>
        {/* <CTA />
        <HeaderSocials /> */}
        <a href="#contact" className={s.scroll__down}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
