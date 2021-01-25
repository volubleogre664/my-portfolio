import React from "react";
import Footer from "../Footer/Footer.js";
import htmlIcon from "./html5-brands.svg";
import cssIcon from "./css3-brands.svg";
import jsIcon from "./js-square-brands.svg";
import sassIcon from "./sass-brands.svg";
import reactIcon from "./react-brands.svg";
import phpIcon from "./php-brands.svg";
import nodeIcon from "./node-js-brands.svg";
import graphqlIcon from "./icons8-graphql.svg";
import csharpIcon from "./icons8-c-sharp-logo.svg";
import Skills from "./Skills.js";
import SendIcon from "@material-ui/icons/Send";
import "./About.css";

function About() {
  return (
    <div className="about">
      <header className="about__hero">
        <h1 className="about__heroTitle">Know Who Nduduzo Really Is?</h1>
      </header>

      <section className="about__body">
        <div className="about__bodyIntro">
          <h1 className="about__bodyIntroTitle">Hi again</h1>

          <p className="about__bodyIntroDescription">
            I'm Nduduzo Shabalala, a web developer from South Africa. I started
            programming 3 years ago and before then I had never seen code in my
            life. I immediately fell inlove with it and I was working with C#. A
            year passed and then I shifted my focus to web development. Now I
            build web applications with ReactJS and put my focus on upgrading my
            self.
          </p>

          <p className="about__bodyIntroDescription">
            Ever since I started my web developer journey, I have been learning
            new things each day. Sometimes it's hard to focus or even go on,
            that's when I turn to reading about personal development and
            motivation.
          </p>

          <p className="about__bodyIntroDescription">
            I am pretty new in this industry but I believe I have what it takes
            to be in the work field. So I am open to jobs, collaborations and
            just helping where I can. I don't want all the tools I have to rust.
          </p>

          <p className="about__bodyIntroDescription">
            When it comes to coding, I never settle for anything but the best I
            can offer. If other people did it then what's stopping me from doing
            the same. I'm the type that would stare at a piece of code for hours
            and just be blown away about how awesome the code is, that time I
            wrote the code.
          </p>

          <figure>
            <blockquote cite="https://www.goodreads.com/quotes/tag/programming">
              “Always code as if the guy who ends up maintaining your code will
              be a violent psychopath who knows where you live”
            </blockquote>
            <figcaption>--John Woods</figcaption>
          </figure>
        </div>

        <div className="about__bodySkills">
          <h1 className="about__bodySkillsTitle">Here's What I Work With</h1>

          <div className="about__bodySkillsList">
            <Skills name="HTML5" icon={htmlIcon} value="80" />
            <Skills name="CSS3" icon={cssIcon} value="77" />
            <Skills name="JavaScript" icon={jsIcon} value="63" />
            <Skills name="Sass" icon={sassIcon} value="45" />
            <Skills name="ReactJS" icon={reactIcon} value="66" />
            <Skills name="C#" icon={csharpIcon} value="59" />
            <Skills name="PHP" icon={phpIcon} value="33" />
            <Skills name="Node.JS" icon={nodeIcon} value="45" />
            <Skills name="GraphQL" icon={graphqlIcon} value="30" />
          </div>
        </div>

        <div className="about__bodyFooter">
          <div className="about__bodyFooterText">
            <h2>Wanna hire me?</h2>
            <h2>Wanna work with me?</h2>
            <h2>Hit me up?</h2>
          </div>
          <form className="about__bodyFooterForm">
            <input className="input" placeholder="Start With Hi..." />
            <button className="btn" type="submit">
              <SendIcon />
            </button>
          </form>
        </div>
      </section>

      <footer className="about__footer">
        <Footer />
      </footer>
    </div>
  );
}

export default About;
