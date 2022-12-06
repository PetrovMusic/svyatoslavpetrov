import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  About,
  Nav,
  Testimonials,
  Footer,
  Experience,
  Portfolio,
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
  return (
    <>
      <Head>
        <title>Compositor Svyatoslav Petrov</title>
        <meta name="description" content="Svyatoslav Petrov Compositor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      <Companies title={t("default:company_on")} />
      <Experience
        title={t("default:my_experience")}
        composing={t("default:my_experience_composing")}
        composing__desc={t("default:my_experience_composing_desc")}
        score={t("default:my_experience_score")}
        score__desc={t("default:my_experience_score_desc")}
        flexible={t("default:my_experience_flexible")}
        flexible__desc={t("default:my_experience_flexible_desc")}
        mixing={t("default:my_experience_mastering")}
        mixing__desc={t("default:my_experience_mastering_desc")}
      />
      <Nav />
      <Contact
        title={t("default:review")}
        subtitle={t("default:review")}
        inputs={{
          name: t("default:full_name"),
          email: t("default:email"),
          msg: t("default:message"),
          send: t("default:contact_me"),
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
