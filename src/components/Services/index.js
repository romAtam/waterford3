import React from 'react'
import Icon2 from '../../images/slash.jpeg'
import Icon1 from '../../images/brows.jpeg';
import Icon3 from '../../images/skins.jpeg';
import Icon4 from '../../images/swax.webp';
import Icon5 from '../../images/snail.jpeg';
import Icon6 from '../../images/make-up.jpg';
import Icon7 from '../../images/malegrooming.jpeg';
import Icon8 from '../../images/stan.jpeg';
import {data1,data2,data3,data4} from "../data"
import { Swiper, SwiperSlide } from "swiper/react";
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,Conte
} from './ServicesElement'

const Services = (props) => {
console.log(data1)
console.log(data2)
  return (
    <Conte id={props.id}>
   <ServicesH1>our services</ServicesH1>
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 6,
          slideShadows: true,
        }}
        //  pagination={true}
      >
        {data1.map((item, key) => (
          <SwiperSlide key={key}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.testimony}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 6,
          slideShadows: true,
        }}
        //  pagination={true}
      >
        {data2.map((item, key) => (
          <SwiperSlide key={key}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.testimony}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 6,
          slideShadows: true,
        }}
        //  pagination={true}
      >
        {data3.map((item, key) => (
          <SwiperSlide key={key}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.testimony}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 6,
          slideShadows: true,
        }}
        //  pagination={true}
      >
        {data4.map((item, key) => (
          <SwiperSlide key={key}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.testimony}</p>
          </SwiperSlide>
        ))}
      </Swiper>
            {/* <ServicesCard>
     <Testimonials/>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>eyes</ServicesH2>
                <ServicesP>Reasonable price </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>skin</ServicesH2>
                <ServicesP>Everyone is happy with the result</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon4}/>
                <ServicesH2>Waxing</ServicesH2>
                <ServicesP>Everyone is happy with the result</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon5}/>
                <ServicesH2>nails</ServicesH2>
                <ServicesP>Everyone is happy with the result</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon8}/>
                <ServicesH2>tans</ServicesH2>
                <ServicesP>Everyone is happy with the result</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon6}/>
                <ServicesH2>make-up</ServicesH2>
                <ServicesP>Everyone is happy with the result</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon7}/>
                <ServicesH2>male grooming</ServicesH2>
                <ServicesP>Everyone is happy with the result</ServicesP>
            </ServicesCard> */}
      
      
    </Conte>
  )
}

export default Services;
