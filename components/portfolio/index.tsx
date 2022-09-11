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
    image:
      '<iframe src="https://www.youtube.com/embed/mkxZxz2BqCs" title="ラピス・リ・アビス　プロモーションムービー" allowfullscreen></iframe>',
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization",
  },
  {
    id: 2,
    image:
      '<iframe src="https://www.youtube.com/embed/mkxZxz2BqCs" title="ラピス・リ・アビス　プロモーションムービー" allowfullscreen></iframe>',
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization",
  },
  {
    id: 3,
    image:
      '<iframe src="https://www.youtube.com/embed/mkxZxz2BqCs" title="ラピス・リ・アビス　プロモーションムービー" allowfullscreen></iframe>',
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization",
  },
  {
    id: 4,
    image:
      '<iframe src="https://www.youtube.com/embed/mkxZxz2BqCs" title="ラピス・リ・アビス　プロモーションムービー" allowfullscreen></iframe>',
    title: "Crypto Currency Dashboard & Financial Visualization",
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
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className={`${s.portfolio__item}`}>
              <span
                className={s.portfolio__item__image}
                dangerouslySetInnerHTML={createMarkup(image)}
              />
              <h3>{title}</h3>
            </article>
          );
        })}
      </div>
      <h5>My Noncomercional Work</h5>
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
      </div>
    </section>
  );
};

export default Portfolio;
