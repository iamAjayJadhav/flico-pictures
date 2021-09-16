import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

import "../Banner/Banner.css"

export default function Banner() {
  return (
    <div class="carousel-wrapper" id="testimonials">
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showThumbs={false}
        swipeable={true}
        interval={4000}
        showArrows={true}
        showIndicators={true}
        showStatus={true}
      >
        <div className="image">
          <img src="https://webneel.net/file/images/11-16/8-xmen-movie-poster-design.jpg" />
        </div>
        <div className="image">
          <img src="https://wallpaperaccess.com/full/1076854.jpg" />
        </div>
        <div className="image">
          <img src="https://www.cnet.com/a/img/bt5N5n2-PK73HYAx2FM0wsRs_no=/1200x630/2019/04/19/f20d0d6a-1781-49a4-90ab-e285109b65b2/avengers-endgame-imax-poster-crop.png" />
        </div>
      </Carousel>
    </div>
  )
}
