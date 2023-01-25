import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Staci</h2>
        <div className="prompt">
          <p>
            A software engineer with a passion for creating and learning new
            things.{" "}
          </p>
          <a href="https://www.linkedin.com/in/staci-southerland-649549a8/">
            <LinkedInIcon />
          </a>
          <a href="mailto:stacisoutherland24@gmail.com">
            <EmailIcon />
          </a>
          <a href="https://github.com/stacisoutherland24">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <ol className="list">
          <li className="item">
            <h2> Front-End Skills and Languages</h2>
            <span>Javascript, HTML, CSS, ReactJS, Redux, NPM, BootStrap</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
