"use client";
import { useRouter } from "next/navigation";
import "../styles.scss";

export default function TerraceSurvival() {
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
        <img src="/projects/terrace.png" alt="terrace survival" />
        <div className="text">
          <h1 style={{ color: "#477ef5" }}>TERRACE SURVIVAL</h1>
          <p>
            to win, you must do ~whatever~ it takes to survive on a deserted
            terrace
          </p>
          <div className="entry">
            <img src="/icons/wrench.png" alt="pin" />
            <p>unity, c#, maya</p>
          </div>
          <div className="entry">
            <img src="/icons/calendar.png" alt="pin" />
            <p>2023</p>
          </div>
          <div className="entry">
            <img src="/icons/team.png" alt="pin" />
            <p>worked with a modeler</p>
          </div>
          <div className="entry buttons">
            <a
              href="https://github.com/jasonpakk/terrace-survival"
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
            this was the first project i made in unity!
          </p>
          <br />
          <p>
            i worked with a modeler who created a 3d model of a terrace, and we
            created a survival-based game where the player must scavenge the
            resources on the terrace to save themselves from starvation.
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
              <strong>leverage:</strong> low-poly design for fun, yet futuristic
              look
              <ul>
                <li>add unexpected game events to keep player engaged</li>
                <li>success is based on interactions with the environment</li>
              </ul>
            </li>

            <li>
              first time working in <strong>unity</strong>:
              <ul>
                <li>
                  leverage simple character movements and collision detection to
                  interact with items
                </li>
                <li>
                  implement game logic to track player health and resources
                </li>
                <li>
                  crete a storage system to keep track of player inventory
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/THqoeknpMg0?si=iZEKpk9_IdDiHBM8"
            title="Terrace Survival Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <p>
            watch a demo of how to save yourself from starvation out in the
            terrace!
          </p>
        </div>
      </div>

      <div className="projectDetailRow">
        <div className="text">
          <div className="title">
            <img src="/icons/rightarrow.png" alt="rightarrow" />
            <h2>DESIGN</h2>
          </div>

          <ul>
            <li>
              worked with a modeler who created all the necessary assets for the
              game
              <ul>
                <li>
                  <strong>terrace</strong>
                  environment for player to explore, scavenge, and survive
                </li>
                <li>
                  <strong>items</strong> the player can interact with to survive
                </li>
                <li>
                  <strong>environmental</strong> assets like trees and pillars
                </li>
              </ul>
            </li>
            <li>
              <strong>prototype:</strong> integrate assets with player logic
              <ul>
                <li>ensure player can move around the terrace</li>
                <li>detect collisions with items</li>
                <li>implement necssary lighting and shading</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="photo">
          <img
            className="long"
            src="/projects/terracesurvival/1.png"
            alt="terrace survival"
          />
          <p>initial design of terrace</p>
        </div>
      </div>

      <div className="projectDetailRow">
        <div className="photo">
          <img
            className="wide"
            src="/projects/terracesurvival/2.png"
            alt="terrace survival"
          />
          <p>model of final terrace with a low-poly, marble-look</p>
        </div>
        <div className="photo">
          <img src="/projects/terracesurvival/3.png" alt="terrace survival" />
          <p>additional environmental and interactive objects</p>
        </div>
        <div className="photo">
          <img
            className="wide"
            src="https://media.giphy.com/media/XjQUmEHyxtUFqWKniA/giphy.gif"
            alt="terrace survival"
          />
          <p>prototyping gameplay within terrace with simple cubes</p>
        </div>
      </div>

      <div className="projectDetailRow">
        <div className="text">
          <div className="title">
            <img src="/icons/rightarrow.png" alt="rightarrow" />
            <h2>DEVELOPMENT</h2>
          </div>

          <ul>
            <li>
              <strong>inventory:</strong> manage player resources
              <ul>
                <li>add items to inventory when player interacts with them</li>
                <li>remove items from inventory when player uses them</li>
                <li>trigger game events based on inventory and items used</li>
              </ul>
            </li>
            <li>
              <strong>particle effects:</strong> low-poly fire and smoke
            </li>
            <li>
              <strong>gameplay:</strong>
              <ul>
                <li>sound effects and intro typewriter text</li>
                <li>player health and resource tracking</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="photo">
          <img
            className="wide"
            style={{ width: "33vw" }}
            src="/projects/terracesurvival/5.png"
            alt="terrace survival"
          />
          <p>full shot of game environment</p>
        </div>
      </div>

      <div className="projectDetailRow">
        <div className="photo">
          <img
            className="wide"
            src="https://media.giphy.com/media/O5q7a8MMCOAm9CiAXB/giphy.gif"
            alt="terrace survival"
          />
          <p>all done :0</p>
        </div>
        <div className="text">
          <div className="title">
            <img src="/icons/rightarrow.png" alt="rightarrow" />
            <h2>FINAL</h2>
          </div>

          <ul>
            <li>
              finished a complete game within my first weeks of working in
              unity!
            </li>

            <li>
              <strong>compiled</strong> and shareable game for others to play
              <ul>
                <li>
                  converted to an executable format for windows and mac users to
                  test and play
                </li>
                <li>
                  shared with classmates, friends, and professor for feedback
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <p className="backtotop" onClick={() => handleScroll()}>
        ↑ back to top ↑
      </p>
    </div>
  );
}
