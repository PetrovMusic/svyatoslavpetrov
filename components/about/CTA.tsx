import React, { FC } from "react";
import s from "./style/header.module.css";

const CTA: FC = () => (
  <div className={`${s.cta}`}>
    <a
      download
      className="btn"
      href="../../public/assets/Svyatoslav_Petrov_-_Composer_for_media_.pdf"
      style={{ background: "transparent" }}
    >
      Download CV
    </a>
    <a href="#contact" className="btn btn-primary">
      Let`s Talk
    </a>
  </div>
);

export default CTA;
