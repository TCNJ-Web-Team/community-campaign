import { useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import VideoComponent from "../components/VideoComponent";

// import VideoComponent from "./VideoComponent";
// import ImageContainer from "../components/ImageContainer.astro";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../styles/swiper-styles.scss";
import useVideoPlayer from "../hooks/useVideoPlayer";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import CustomVideo from "./CustomVideo";

const CarouselContainer = ({ carouselImages, children }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [spaceBetween, setSpaceBetween] = useState(40);

  // console.log(carouselImages);
  const stopVideos = () => {
    // console.log("Swipe");
    const videos = document.querySelectorAll(".video.playing");

    videos.forEach((video) => {
      // console.log("Video");

      if (video && !video.paused) {
        video.pause();
        video.currentTime = 0; // Reset the video to time 0
      }
    });
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1050) {
        setSpaceBetween(20); // Adjust as needed for smaller screens
      } else if (window.innerWidth <= 600) {
        setSpaceBetween(10); // Adjust as needed for very small screens
      } else {
        setSpaceBetween(40); // Default value
      }
    };

    handleResize(); // Call it initially
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // <Swiper
    //   spaceBetween={50}
    //   slidesPerView={3}
    //   onSlideChange={() => console.log("slide change")}
    //   onSwiper={(swiper) => console.log(swiper)}
    // >
    //   <SwiperSlide>Slide 1</SwiperSlide>
    //   <SwiperSlide>Slide 2</SwiperSlide>
    //   <SwiperSlide>Slide 3</SwiperSlide>
    //   <SwiperSlide>Slide 4</SwiperSlide>
    // </Swiper>
    <div id="carousel" className="wrapper">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={spaceBetween}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="topSwiper"
        onSlideChange={stopVideos}
      >
        <SwiperSlide>
          <CustomVideo client:load />
        </SwiperSlide>
        {carouselImages &&
          carouselImages.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={image.image} alt={image.alt} />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={spaceBetween}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="bottomSwiper"
      >
        <SwiperSlide>
          <img
            src="/astro/images/video-1-large.jpg"
            alt="Pavilion Rendering 1"
          />
        </SwiperSlide>
        {carouselImages &&
          carouselImages.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={image.image} alt={image.alt} />
              </SwiperSlide>
            );
          })}
      </Swiper>
      {children}
    </div>
  );
};
export default CarouselContainer;
