import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import ContentSection from "./components/content_section";

const section = [
  {
    yellowLabel: "Do you want to",
    title: "Learn how to code",
    description:
      "Awesome! Let’s do this together. We are here to support you in your coding journey.",
    subsection: [
      { image: "https://learntocodetogether.nl/assets/team.svg" },
      { image: "https://learntocodetogether.nl/assets/community.svg" },
      { image: "https://learntocodetogether.nl/assets/personal-speed.svg" },
    ],
  },
  {
    yellowLabel: "Courses we have",
    title: "All intensive courses and Bootcamp",
    description:
      "We have created courses to help you learn, with easy to follow steps and some sparks of fun!",
    subsection: [
      { image: "https://learntocodetogether.nl/assets/expand-horizon.svg" },
      { image: "https://learntocodetogether.nl/assets/developers.svg" },
      { image: "https://learntocodetogether.nl/assets/step-by-step.svg" },
    ],
  },
];
function App() {
  return (
    <div className="container">
      <Header />
      <div className="row">
        {section.map((sec) => {
          return (
            <div className="col-lg-12">
              <ContentSection
                yellowLabel={sec.yellowLabel}
                title={sec.title}
                description={sec.description}
                subsection={sec.subsection}
              />
            </div>
          );
        })}

        <Footer />
      </div>
    </div>
  );
}

export default App;
