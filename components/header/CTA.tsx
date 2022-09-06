import React, { FC } from "react";
import s from "./style/header.module.css";

const CTA: FC = () => (
  <div className={`${s.cta}`}>
    <a href="" download className="btn">
      Download CV
    </a>
    <a href="#contact" className="btn btn-primary">
      Let`s Talk
    </a>
  </div>
);

export default CTA;
