import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Sunday Charles Adaji</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.I am gaining
              extensive exposure to core software engineering and computing concepts such as Computer
              Networking, the Software Development Life Cycle (SDLC), System Architecture, Design,
              and Test Driven Development (TDD). The program is designed to make me a well-rounded
              software engineer, with a focus on the fin-tech industry and preparing me for the process of
              organizing and managing businesses. I am excited to continue my education in this program
              and develop the necessary skills for a successful career in the field.
          </p>
          <div className="icons">
          <a href="https://www.linkedin.com/in/charles-sunday-6650a0251/" target="_blank">
          <LinkedInIcon />
        </a>
        <a href="mailto:your-Sundaycharles61@gmail.com">
        <EmailIcon />
        </a>
        <a href="https://github.com/Sundaygrin/" target="_blank">
          <GithubIcon />
        </a>
        </div>
          
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, JavaScript 
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              Springboot, Django
            </span>
          </li>
          
        </ol>
      </div>
    </div>
  );
}

export default Home;
