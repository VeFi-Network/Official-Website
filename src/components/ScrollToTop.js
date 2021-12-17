import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { ScrollToTopWrapper } from "../utility/GlobalStyle";
const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollToTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollToTop);

  return (
    <ScrollToTopWrapper>
      <FaArrowCircleUp className="arrow" onClick={scrollTop} style={{ display: showScroll ? "flex" : "none" }} />
    </ScrollToTopWrapper>
  );
};

export default ScrollToTop;
