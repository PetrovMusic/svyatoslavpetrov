import React, { FC } from "react";
import Image from "next/image";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import s from "./style/testimonials.module.css";
import Anika from "../../public/assets/Annika.jpg";
import Oleg from "../../public/assets/Oleg.jpg";
import Kuo from "../../public/assets/Kuo.jpg";
import Nicole from "../../public/assets/Nicole.jpg";
const data = [
  {
    avatar: Nicole,
    name: "Nicole L",
    position: "Music Director/Producer",
    review:
      "Svyatoslav is a very imaginative man.He can give me many creative ideas!He also knows a lot about various games and he is always pleased to share something with me.I can learn a lot of interesting things when I work with him!",
  },
  {
    avatar: Oleg,
    name: "Oleg",
    position: "Lead Producer",
    review:
      "Passionate and efficient, that’s how I would describe Svyatoslav. I had the pleasure of working with him on several projects, and he delivered exceptional results. I am always impressed by Svyatoslav’s ability to craft a fantastic soundscape for any game or experience.",
  },
  {
    avatar: Anika,
    name: "Annika Maar",
    position: "CEO",
    review:
      "Working with Svyatoslav is always a blast! He knows exactly what we want from a piece and puts his own personal spin on it.\r\nスビアトスラブと一緒に制作するっていつも安心で楽しいです。個人性の込めたシーンにぴったりな音楽です。",
  },
  {
    avatar: Kuo,
    name: "Kuo Yu",
    position: "Music Director/Producer",

    review:
      "Svyatoslav always brings his unique taste to our music. I love diving into the details with him cuz he's one of the most open minded composer.",
  },
];

export type TestimonialsProps = {
  title: string;
  subtitle: string;
};
const Testimonials: FC<TestimonialsProps> = ({ title, subtitle }) => (
  <section id="testimonials">
    <h5>{title}</h5>
    <h2>{subtitle}</h2>
    <Swiper
      className={`container ${s.container} ${s.testimonials__container}`}
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {data.map(({ avatar, name, review }, index) => {
        return (
          <SwiperSlide key={index} className={s.testimonial}>
            <div className={s.client__avatar}>
              <Image src={avatar} alt="photo" />
            </div>
            <h5 className={s.client__name}>{name}</h5>
            <small className={s.client__review}>{review}</small>
          </SwiperSlide>
        );
      })}
    </Swiper>
  </section>
);

export default Testimonials;
