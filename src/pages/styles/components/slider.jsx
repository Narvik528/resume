import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../sass/basicCard.sass'
import CardSummary from '../../cardSummary';
import CardPortfolio from '../../cardPortfolio';
import CardAdditionally from '../../cardAdditionally'

export default function SimpleSlider() {
    const settings = {
      className: "gallery",
      dots: true,
      arrows: false,
      infinite: true,
      fade: true,
      autoplay: false,
      speed: 500,
      adaptiveHeight: true,
      sliderToShow: 1,
      slidesToScroll: 1
    };
    return (
        <Slider {... settings}>
            <CardSummary/>
            <CardPortfolio/>
            <CardAdditionally/>
        </Slider>
     
      )
}