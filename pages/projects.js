import React from 'react';
import Link from "next/link";
import Head from 'next/head';
import NavBarComponent from '../components/navBar.js';

function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p className="pages-title">Projects</p>
      <NavBarComponent />
      <div class="project-wrapper">
        <div className="tile">
          <a href="https://ly86.chaulyjenny.com/" className="tile-links">
            <p className="posts-title">LY86-64 (2020-<i>present</i>)</p>
            <img src="/assets/ly86.gif" style={{width: "100%"}}/>
            <p>A Y86-64 browser-based simulator that focuses on the visualization 
            aspect of the control logic and signals.</p>
          </a>
        </div>

        <div className="tile">
          <a href="http://cs.appstate.edu/apphack/" className="tile-links">
            <p className="posts-title">AppHack Website (2019-<i>present</i>)</p>
              <img src="/assets/apphack.png" style={{width: "100%"}}/>
            <p>A website for AppHack, a student-run hackathon hosted at Appalachian State University.</p>
          </a>
        </div>

        <div className="tile">
           <a href="https://github.com/lycb/Together" className="tile-links">
            <p className="posts-title">Together; (2020)</p>
            <img src="/assets/together.gif" style={{width: "50%"}}/>
            <p>A mobile app for students with mental health issues to connect with their community.
            This project was built overnight at <a href="https://pearlhacks.com/" className="links">PearlHacks</a> in 2020.</p>
          </a>
        </div>
        
        <div className="tile">
          <a href="https://r2d2.chaulyjenny.com/" className="tile-links">
            <p className="posts-title">R2-D2 (2019)</p>
            <img src="/assets/r2d2.jpg" style={{width: "100%"}}/>
            <p>R2-D2 is a command-line tool that generates, stores, and removes your passwords from the comfort of your own terminal</p>
          </a>
        </div>
      </div>
    </>
  )
}

export default Projects