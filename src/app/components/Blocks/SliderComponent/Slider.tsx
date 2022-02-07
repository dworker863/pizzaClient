import { FC } from 'react';
import { Navigation, Pagination } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import sliderPizza from '../../../../assets/images/sliderPizza.jpg';
import sliderSnacks from '../../../../assets/images/sliderSnacks.jpg';
import sliderHot from '../../../../assets/images/sliderHot.jpg';

import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';
import { StyledPaginationWrapper, StyledSliderButton } from './StyledSlider';

const Slider: FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      initialSlide={1}
      spaceBetween={50}
      slidesPerView={1}
      loop
      slideToClickedSlide
      centeredSlides
      navigation={{
        prevEl: '.prevButton',
        nextEl: '.nextButton',
      }}
      pagination={{
        clickable: true,
      }}
      effect="coverflow"
      autoplay={{ delay: 10000, disableOnInteraction: false }}
      coverflowEffect={{ stretch: 400, depth: 380 }}
      breakpoints={{
        '1280': {
          slidesPerView: 1.999999,
        },
      }}
    >
      <SwiperSlide className="xl:left-10">
        <img src={sliderPizza} alt="Пицца" height={411} />
      </SwiperSlide>
      <SwiperSlide className="xl:left-10">
        <img src={sliderSnacks} alt="Закуски" height={411} />
      </SwiperSlide>
      <SwiperSlide className="xl:left-10">
        <img src={sliderHot} alt="Горячее" height={411} />
      </SwiperSlide>
      <StyledSliderButton className="prevButton">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="m-auto text-lg text-gray-500"
        />
      </StyledSliderButton>
      <StyledSliderButton className="nextButton">
        <FontAwesomeIcon
          icon={faChevronRight}
          className="m-auto text-lg text-gray-500"
        />
      </StyledSliderButton>
      <StyledPaginationWrapper />
    </Swiper>
  );
};

export default Slider;
