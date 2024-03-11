import React from "react";

export default function HeaderMain({ ...props }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const headerHeight = 6.6 * 16; // 6rem converted to pixels

    if (element) {
      const offset = element.offsetTop - headerHeight;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <div {...props}>
      <span onClick={() => scrollToSection("main-page-info")}>Informatii</span>
      <span onClick={() => scrollToSection("main-page-values")}>Valori</span>
      <span onClick={() => scrollToSection("main-page-includes")}>
        Ce includem?
      </span>
    </div>
  );
}
