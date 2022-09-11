import React, { FC } from "react";
import Image from "next/image";
import s from "./style/portfolio.module.css";
import IMG1 from "../../public/assets/portfolio1.jpg";
import IMG2 from "../../public/assets/portfolio2.jpg";
import IMG3 from "../../public/assets/portfolio3.jpg";
import IMG4 from "../../public/assets/portfolio4.jpg";
import IMG5 from "../../public/assets/portfolio5.png";
import IMG6 from "../../public/assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization",
  },
  {
    id: 2,
    image: IMG2,
    title: "Orion UI kit - Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16580766-Orion-Ui-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 3,
    image: IMG3,
    title: "Maintaining tasks and tracking progress",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16955822-Maintaining-tasks-and-UI-kit-tracking-progress",
  },
  {
    id: 4,
    image: IMG4,
    title: "Eclipse - Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18254786-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
    id: 5,
    image: IMG5,
    title: "Eclipse - Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18254797-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
    id: 6,
    image: IMG6,
    title: "Eclipse - Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18202707-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
];

const Portfolio: FC = () => (
  <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className={`container ${s.portfolio__container}`}>
      {data.map(({ id, image, title, github, demo }) => {
        return (
          <article key={id} className={`${s.portfolio__item}`}>
            <div className={s.portfolio__item__image}>
              <Image src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className={s.portfolio__item__cta}>
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        );
      })}
    </div>
  </section>
);

export default Portfolio;
