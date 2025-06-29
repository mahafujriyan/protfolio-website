import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
const Animation = ({images}) => {
    return (
        <Swiper
      modules={[Autoplay, Pagination, EffectFade]}
      spaceBetween={30}
      effect="fade"
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true, 
      }}
      className="w-full h-64 rounded-xl shadow"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} alt={`Slide ${index}`} className="w-full h-full object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
    );
};

export default Animation;