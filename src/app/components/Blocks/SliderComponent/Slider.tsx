import { FC } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';

import sliderSnacks from '../../../../assets/images/sliderSnacks.jpg';

const Slider: FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      initialSlide={1}
      spaceBetween={50}
      slidesPerView={1.999999}
      loop
      slideToClickedSlide
      centeredSlides
      navigation
      pagination={{ clickable: true }}
      effect="coverflow"
      autoplay={{ delay: 10000, disableOnInteraction: false }}
      coverflowEffect={{ stretch: 400, depth: 380 }}
    >
      <SwiperSlide className="left-10">
        <img src={sliderSnacks} alt="Пицца" height={411} />
      </SwiperSlide>
      <SwiperSlide className="left-10">
        <img src={sliderSnacks} alt="Закуски" height={411} />
      </SwiperSlide>
      <SwiperSlide className="left-10">
        <img src={sliderSnacks} alt="Горячее" height={411} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
