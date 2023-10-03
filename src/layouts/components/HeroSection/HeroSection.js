import React, { useState, useEffect } from "react";

function HeroSection() {
  const [sections, setSections] = useState([
    {
      img: "./img/slider/slider_1.webp",
      isDisplayed: true,
    },
    {
      img: "./img/slider/slider_2.webp",
      isDisplayed: false,
    },
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSections((prevSections) => {
        return prevSections.map((section) => ({
          ...section,
          isDisplayed: !section.isDisplayed,
        }));
      });
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      {sections.map((section, index) => (
        <div key={index} style={{ display: section.isDisplayed ? "block" : "none" }}>
          <img src={section.img} alt={`Slider ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default HeroSection;
