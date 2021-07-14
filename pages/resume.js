import React from 'react';
import Link from "next/link";
import Head from 'next/head';
import NavBarComponent from '../components/navBar.js';

function Projects() {
  return (
    <>
      <Head>
        <title>Resume</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p className="pages-title">Resume</p>
      <NavBarComponent style="nav"/>
      <div className="resume-block-wrapper">
        <p className="resume-headings"><b>Professional Experience</b></p>
        <ul className="resume-description-ul">
          <li className="resume-description"><i>Graduate Software Engineer</i> at Inmar Intelligence, June 2021-<i>present</i></li>
          <li className="resume-description"><i>Lab Teaching Assistant</i> at Appalachian State University, August 2020-May 2021</li>
          <li className="resume-description"><i>Business Technology Intern</i> at Discover Financial Services, June 2020-August 2020</li>
          <li className="resume-description"><i>Application Development Intern</i> at Nationwide, May 2019-August 2019</li>
          <li className="resume-description"><i>Full-stack Developer</i> at Bee Informed Partnership, December 2018-March 2020</li>
          <li className="resume-description"><i>Calculus Tutor</i> at Appalachian State University, August 2018-December 2018</li>
        </ul>
      </div>
      <div className="resume-block-wrapper">
        <p className="resume-headings"><b>Education</b></p>
        <ul className="resume-description-ul">
          <li className="resume-description"><i>B.S. in Computer Science</i> at Appalachian State University, 2017-2021</li>
        </ul>
      </div>
      <div className="resume-block-wrapper">      
        <p className="resume-headings"><b>Honors</b></p>
        <ul className="resume-description-ul">
          <li className="resume-description"><i>Summa Cum Laude</i> at Appalachian State University, 2021</li>
          <li className="resume-description"><i>Outstanding Senior Award</i> at Appalachian State University, 2021</li>
          <li className="resume-description"><i>Leadership Award</i> at Appalachian State University, 2021</li>
          <li className="resume-description"><i>Women in Computer Science Scholarship</i> from ECRS, 2019</li>
          <li className="resume-description"><i>GHC Scholar</i> at Grace Hopper Celebration, 2018</li>
          <li className="resume-description"><i>Chancellor's List</i> at Appalachian State University, 2017, 2018, 2019</li>
        </ul>
      </div>
      <div className="resume-block-wrapper">      
        <p className="resume-headings"><b>Involvement</b></p>
        <ul className="resume-description-ul">
          <li className="resume-description"><i>President</i> of Women in Computer Science Club at Appalachian State University, 2020-2021</li>
          <li className="resume-description"><i>Treasurer</i> of Women in Computer Science Club at Appalachian State University, 2019-2020</li>
          <li className="resume-description"><i>Member</i> of Women in Computer Science Club at Appalachian State University, 2017-2019</li>
        </ul>
      </div>
    </>
  )
}

export default Projects