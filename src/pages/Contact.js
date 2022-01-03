import React from "react";
import "../styles/new.css";
import Navbar from "../components/Navbar";

const data = [];

function Contact() {
  return (
    <>
      <Navbar />

      <div className="header">
        <h1>Contact Me</h1>
      </div>

      <section>
        <div className="article">
          <h1>Contact Me</h1>

          <p>Expertise in Node.JS development</p>
          <p>
            Experience in JavaScript and supporting technologies such as
            TypeScript and npm
          </p>

          <p>
            In this example, we have created a header, two columns/boxes and a
            footer. On smaller screens, the columns will stack on top of each
            other.
          </p>
          <p>
            Resize the browser window to see the responsive effect (you will
            learn more about this in our next chapter - HTML Responsive.)
          </p>
        </div>

        {/* <nav>
          <ul>
            <li>
              <a href="#">London</a>
            </li>
            <li>
              <a href="#">Paris</a>
            </li>
            <li>
              <a href="#">Tokyo</a>
            </li>
          </ul>
        </nav> */}

        <div className="article">
          <h1>My Contact Information </h1>
          <p>Expertise in Node.JS development</p>
          <p>
            Experience in JavaScript and supporting technologies such as
            TypeScript and npm
          </p>
          <p>
            Experience in building solutions on top of AWS such as Lambda, API
            Gateway, Dynamo and others
          </p>
          <p>
            Knowledge of Node.JS concepts (Such as event loop, cluster, memory
            management)
          </p>
          <p>
            Experience working with enterprise technology platforms.
            Specifically: Video on Demand Systems, Content Management Systems,
            Subscriber Management, etc.
          </p>
          <p>Strong communication, presentation, and advisory skills</p>
          <p>Possess a strong technical background</p>
          <p>Willingness to work as a remote resource</p>
          <p>Knowledge of building RESTful web services</p>
          <h1>More</h1>
          <p>Expertise in Node.JS development</p>
          <p>
            Experience in JavaScript and supporting technologies such as
            TypeScript and npm
          </p>
          <p>
            Experience in building solutions on top of AWS such as Lambda, API
            Gateway, Dynamo and others
          </p>
          <p>
            Knowledge of Node.JS concepts (Such as event loop, cluster, memory
            management)
          </p>
          <p>
            Experience working with enterprise technology platforms.
            Specifically: Video on Demand Systems, Content Management Systems,
            Subscriber Management, etc.
          </p>
          <p>Strong communication, presentation, and advisory skills</p>
          <p>Possess a strong technical background</p>
          <p>Willingness to work as a remote resource</p>
          <p>Knowledge of building RESTful web services</p>
        </div>
      </section>

      <div className="footer"></div>
    </>
  );
}

export default Contact;
