import React, { FC } from "react";
import s from "./style/header.module.css";

const CTA: FC = () => (
  <div className={`${s.cta}`}>
    <a
      download
      className="btn"
      href="../../public/assets/Svyatoslav English Resume.pdf"
      style={{ background: "transparent" }}
    >
      Download CV [ENG]
    </a>
    <a
      href="../../public/assets/Svyatoslav_Petrov_japanese_Resume.pdf"
      className="btn btn-primary"
      download
    >
      Download CV [JP]
    </a>
  </div>
);

export default CTA;
