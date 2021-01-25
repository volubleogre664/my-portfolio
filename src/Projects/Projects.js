import React from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Button } from "@material-ui/core";
import amazonClone from "./amazon-clone.png";
import whatsappClone from "./whatsapp-clone.png";
import firebaseIcon from "./icons8-firebase.svg";
import mongodbIcon from "./icons8-mongodb.svg";
import nodeIcon from "../About/node-js-brands.svg";
import reactIcon from "../About/react-brands.svg";
import cssIcon from "../About/css3-brands.svg";
import Footer from "../Footer/Footer";
import "./Project.css";

function Projects() {
  return (
    <div className="project">
      <header className="project__hero">
        <h1 className="project__heroTitle">Browse The Work I Have Done.</h1>
      </header>

      <section className="project__intro">
        <h2 className="project__introTitle">Why I code?</h2>

        <div className="project__introDescription">
          Most of my projects have one specific that needs to be put out there
          for my potential clients to see. With that said see the projects below
          with full descriptions.
        </div>
      </section>

      <main className="project__body">
        <div className="project__bodyItem">
          <h1 className="project__bodyItemTitle">01. WhatsApp Clone</h1>
          <img
            className="project__bodyItemImg"
            src={whatsappClone}
            alt="real-time messaging feature"
          />
          <div className="project__bodyItemDescription">
            <h2 className="itemTitle">Tech Stack Used: </h2>
            <ul className="techItems">
              <li>
                <img
                  className="techItems__icon"
                  src={reactIcon}
                  alt="frontend ui designed with react"
                />
                React
              </li>
              <li>
                <img
                  className="techItems__icon"
                  src={cssIcon}
                  alt="frontend ui styled with css3"
                />
                CSS3
              </li>
              <li>
                <img
                  className="techItems__icon"
                  src={nodeIcon}
                  alt="backend done with node.js"
                />
                Node.JS
              </li>
              <li>
                <img
                  className="techItems__icon"
                  src={mongodbIcon}
                  alt="chatting data saved to mongodb"
                />
                MongoDB
              </li>
            </ul>
            <div className="itemDetails">
              This is a clone of the chatting app WhatsApp. The main point of
              making this was to make realtime messaging. Real-time messaging
              feature was achived with the help of Pusher. This app's frontend
              was deployed on firebase and the backend on heroku.
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://whatsapp-clone-e5edc.web.app/"
            >
              <Button className="btn">
                <VisibilityIcon className="prview" /> Preview
              </Button>
            </a>
          </div>
        </div>

        <div className="project__bodyItem">
          <h1 className="project__bodyItemTitle">02. Amazon Clone</h1>
          <img
            className="project__bodyItemImg"
            src={amazonClone}
            alt="real-time messaging feature"
          />
          <div className="project__bodyItemDescription">
            <h2 className="itemTitle">Tech Stack Used: </h2>
            <ul className="techItems">
              <li>
                <img
                  className="techItems__icon"
                  src={reactIcon}
                  alt="frontend ui designed with react"
                />
                React
              </li>
              <li>
                <img
                  className="techItems__icon"
                  src={cssIcon}
                  alt="frontend ui styled with css3"
                />
                CSS3
              </li>
              <li>
                <img
                  className="techItems__icon"
                  src={firebaseIcon}
                  alt="full firebase with"
                />
                Firebase
              </li>
            </ul>
            <div className="itemDetails">
              This one is a full firebase application. It utilises
              authentication from firebase and the user data is stored in
              firebase's firestore. This was to implement a simple yet powerful
              e-commerce functionality. This app has full basket functionality.
              The state of the app is managed with the React Context API(similar
              to Redux just less powerful).
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://challenge-e828d.web.app/"
            >
              <Button className="btn">
                <VisibilityIcon className="prview" /> Preview
              </Button>
            </a>
          </div>
        </div>
      </main>

      <div className="project__footer">
        I work very hard to make sure I add more better projects on my
        portfolio. So be dure to comeback and see what I will have in the near
        future.
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
