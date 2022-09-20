import React, { FC, useState, useEffect } from "react";
import type { NextPage } from "next";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import {
  About,
  Nav,
  Testimonials,
  Footer,
  Header,
  Experience,
  Portfolio,
  Works,
  Contact,
} from "../components";

const Home: NextPage = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  // Set cursor variant to change color on hover text
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // Variant animation
  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 70,
      y: mousePosition.y - 70,
      backgroundColor: "aqua",
      mixBlendMode: "difference",
    },
  };

  // function for textLeave and textEnter
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  return (
    <>
      {/* <motion.div
        className="cursor"
        variants={variants as any}
        animate={cursorVariant}
      ></motion.div> */}
      <Head>
        <title>Compositor Svyatoslav Petrov</title>
        <meta name="description" content="Svyatoslav Petrov Compositor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
      <Portfolio />
      {/* <Company /> */}
      <Testimonials />
      <Experience />
      <Nav />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
