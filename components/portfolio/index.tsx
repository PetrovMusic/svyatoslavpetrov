import React, { FC, useState, useEffect, createRef } from "react";
import loadscript from "load-script";
import s from "./style/portfolio.module.css";

declare global {
  interface Window {
    SC?: any;
  }
}
const data = [
  {
    id: 1,
    title: "Lapis x Labyrinth",
    image:
      '<iframe src="https://www.youtube.com/embed/mkxZxz2BqCs" title="ラピス・リ・アビス　プロモーションムービー" allowfullscreen></iframe>',
    fullMusic: false,
    company: "Nihon ichi software Japan",
    platforms: "PS4, Ps Vita, Nintendo Switch",
    site: "https://nisamerica.com/games/lapis-labyrinth/",
  },
  {
    id: 2,
    title: "Liar princess and the blind prince",
    image:
      '<iframe src="https://www.youtube.com/embed/h9yPYXYkDxQ"allowfullscreen title="嘘つき姫と盲目王子　朗読ムービー"></iframe>',
    fullMusic: false,
    company: "Nihon ichi software Japan",
    platforms: "PS4, Ps Vita, Nintendo Switch",
    site: "https://nisamerica.com/games/the-liar-princess/",
  },
  {
    id: 3,
    title: "Kraken Academy!!",
    image:
      '<iframe src="https://www.youtube.com/embed/1QxpadGmKd0" allowfullscreen title="Kraken Academy!! Steam Trailer"></iframe>',
    fullMusic: true,
    company: "happy broccoli games",
    platforms: "STEAM, GoG",
    site: "https://www.kraken-academy.com/",
  },
  {
    id: 4,
    title: "わるい王様とりっぱな勇者",
    image:
      '<iframe src="https://www.youtube.com/embed/SsquS78Q2jg" title="『わるい王様とりっぱな勇者』サウンドトラック試聴ムービー" allowfullscreen></iframe>',
    fullMusic: false,
    company: "happy broccoli games",
    platforms: "STEAM, GoG",
    site: "https://www.kraken-academy.com/",
  },
  {
    id: 5,
    title: "Kraken Academy!! (Second Trailer)",
    image:
      '<iframe src="https://www.youtube.com/embed/dQs0QBBEDEU" allowfullscreen></iframe>',
    fullMusic: true,
    company: "happy broccoli games",
    platforms: "STEAM, GoG",
    site: "https://www.kraken-academy.com/",
  },
];

const Portfolio: FC = () => {
  function createMarkup(html: string) {
    return { __html: html };
  }
  // used to communicate between SC widget and React
  const [isPlaying, setIsPlaying] = useState(false);
  const [playlistIndex, setPlaylistIndex] = useState(0);

  // populated once SoundCloud Widget API is loaded and initialized
  const [player, setPlayer] = useState<any>(false);

  // ref for iframe element - https://reactjs.org/docs/refs-and-the-dom.html
  const iframeRef = createRef();

  // initialization - load soundcloud widget API and set SC event listeners

  useEffect(() => {
    // use load-script module to load SC Widget API
    loadscript("https://w.soundcloud.com/player/api.js", () => {
      // initialize player and store reference in state

      const player: any = window?.SC.Widget(iframeRef.current) as any;
      setPlayer(player);

      const { PLAY, PLAY_PROGRESS, PAUSE, FINISH, ERROR } =
        window?.SC.Widget.Events;

      // NOTE: closures created - cannot access react state or props from within and SC callback functions!!

      player?.bind(PLAY, () => {
        // update state to playing
        setIsPlaying(true);

        // check to see if song has changed - if so update state with next index
        player?.getCurrentSoundIndex((playerPlaylistIndex: any) => {
          setPlaylistIndex(playerPlaylistIndex);
        });
      });

      player?.bind(PAUSE, () => {
        // update state if player has paused - must double check isPaused since false positives
        player?.isPaused((playerIsPaused: any) => {
          if (playerIsPaused) setIsPlaying(false);
        });
      });
    });
  }, []);

  // integration - update SC player based on new state (e.g. play button in React section was click)

  // adjust playback in SC player to match isPlaying state
  useEffect(() => {
    if (!player) return; // player loaded async - make sure available

    player?.isPaused((playerIsPaused: any) => {
      if (isPlaying && playerIsPaused) {
        player?.play();
      } else if (!isPlaying && !playerIsPaused) {
        player?.pause();
      }
    });
  }, [isPlaying]);

  // adjust seleted song in SC player playlist if playlistIndex state has changed
  useEffect(() => {
    if (!player) return; // player loaded async - make sure available

    player?.getCurrentSoundIndex((playerPlaylistIndex: any) => {
      if (playerPlaylistIndex !== playlistIndex) player?.skip(playlistIndex);
    });
  }, [playlistIndex]);

  // React section button click event handlers (play/next/previous)
  //  - adjust React component state based on click events

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const changePlaylistIndex = (skipForward = true) => {
    // get list of songs from SC widget
    player?.getSounds((playerSongList: any) => {
      let nextIndex = skipForward ? playlistIndex + 1 : playlistIndex - 1;

      // ensure index is not set to less than 0 or greater than playlist
      if (nextIndex < 0) nextIndex = 0;
      else if (nextIndex >= playerSongList.length)
        nextIndex = playerSongList.length - 1;

      setPlaylistIndex(nextIndex);
    });
  };

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className={`container ${s.portfolio__container}`}>
        {data.map(
          ({ id, image, title, platforms, site, company, fullMusic }) => {
            return (
              <article key={id} className={`${s.portfolio__item}`}>
                <span
                  className={s.portfolio__item__image}
                  dangerouslySetInnerHTML={createMarkup(image)}
                />
                <h2 className={s.title}>{title}</h2>
                <h3 className={s.text}>
                  <span>
                    {fullMusic
                      ? "Music By Svyatoslav Petrov"
                      : "Part of the music by Petrov Svyatoslav"}
                  </span>
                </h3>
                <h3 className={s.text}>
                  Company: <span>{company}</span>
                </h3>
                <h3 className={s.text}>
                  Platforms: <span>{platforms}</span>
                </h3>
                <h3 className={s.text}>
                  Company ​​​​​​​Official Web-site:
                  <a className={s.link} href={site}>
                    {" "}
                    Link{" "}
                  </a>
                </h3>
              </article>
            );
          }
        )}
      </div>
      <div className={`container ${s.iframe}`}>
        <ul>
          <li>World of Tanks blitz</li>
          <li>The Liar Princess and the Blind Prince The Cruel</li>
          <li>King and the Great Hero</li>
          <li>Identity V</li>
          <li>Kraken Academy!!</li>
          <li>Lapis x labyrinth</li>
          <li>TELEPORT BATTLE VR</li>
        </ul>
        <p>
          A lot of works on which I worked and working are under NDA, so for
          more information, don&rsquo;t hesitate to contact me.
        </p>
      </div>
      <div className={`container ${s.iframe}`}>
        <iframe
          ref={iframeRef as any}
          id="sound-cloud-player"
          scrolling="no"
          allow="autoplay"
          src={
            "https://w.soundcloud.com/player/?url=https://soundcloud.com/svyatoslav-petrov"
          }
        />
        <iframe
          ref={iframeRef as any}
          id="sound-cloud-player"
          scrolling="no"
          allow="autoplay"
          src={
            "https://w.soundcloud.com/player/?url=https://soundcloud.com/neversleepboy"
          }
        />
      </div>
    </section>
  );
};

export default Portfolio;
