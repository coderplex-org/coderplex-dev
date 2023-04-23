import React from 'react';
import './../styles/Home.css';

function Home() {
  return (
    <div className="Home">
      <h1>welcome to our community</h1>
      <p>
        We are a community of passionate learners, builders, and professionals who aim to help each other grow in our careers. Our mission is to bring together people who are passionate about learning, building things, open source, tech, and helping each other grow in our career.
      </p>
      <div className="buttons">
        <a
          href="https://discord.gg/DYQZtD8ATU"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-discord"
        >
          Join Discord
        </a>
        <a
          href="https://coderplex.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-membership"
        >
          Membership Form
        </a>
      </div>
    </div>
  );
}

export default Home;
