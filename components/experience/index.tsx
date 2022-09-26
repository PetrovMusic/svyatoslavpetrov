import React, { FC } from "react";
import s from "./style/experience.module.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience: FC = () => (
  <section id="experience">
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>

    <div className={`container ${s.experience__container}`}>
      <div className={`${s.experience__right}`}>
        <h3>My Experience</h3>
        <div className={`${s.experience__content}`}>
          <article className={`${s.experience__details}`}>
            <BsPatchCheckFill className={`${s.experience__details__icon}`} />
            <div>
              <h4>Composing</h4>
              <small className="text-light">
                Writing piece from 0 to Hero: Classical, Electronic, Ethnic,
                Orchestral in any style, modern Orchestra hybrid (with elements
                of electronica), Band Rock music.
              </small>
            </div>
          </article>
          <article className={`${s.experience__details}`}>
            <BsPatchCheckFill className={`${s.experience__details__icon}`} />
            <div>
              <h4>Score making</h4>
              <small className="text-light">
                Making trully comfortable scores for musicians, so they can make
                100% from it.
              </small>
            </div>
          </article>
          <article className={`${s.experience__details}`}>
            <BsPatchCheckFill className={`${s.experience__details__icon}`} />
            <div>
              <h4>Flexible</h4>
              <small className="text-light">
                I am working with a team of life-long musicians, but you get to
                choose how many professionals to hire: one person or whole
                orchestra!
              </small>
            </div>
          </article>
          <article className={`${s.experience__details}`}>
            <BsPatchCheckFill className={`${s.experience__details__icon}`} />
            <div>
              <h4>Mixing & Mastering</h4>
              <small className="text-light">
                Of course i do Mix by my self, and Mastering. So you don`&apos`t
                need to worries about extra fees
              </small>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
