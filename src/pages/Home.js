import React from "react";
import meAndPooh from '../images/meAndPooh.jpeg';
import { Link } from "react-router-dom";

function Home() {
    return (
      <div className="content">
        <div id="intro">
          <div>
                <h1 id="title">Welcome to my personal website!</h1>
                <div className="section">
                    <p>
                        Hi, I am Shiyu, a first-year Math of Computation major at UCLA. <br></br>
                        I love reading, photography, badminton, and animes. <br></br>
                        I speak three languages: Mandarin, English, and Japanese. <br></br>
                        My dream pet is a border collie.
                    </p>

                    <p>
                        <Link to="/japanese">Here</Link> is a Japanese version of my self introduction:D
                    </p>
                </div>
          </div>

          <img width="500px" src={meAndPooh} alt="Me and Pooh" />
        </div>
    </div>
    );
  }

export default Home;