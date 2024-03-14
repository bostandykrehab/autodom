import React from 'react';
import Slider from 'react-slick';
import '../../styles/results-slider.css';
function ResultsSlider({ images }) {
  let isDesktop = true;

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isDesktop = false;
  }

  const settings = {
    arrows: isDesktop,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((e, i) => (
          <div className="recent__blog-post mb-4" key={i}>
            <div className="recent__blog-item d-flex gap-3">
              <img src={e} alt="" className="w-100 rounded-2" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ResultsSlider;
