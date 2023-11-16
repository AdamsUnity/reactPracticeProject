import React from "react";
import heroImage from "../../assets/images/image-web-3-desktop.jpg";
import { heroNewItem } from "../../data";
import "./Hero.css";

const Hero = () => {
  return (
    <section className=" hero--section container">
      <div className="hero--part1">
        <img src={heroImage} alt="hero image" />
        <div className="web3--future">
          <h1>The Bright Future of Web 3.0</h1>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
              nobis cupiditate deleniti sapiente repellat quam dolorem quibusdam
              Omnis, enim. Doloremque, dolorem exercitationem.
            </p>
            <button className="cta--button">Read More</button>
          </div>
        </div>
      </div>
      <div className="hero--part2">
        <h2 className="news--head">NEWS</h2>
        {heroNewItem.map((item) => (
          <div key={item.heroTitle}>
            <h3 className="hero--title">{item.heroTitle}</h3>
            <p className="hero--content">{item.heroContent}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
