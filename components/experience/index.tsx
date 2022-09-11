import React, { FC } from "react";
import s from "./style/experience.module.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience: FC = () => (
  <section id="experience">
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>

    <div className={`container ${s.experience__container}`}>
      <div className={`${s.experience__left}`}>
        <h3>My Experience</h3>
        <div className={`${s.experience__content}`}>
          <article className={`${s.experience__details}`}>
            <BsPatchCheckFill className={`${s.experience__details__icon}`} />
            <div>
              <h4>Abelton</h4>
              <small className="text-light"> Intermediate </small>
            </div>
          </article>
          <article className={`${s.experience__details}`}>
            <BsPatchCheckFill className={`${s.experience__details__icon}`} />
            <div>
              <h4>Abelton</h4>
              <small className="text-light"> Intermediate </small>
            </div>
          </article>
          <article className={`${s.experience__details}`}>
            <BsPatchCheckFill className={`${s.experience__details__icon}`} />
            <div>
              <h4>Abelton</h4>
              <small className="text-light"> Experienced </small>{" "}
            </div>
          </article>
          <article className={`${s.experience__details}`}>
            <BsPatchCheckFill className={`${s.experience__details__icon}`} />
            <div>
              <h4>Abelton</h4>
              <small className="text-light"> Intermediate </small>
            </div>
          </article>
          <article className={`${s.experience__details}`}>
            <BsPatchCheckFill className={`${s.experience__details__icon}`} />
            <div>
              <h4>Abelton</h4>
              <small className="text-light"> Experienced </small>{" "}
            </div>
          </article>
          <article className={`${s.experience__details}`}>
            <BsPatchCheckFill className={`${s.experience__details__icon}`} />
            <div>
              <h4>Abelton</h4>
              <small className="text-light"> Experienced </small>{" "}
            </div>
          </article>
        </div>
      </div>
      <div className={`${s.experience__right}`}>
        <h3>My Experience</h3>
        <div className={`${s.experience__content}`}>
          <article className={`${s.experience__details}`}>
            <BsPatchCheckFill className={`${s.experience__details__icon}`} />
            <div>
              <h4>Abelton</h4>
              <small className="text-light"> Experienced </small>{" "}
            </div>
          </article>
          <article className={`${s.experience__details}`}>
            <BsPatchCheckFill className={`${s.experience__details__icon}`} />
            <div>
              <h4>Abelton</h4>
              <small className="text-light"> Experienced </small>
            </div>
          </article>
          <article className={`${s.experience__details}`}>
            <BsPatchCheckFill className={`${s.experience__details__icon}`} />
            <div>
              <h4>Abelton</h4>
              <small className="text-light"> Experienced </small>
            </div>
          </article>
          <article className={`${s.experience__details}`}>
            <BsPatchCheckFill className={`${s.experience__details__icon}`} />
            <div>
              <h4>Abelton</h4>
              <small className="text-light"> Experienced </small>
            </div>
          </article>
          <article className={`${s.experience__details}`}>
            <BsPatchCheckFill className={`${s.experience__details__icon}`} />
            <div>
              <h4>Abelton</h4>
              <small className="text-light"> Intermediate </small>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
