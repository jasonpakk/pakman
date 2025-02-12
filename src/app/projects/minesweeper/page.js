"use client";
import { useRouter } from "next/navigation";
import "../styles.scss";

export default function Minesweeper() {
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
        <img src="/projects/minesweeper.png" alt="minesweeper" />
        <div className="text">
          <h1>MINESWEEPER</h1>
          <p>
            program a xylophone-playing robot to perform your favorite tunes
          </p>
          <div className="entry">
            <img src="/icons/wrench.png" alt="pin" />
            <p>java</p>
          </div>
          <div className="entry">
            <img src="/icons/calendar.png" alt="pin" />
            <p>2018</p>
          </div>
          <div className="entry">
            <img src="/icons/team.png" alt="pin" />
            <p>team of 2</p>
          </div>
          <div className="entry buttons">
            <a
              href="https://github.com/jasonpakk/minesweeper"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github repo"
            >
              <button>
                <p>code repo</p>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="projectDetailRow">
        <div className="text">
          <div className="title">
            <img src="/icons/rightarrow.png" alt="rightarrow" />
            <h2>SUMMARY</h2>
          </div>

          <p style={{ marginTop: "1vw" }}>
            as a programmer + musician, i wanted to integrate my two interests
            into a single project.
          </p>
          <br />
          <p>
            senior year of high school, i partnered with my friend to design,
            build, and program a xylophone-playing robot that can perform any
            tune.
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
              <strong>found:</strong> existing instrument-playing robots heavily
              focus on musical technicality
              <ul>
                <li>pitch accuracy, agility, precise timing, etc.</li>
              </ul>
            </li>
            <li>
              <strong>lacks:</strong> the expressive musicianship of a human
              performer
            </li>
            <li>
              humans achieve <strong>musicality</strong> in ways such as:
              <ul>
                <li>
                  <strong>dynamics</strong> - varying volume for emotional
                  expression
                </li>
                <li>
                  <strong>articulation</strong> - differences in clarity and
                  attack of notes
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/9Ag7zkTR_XE?si=SE1SH0--3utFUcaT"
            title="Bot-thoven Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <p>watch bot-thoven perform popular classical tunes</p>
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
              <strong>goal:</strong> build a robot that plays with human-like
              musical expression
            </li>
            <li>
              <strong>instrument of choice:</strong> xylophone
              <ul>
                <li>
                  <strong>why?</strong>
                  can easily strike keys with different force to achieve
                  different musical effects
                </li>
              </ul>
            </li>
            <li>
              <strong>use:</strong> servo motors to strike xylophone keys
              <ul>
                <li>can control force of strike by varying the motor speed</li>
              </ul>
            </li>
            <li>
              <strong>code:</strong> in arduino / c++
              <ul>
                <li>
                  write program to collectively control servo motor based on
                  music note input
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="photo">
          <img src="/projects/botthoven/1.png" alt="botthoven" />
          <p>initial design plan</p>
        </div>
      </div>

      <div className="projectDetailRow">
        <div className="photo">
          <img src="/projects/botthoven/2.png" alt="botthoven" />
          <p>CAD mockup of servo-mallet system</p>
        </div>
        <div className="photo">
          <img src="/projects/botthoven/3.png" alt="botthoven" />
          <p>3d printing servo stands</p>
        </div>
        <div className="photo">
          <img src="/projects/botthoven/4.png" alt="botthoven" />
          <p>finished servo-mallet system</p>
        </div>
      </div>

      <p className="backtotop" onClick={() => handleScroll()}>
        ↑ back to top ↑
      </p>
    </div>
  );
}
