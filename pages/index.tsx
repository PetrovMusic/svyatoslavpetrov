import React, { FC, useState, useEffect } from "react";
import type { NextPage } from "next";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  About,
  Nav,
  Testimonials,
  Footer,
  Header,
  Experience,
  Portfolio,
  Works,
  Companies,
  Contact,
} from "../components";
import { useTranslation } from "react-i18next";

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["default"])),
    },
  };
}
const Home: NextPage = (props) => {
  const { t } = useTranslation();

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
      <Head>
        <title>Compositor Svyatoslav Petrov</title>
        <meta name="description" content="Svyatoslav Petrov Compositor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <motion.div
        className="cursor"
        variants={variants as any}
        animate={cursorVariant}
      /> */}

      <About
        greating={t("default:hello")}
        name={t("default:name")}
        position={t("default:compositor")}
        exp={{
          name: t("default:experience"),
          assets: `${t("default:years")} ${t("default:working")}`,
        }}
        clients={{
          name: t("default:сlients"),
          assets: `60+ ${t("default:worldwide")}`,
        }}
        projects={{
          name: t("default:projects"),
          assets: `100+ ${t("default:completed")}`,
        }}
        desc={t("default:about_desc")}
      />
      <Portfolio
        title={t("default:recent_work")}
        subtitle={t("default:portfolio")}
        workOn={t("default:work_on")}
        workDescription={t("default:work_description")}
      />
      <Testimonials
        title={t("default:review")}
        subtitle={t("default:testimonials")}
      />
      <Companies />
      <Experience />
      <Nav />
      <Contact
        title={t("default:review")}
        subtitle={t("default:review")}
        inputs={{
          name: " string",
          email: " string",
          msg: " string",
          send: " string",
        }}
      />
      <Footer
        name={t("default:name")}
        exp={t("default:experience")}
        portfolio={t("default:portfolio")}
        testimonial={t("default:testimonials")}
        contact={t("default:contact")}
      />
    </>
  );
};

export default Home;
