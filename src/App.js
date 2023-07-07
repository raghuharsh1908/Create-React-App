import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="note">
        <img></img>
        <p className="para">
          Hello! Myself Harshwardhan Raghu and I am currently in my 3rd year
          pursuing B.Tech from IIT Roorkee in Electrical Engineering.
        </p>

        <h2>Areas Of Interest</h2>
        <div class="big">
          <div class="cards dsa">Data Structures and Algorithms</div>
          <div class="cards webd">Web-Development</div>
          <div class="cards ps">Problem Solving</div>
          <div class="cards cp">Competitive Programming</div>
        </div>
        <h2>Education</h2>
        <div class="big">
          <div class="edu-cards tenth">
            <div>
              <b>Matriculate (Class X)</b>
            </div>
            <div>Delhi Public School, Eldeco</div>
            <div>96.2%</div>
            <div>2018</div>
          </div>
          <div class="edu-cards twelth">
            <div>
              <b>Intermidiate (Class XII)</b>
            </div>
            <div>Delhi Public School, Eldeco</div>
            <div>95.6%</div>
            <div>2020</div>
          </div>
          <div class="edu-cards college">
            <div>
              <b>B.Tech 3rd Year</b>
            </div>
            <div>IIT Roorkee,Uttrakhand</div>
            <div>7.3(CGPA)</div>
            <div>2023</div>
          </div>
        </div>
        <h2>Internships</h2>
        <div class="big">
          <div class="edu-cards tenth">
            <div>
              <b>Web-Developer</b>
            </div>
            <div>EED, Prof.Soham Chakraborty</div>
            <br></br>
            <div>Sept,2021 To Nov,2021</div>
          </div>
          <div class="edu-cards twelth">
            <div>
              <b>Flutter Developer</b>
            </div>
            <div>Helpy Moto</div>
            <br></br>
            <div>April,2023 To May,2023</div>
          </div>
          <div class="edu-cards college">
            <div>
              <b>Project Consultant</b>
            </div>
            <div>IndTel Solutions Pvt. Ltd.</div>
            <br></br>
            <div>May,2023 To July,2023</div>
          </div>
        </div>
        <h2>Projects</h2>
        <p>
          I have done several projects both in Core-Electrical and in
          Web-development. The following is the list of projects done by me.
        </p>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://github.com/ariesiitr/Line-following-drone-with-landing"
              aria-current="page"
            >
              Line following Drone with landing || ARIES
            </a>
            <p>
              Designed a Line-tracking algorithm through Vision-based control
              with image processing techniques, using MATLAB and SIMULINK.
            </p>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://github.com/raghuharsh1908/Keypad-Door-Unlock"
            >
              RFID Tag Reader || ARIES
            </a>
            <p>
              Used the knowledge of Arduino UNO and C++ along with simulations
              done on Tinker-lab to make a fully functional RFID tag. The aim
              was to make an affordable, easy-to-use, reliable security door
              lock using Arduino and a keypad lock
            </p>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://drive.google.com/file/d/1lhWClHWuBA_eaZCdUX38KCzlh8bsQtdW/view"
            >
              Web-App Development for ROS || Electrical Dept.
            </a>
            <p>
              Worked under professor Soham Chakraborty of the Electrical
              Engineering Department to design the Front-End of the website
              using Figma and Adobe illustrator, HTML, and CSS.
            </p>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://drive.google.com/file/d/13ODQyh4PCcAiP2HD8tHhHXW1D38kwZRf/view"
            >
              Bhawan App|| Hostel Council, IIT Roorkee
            </a>
            <p>
              Designed to ease out the Bhawan Administration processes and make
              them more efficient. Used Kotlin to build a single platform for
              the students to communicate with the college administration to
              share crucial information.
            </p>
          </li>
        </ul>
        <h2>Position Of Responsibilities & Extra Curriculars</h2>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <p class="sub-heading" aria-current="page">
              Sports Secretary | Govind Bhawan,IIT Roorkee
            </p>
            <p>
              Organized VIDROH(an Intra-Bhawan Sports Tournament) in the Govind
              Bhawan including games like Badminton, Chess, Table-tennis, etc.
              Led a team of 20 people and organized Bhawan Day of Govind Bhawan
              in which I managed various cultural events.
            </p>
          </li>
          <li class="nav-item">
            <p class="sub-heading">Joint Secreatry | Outreach Cell IITR</p>
            <p>
              Edited several videos for IITR under the Outreach Cell, and worked
              with the Uttrakhand Government for the Devbhoomi Cyber Hackathon.
              Currently the Joint Secretary of the Multimedia Cell
            </p>
          </li>
          <li class="nav-item">
            <p class="sub-heading">Member (Multimedia) | WatchOut! IITR</p>
            <p>
              Published and edited videos for the YouTube channel of WatchOut!
              like, Cornflakes and short movies, worked on various articles like
              "Back to Campus" and "Bhawan Days".
            </p>
          </li>
          <li class="nav-item">
            <p class="sub-heading">
              Head Operations, Bhawan App | Hostel Council, IITR
            </p>
            <p>
              Designed with the aim to ease out the Bhawan Administration
              processes and make them more efficient. Designed and developed an
              app to register any suggestions and complaints regarding the
              Bhawan administration.
            </p>
          </li>
          <li class="nav-item">
            <p class="sub-heading">Executive Member | EESS</p>
            <p>
              Hosted the offline intern talk at the Electrical Department,
              edited videos and podcasts, served as a Moderator in the IDEAVOLT
              event and helped in the development of the Electrical Department
              website under EESS DWMC.
            </p>
          </li>
          <li class="nav-item">
            <p class="sub-heading">
              Undergraduate Teaching Assistant for EEN-104 and CEN-105 | ARP,
              IITR
            </p>
            <p>
              Acted as UGTA for 1st-year students for the courses EEN-104 and
              CEN-105(Environmental Science). Mentored 150+ students about the
              course syllabus and provided necessary resources to help boost
              their academic profiles.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
