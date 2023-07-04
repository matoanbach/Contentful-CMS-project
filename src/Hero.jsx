import React from "react";
import heroImg from "./assets/hero.svg"
function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            voluptatibus, reiciendis enim eius harum unde eos hic esse adipisci
            assumenda fuga tempora nulla iusto eveniet maxime magnam corrupti ut
            maiores?
          </p>
        </div>
        <div className="img-container">
            <img src={heroImg} alt="woman and the browser" className="img"/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
