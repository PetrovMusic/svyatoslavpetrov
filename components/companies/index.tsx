import React, { FC } from "react";
import Image from "next/image";
import s from "./style/companies.module.css";
import Kraken from "../../public/assets/kraken.png";
import Miug from "../../public/assets/miug.png";
import Nix from "../../public/assets/nix.png";
import Wargeiming from "../../public/assets/wargaming-net.png";

const data = [
  {
    logo: Miug,
    altLogo: "Miug",
    link: "https://sound.g-angle.co.jp/",
  },
  {
    logo: Nix,
    altLogo: "NIX",
    link: "https://www.n-ix.com/game-vr-studio/case-study/",
  },
  {
    logo: Kraken,
    link: "https://www.kraken-academy.com/",
    altLogo: "Kraken",
  },
  {
    logo: Wargeiming,
    link: "https://eu.wargaming.net/en",
    altLogo: "Wargeiming",
  },
];

const Companies: FC = () => (
  <section id="companies" className={s.container}>
    <h4 className={s.title}>Companies i worked with:</h4>
    <ul className={s.logogrid}>
      {data.map(({ logo, link, altLogo }) => (
        <li key={link} className={s.logogrid__item}>
          <a href={link} className={s.logogrid__img}>
            <Image src={logo} alt={`${altLogo} logo`} />
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default Companies;
