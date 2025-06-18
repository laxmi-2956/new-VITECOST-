import React from "react";
import "../css/LevelUpGame.css";

const LevelUpGame = () => {
  return (
    <section className="level-up-game">
      <h1 style={{ fontSize: "30px", fontFamily: "Roboto Slab" }}>
        Inspiration from The Upside
      </h1>
      <div className="title-section">
        <div className="line" />
        <h2 className="titles">Level Up Your Game</h2>
        <div className="line" />
      </div>

      <div className="content-wrapper">
        <div className="text-section">
          <div className="badge">
            <img
              src="https://www.vitacost.com/images/modules/SportCertified_LogoLockup_Vertical_VisuallyCentered.png"
              height="100px"
            />
            <div className="dividers"></div>

            <img
              src="https://www.vitacost.com/images/modules/MLR_Edited.png"
              height="100px"
              alt="MLR Logo"
              className="mlr-logo"
            />
          </div>

          <p className="description">
            Vitacost is now the Official Online Health Retailer of Major League
            Rugby, bringing top-tier, certified supplements to professional
            athletes through the Sport Certified marketplace.
          </p>
          <button className="shop-btn" style={{ color: "black" }}>
            Shop All
          </button>
        </div>

        <div className="video-section">
          <iframe
            className="yt-video"
            src="https://www.youtube.com/embed/tgzyCJ-BiAg?si=1KRM0rmiF9UTvW7k"
            title="Vitacost Sport Certified"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LevelUpGame;
