import React from "react";

function Header() {
  return (
    <div>
      <header id="header" className="section-header scroll">
        <a href="./">
          <img
            className="icon"
            src="https://learntocodetogether.nl/assets/icon.svg"
            alt="see"
          />
        </a>
        <a
          href="https://www.meetup.com/Learning-to-Code-Amsterdam/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="meetup-icon"
            src="https://learntocodetogether.nl/assets/meetup-icon.svg"
            alt="see"
          />
        </a>
        <nav>
          <a href="/courses.html">Our Courses</a>
        </nav>
      </header>

      <div className="section-header-spacer"></div>
    </div>
  );
}
export default Header;
