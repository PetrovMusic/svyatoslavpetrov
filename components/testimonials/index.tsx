import React, { FC } from "react";
import Image from "next/image";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import s from "./style/testimonials.module.css";
import AVTR1 from "../../public/assets/avatar1.jpg";
import AVTR2 from "../../public/assets/avatar2.jpg";
import AVTR3 from "../../public/assets/avatar3.jpg";
import AVTR4 from "../../public/assets/avatar4.jpg";
const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quisquam aspernatur consequuntur itaque obcaecati maiores vel saepe minima. Eligendi doloribus quam culpa hic consequuntur autem quod voluptas, molestias quisquam laboriosam.",
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quisquam aspernatur consequuntur itaque obcaecati maiores vel saepe minima. Eligendi doloribus quam culpa hic consequuntur autem quod voluptas, molestias quisquam laboriosam.",
  },
  {
    avatar: AVTR3,
    name: "Kwame Depite",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quisquam aspernatur consequuntur itaque obcaecati maiores vel saepe minima. Eligendi doloribus quam culpa hic consequuntur autem quod voluptas, molestias quisquam laboriosam.",
  },
  {
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quisquam aspernatur consequuntur itaque obcaecati maiores vel saepe minima. Eligendi doloribus quam culpa hic consequuntur autem quod voluptas, molestias quisquam laboriosam.",
  },
];

const Testimonials: FC = () => (
  <section id="testimonials">
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>
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
