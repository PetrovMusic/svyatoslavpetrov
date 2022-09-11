import React, { FC } from "react";
import s from "./style/header.module.css";

const CTA: FC = () => (
  <div className={`${s.cta}`}>
    <button type="button" className="btn" style={{ background: "transparent" }}>
      Download CV
    </button>
    <a href="#contact" className="btn btn-primary">
      Let`s Talk
    </a>
  </div>
);

export default CTA;
