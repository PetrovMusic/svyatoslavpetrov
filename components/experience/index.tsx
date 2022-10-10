import React, { FC } from "react";
import s from "./style/experience.module.css";
import { BsPatchCheckFill } from "react-icons/bs";

export type ExperienceProps = {
  title: string;
  composing: string;
  composing__desc: string;
  score: string;
  score__desc: string;
  flexible: string;
  flexible__desc: string;
  mixing: string;
  mixing__desc: string;
};

const Experience: FC<ExperienceProps> = ({
  title,
  composing,
  composing__desc,
  score,
  score__desc,
  flexible,
  flexible__desc,
  mixing,
  mixing__desc,
}) => (
  <section id="experience">
    <div className={`container ${s.experience__container}`}>
      <div className={`${s.experience__right}`}>
        <h3>{title}</h3>
        <div className={`${s.experience__content}`}>
          <article className={`${s.experience__details}`}>
            <BsPatchCheckFill className={`${s.experience__details__icon}`} />
            <div>
              <h4>{composing}</h4>
              <small className="text-light">{composing__desc}</small>
            </div>
          </article>
          <article className={`${s.experience__details}`}>
            <BsPatchCheckFill className={`${s.experience__details__icon}`} />
            <div>
              <h4>{score}</h4>
              <small className="text-light">{score__desc}</small>
            </div>
          </article>
          <article className={`${s.experience__details}`}>
            <BsPatchCheckFill className={`${s.experience__details__icon}`} />
            <div>
              <h4>{flexible}</h4>
              <small className="text-light">{flexible__desc}</small>
            </div>
          </article>
          <article className={`${s.experience__details}`}>
            <BsPatchCheckFill className={`${s.experience__details__icon}`} />
            <div>
              <h4>{mixing}</h4>
              <small className="text-light">{mixing__desc}</small>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
