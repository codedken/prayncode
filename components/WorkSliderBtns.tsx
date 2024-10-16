"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({
  containerStyles,
  btnStyles,
  iconStyles,
}: {
  containerStyles?: string;
  btnStyles?: string;
  iconStyles?: string;
}) => {
  const swiper = useSwiper();
  const last = swiper.isEnd;
  const start = swiper.isBeginning;
  return (
    <div className={containerStyles}>
      {start ? (
        <button></button>
      ) : (
        <button className={btnStyles} onClick={() => swiper.slidePrev()}>
          <PiCaretLeftBold className={iconStyles} />
        </button>
      )}
      {last ? (
        <button className="size-[44px]"></button>
      ) : (
        <button className={btnStyles} onClick={() => swiper.slideNext()}>
          <PiCaretRightBold className={iconStyles} />
        </button>
      )}
    </div>
  );
};

export default WorkSliderBtns;
