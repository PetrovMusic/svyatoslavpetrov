import React, { FC } from "react";
import s from "./style/header.module.css";
import { BsTwitter, BsSpotify, BsFacebook } from "react-icons/bs";
import { GrSoundcloud } from "react-icons/gr";

const HeaderSocials: FC = () => (
  <div className={`${s.header__socials}`}>
    <a
      title="sound cloud"
      href="https://soundcloud.com/svyatoslav-petrov"
      target="_blank"
      rel="noreferrer noopener"
    >
      <GrSoundcloud />
    </a>
    <a
      title="twitter"
      href="https://twitter.com/PetrovSvyatosl3"
      target="_blank"
      rel="noreferrer noopener"
    >
      <BsTwitter />
    </a>
    <a
      title="spotify"
      href="https://open.spotify.com/artist/7nYRGtrzsuniyQWeaYbCWi"
      target="_blank"
      rel="noreferrer noopener"
    >
      <BsSpotify />
    </a>
    <a
      title="facebook"
      href="https://www.facebook.com/svyatoslav.petrov.composer"
      target="_blank"
      rel="noreferrer noopener"
    >
      <BsFacebook />
    </a>
  </div>
);

export default HeaderSocials;
