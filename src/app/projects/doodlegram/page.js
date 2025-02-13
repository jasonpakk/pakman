"use client";
import { useRouter } from "next/navigation";
import "../styles.scss";

export default function Doodlegram() {
  const router = useRouter();

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="page projectPage">
      <div className="pageHeader" style={{ alignSelf: "flex-end" }}>
        <button onClick={() => router.push("/projects")}>
          <img src="/pacman/orange.png" alt="orange" />
          <p>Back to Projects</p>
        </button>
      </div>

      <div className="projectHeader">
        <img src="/projects/doodlegram.png" alt="doodlegram" />
        <div className="text">
          <h1 style={{ color: "#c7e1f0" }}>DOODLEGRAM</h1>
          <p>
            a social media site for doodles? draw, share, and explore doodles
            with your friends
          </p>
          <div className="entry">
            <img src="/icons/wrench.png" alt="pin" />
            <p>react, node.js, express, mongodb, aws, html, css, javascript</p>
          </div>
          <div className="entry">
            <img src="/icons/calendar.png" alt="pin" />
            <p>2021</p>
          </div>
          <div className="entry">
            <img src="/icons/team.png" alt="pin" />
            <p>solo project</p>
          </div>
          <div className="entry buttons">
            <a
              href="https://github.com/jasonpakk/doodlegram-FE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="frontend repo"
            >
              <button>
                <p>frontend repo</p>
              </button>
            </a>
            <a
              href="https://github.com/jasonpakk/doodlegram-BE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="backend repo"
            >
              <button>
                <p>backend repo</p>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="projectDetailRow">
        <div className="text" style={{ width: "95%" }}>
          <div className="title">
            <img src="/icons/rightarrow.png" alt="rightarrow" />
            <h2>SUMMARY</h2>
          </div>

          <p style={{ marginTop: "1vw" }}>
            leveraged both frontend and backend skills as a full-stack developer
            to create a new social media platform for doodles.
          </p>
          <br />
          <p>
            after taking a course on full stack development at school, i wanted
            to apply everything i learned to a project that i could call my own.
            i decided to create a social media platform for doodles, as i
            thought it would be a fun, creative, artistic way to connect with
            others.
          </p>
        </div>
      </div>

      <div className="projectDetailRow">
        <div className="text">
          <div className="title">
            <img src="/icons/rightarrow.png" alt="rightarrow" />
            <h2>BACKGROUND</h2>
          </div>

          <ul>
            <li>
              <strong>found:</strong> doodling can have many benefits
              <ul>
                <li>improve memory, creativity, and focus</li>
                <li>relieve stress and anxiety</li>
                <li>reflect on thoughts and emotions through art</li>
              </ul>
            </li>
            <li>
              <strong>reduces:</strong> pressure and expectations of traditional
              social media
              <ul>
                <li>
                  doodling implies a casual, fun, and low-stakes environment
                </li>
                <li>no need to take perfect photos or write long captions</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="photo">
          <img
            className="wide"
            src="https://github.com/jasonpakk/doodlegram-FE/blob/main/src/assets/demo.gif?raw=true"
            alt="doodlegram"
          />
          <p>demo of doodlegram - draw and share!</p>
        </div>
      </div>

      <div className="projectDetailRow">
        <div className="text">
          <div className="title">
            <img src="/icons/rightarrow.png" alt="rightarrow" />
            <h2>APPROACH</h2>
          </div>

          <ul>
            <li>
              <strong>stack:</strong> mern
            </li>

            <li>
              <strong>frontend:</strong> react
              <ul>
                <li>
                  create interactive, dynamic user interface to draw and share
                  doodles
                </li>
                <li>redux for state management</li>
              </ul>
            </li>
            <li>
              <strong>backend:</strong> node.js, express, mongodb
              <ul>
                <li>
                  create restful api to handle authentication, doodle creation +
                  retrieval
                </li>
                <li>mongoose for mongodb object modeling</li>
                <li>store doodles in aws s3 to save space</li>
                <li>manage user information in mongodb</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="photo">
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDI4NW0wd2Y1Y2MzZWI1NXppaHRqNG16anlhc3BxZm5oYTVqODFrMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9n58dfrlP0lZETdsbD/giphy.gif"
            alt="doodlegram"
          />
          <p>
            used react-canvas-draw library for an interactive drawing interface
          </p>
        </div>
      </div>

      <div className="projectDetailRow">
        <div className="photo">
          <img
            className="wide"
            src="/projects/doodlegram/3.png"
            alt="doodlegram"
          />
          <p>profile page w/ bio + your doodles</p>
        </div>
        <div className="photo">
          <img src="/projects/doodlegram/1.png" alt="doodlegram" />
          <p>interface to create your doodles</p>
        </div>
        <div className="photo">
          <img
            className="wide"
            src="/projects/doodlegram/2.png"
            alt="doodlegram"
          />
          <p>gallery to see doodles by your friends</p>
        </div>
      </div>

      <p className="backtotop" onClick={() => handleScroll()}>
        ↑ back to top ↑
      </p>
    </div>
  );
}
