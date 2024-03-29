import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="title">ABOUT THE DEVELOPERS</h1>
      </div>
      <div className="about-us-container">
        <div className="developer-info">
          <div className="left-info">
            <div className="about-us-header">Seth Porche</div>
            <div className="about-us-city">Tampa, FL</div>
          </div>
          <div className="right-info">
            <Link
              to="https://www.linkedin.com/in/seth-porche-26295527b/"
              className="linkedin-button"
            >
              Linkedin
            </Link>
          </div>
        </div>
        <div className="about-us-content">
          <p>
            "Hi, I'm Seth, a passionate individual with a diverse set of
            interests. When I'm not immersed in the world of coding, you'll find
            me crafting beats and melodies, diving into captivating video games,
            exploring the art of film, experimenting with new recipes in the
            kitchen, and getting lost in the pages of a good book. 💑 I've been
            happily married to my wonderful wife Kaley for two years, and we
            navigate the journey of life together. 📚 Currently on the verge of
            graduating, I'm eagerly gearing up to embark on a new adventure in
            the tech world. While my professional background has roots in
            logistics, where I managed a warehouse for a distribution company,
            my heart and future lie in software engineering. In early 2024, I'll
            be on the lookout for exciting opportunities to contribute my skills
            and passion to the world of technology."
          </p>
        </div>

        <div className="developer-info">
          <div className="left-info">
            <div className="about-us-header">Hamza Ahmed</div>
            <div className="about-us-city">Ocean City, MD</div>
          </div>
          <div className="right-info">
            <Link
              to="https://www.linkedin.com/in/hamza-ahmed-63a500251/"
              className="linkedin-button"
            >
              Linkedin
            </Link>
          </div>
        </div>
        <div className="about-us-content">
          <p>
            "Hey there! I'm Hamza, a running enthusiast, amateur cook, and a
            passionate coder. Originally from Pakistan, I made a bold shift from
            PA school to the dynamic world of programming. When I'm not immersed
            in the world of coding, you'll likely find me pounding the pavement,
            training for the next marathon. Running isn't just a hobby for me;
            it's a metaphor for life—endurance, determination, and the thrill of
            crossing the finish line. In addition to coding and running, I wear
            another hat as I take care of the family business. Time is a rare
            commodity for me, but the juggling act keeps life interesting. It's
            a challenge I embrace wholeheartedly. Life's a marathon, not a
            sprint, and I believe in savoring every step of the journey. Join me
            as I navigate the intersections of coding, running, family, and the
            delightful chaos that is life."
          </p>
        </div>
        <div className="developer-info">
          <div className="left-info">
            <div className="about-us-header">Mason Doney</div>
            <div className="about-us-city">Chicago, IL</div>
          </div>
          <div className="right-info">
            <Link
              to="https://www.linkedin.com/in/mason-doney/"
              className="linkedin-button"
            >
              Linkedin
            </Link>
          </div>
        </div>
        <div className="about-us-content">
          <p>
            "Hey there! I'm Mason Doney, hailing from the vibrant city of
            Chicago, IL. When I'm not knee-deep in code, you'll catch me
            unleashing my competitive spirit in video games or tearing up the
            sports field with my friends. 🎮⚽ In the world of technology, I'm
            always up for a challenge and love bringing ideas to life through
            coding. Looking forward to making a mark in the tech landscape!"
          </p>
        </div>
        <div className="developer-info">
          <div className="left-info">
            <div className="about-us-header">Taylor Pearce</div>
            <div className="about-us-city">Denver, CO</div>
          </div>
          <div className="right-info">
            <Link
              to="https://www.linkedin.com/in/taylorapearce/"
              className="linkedin-button"
            >
              Linkedin
            </Link>
          </div>
        </div>
        <div className="about-us-content">
          <p>
            Greetings! I'm Taylor, a software engineer hailing from the Mile
            High City. Originating from a civil engineering background, I
            seamlessly made the leap into the dynamic realm of full-stack
            programming. Beyond coding, I'm an avid participant in the world of
            competitive dodgeball and when I'm not chucking balls at people I
            spend my downtime restoring furniture at my workshop studio in
            Denver. I hope Trivia Titans brings you as much joy as it brought me
            building this application with this team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
