import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';  // Updated import path
import 'swiper/css';
import 'swiper/css/navigation'; // Navigation module styles
import './TrendingSwiper.css'; 

const TrendingSwiper = () => {

    const trendingProducts = [id="1",image="./Swipers/jeans.jpeg"]
    
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {
            trendingProducts.map((clothes) => (
            <SwiperSlide key={clothes.id}>
                <div className="swiper-slide-content">
                <img src={clothes.image} alt={clothes.name} className="slide-image" />
                <div className="slide-overlay">
                    <h3>{clothes.name}</h3>
                    <button className="buy-now-btn">Buy Now</button>
                </div>
                </div>
            </SwiperSlide>
        ))
        }
      </Swiper>
    </div>
  );
};

export default TrendingSwiper;
