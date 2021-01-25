import React from "react";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Footer from "../Footer/Footer.js";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__hero">
        <div className="home__heroIntro">
          <h1 className="home__heroIntroHi"> Hi, </h1>
          <h1 className="home__heroIntroName">I'm Nduduzo,</h1>
          <p className="home__heroIntroDes">I'm A Website Developer.</p>
        </div>

        <div className="home__heroFooter">
          <Link to="/about">
            <Button className="btn">Who Am I?</Button>
          </Link>

          <Link to="/contact">
            <Button className="btn">Let's Chat</Button>
          </Link>
        </div>
      </div>

      <section className="home__body">
        <h1 className="home__bodyTitle">
          I help Businesses/individuals grow digitally
        </h1>

        <p className="home__bodyDetails">
          Whether you're a business or individual, if you sell a product(s) or
          provide a service(s) you need an online presence. And your current
          customers need means to gain contact or carry out transactions with
          you in a more simpler way.
        </p>
        <h4 className="home__bodyDetailsBig">That's Where I Come In</h4>
        <p className="home__bodyDetails">
          I can help expand your brand digitally with web solutions specific to
          your brand's and your customer's needs. The digital market is growing
          rapidly with time and I can help you gain contact with it.
        </p>

        <div className="home__bodyPosts">
          <div className="post">
            <h2 className="post__title">What I offer</h2>

            <ul className="post__skills">
              <li> More Customers/Clients</li>
              <li> More Digital Exposure </li>
              <li> Fast And Easy Contact With Customers/Clients </li>
            </ul>

            <div className="post__footer">
              <Link to="/about">
                <Button className="btn">More Skills</Button>
              </Link>
            </div>
          </div>

          <div className="post">
            <h1 className="post__title">Simple Amazon Clone</h1>

            <ul className="post__skills">
              <li>React</li>
              <li>React Context API</li>
              <li>Firebase Authentication</li>
            </ul>

            <div className="post__footer">
              <a
                href="https://challenge-e828d.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                <IconButton className="post__footerIcon">
                  <VisibilityIcon />
                </IconButton>
              </a>

              <Link to="/about">
                <Button className="btn"> Learn More </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="home__bodyText">
          <h2 className="title">Not Coding, I...</h2>
          <div className="lists">
            <ul>
              <li>Reading Books</li>
              <li>Personal Development</li>
              <li>Working Out</li>
            </ul>

            <ul>
              <li>Music</li>
              <li>Playing Games</li>
              <li>Watching Movies</li>
            </ul>
          </div>
          <div className="home__bodyTextFooter">
            The above mentioned help me through my burnout days. Sometimes I get
            coding inspiration from reading a book or from watching a movie.
          </div>
        </div>
      </section>

      <footer className="home__footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
