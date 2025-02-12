"use client";
import { useRouter } from "next/navigation";
import "../styles.scss";

export default function LeafyLearn() {
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
        <img src="/projects/leafylearn.png" alt="leafy learn" />
        <div className="text">
          <h1>LEAFY LEARN</h1>
          <p>
            learn how to code by playing an animal crossing like, aesthetic game
          </p>
          <div className="entry">
            <img src="/icons/wrench.png" alt="pin" />
            <p>unity, c#, figma, maya</p>
          </div>
          <div className="entry">
            <img src="/icons/calendar.png" alt="pin" />
            <p>2024</p>
          </div>
          <div className="entry">
            <img src="/icons/team.png" alt="pin" />
            <p>team of five devs and designers</p>
          </div>
          <div className="entry buttons">
            <a
              href="https://leafylearn.site/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="project website"
            >
              <button>
                <p>project website</p>
              </button>
            </a>
            <a
              href="https://medium.com/dartmouth-cs98/leafylearn-breaking-barriers-in-programming-education-c6537d5d7845"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="medium post"
            >
              <button>
                <p>medium post</p>
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
            wanted to create a game which could help lower the barriers to
            learning how to code by making it approachable and fun.
          </p>
          <br />
          <p>
            senior year at dartmouth, i worked with a team of five to design and
            program an interactive game that teaches individuals coding concepts
            that can be difficult to grasp.
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
              <strong>found:</strong> coding can be an intimidating skill to
              acquire
              <ul>
                <li>
                  survey of 1000 us students found that 35% believe coding is a
                  core life skill
                </li>
              </ul>
            </li>
            <li>
              <strong>however:</strong> many students fear taking an intro cs
              course
              <ul>
                <li>worries of being weeded out in an introductory course</li>
                <li>concerns of not being able to keep up with the material</li>
                <li>
                  difficulty of learning a new language and theoretical concepts
                  simultaneously
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/K-xmWaSaZ88?si=T8MCNKjMXs7pABHF"
            title="Leafy Learn Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <p>watch leafy learn in action!</p>
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
              <strong>goal:</strong> create an entertaining and effective
              teaching experience
              <ul>
                <li>approachable, aesthetic, and story based</li>
                <li>
                  tailored for students to take before learning a programming
                  language
                </li>
              </ul>
            </li>
            <li>
              <strong>no coding languages used</strong>
              <ul>
                <li>
                  <strong>why?</strong>
                  separate learning syntax from learning concepts
                </li>
                <li>
                  <strong>how?</strong> drag and drop blocks to solve puzzles,
                  similar to scratch
                </li>
              </ul>
            </li>
            <li>
              <strong>use:</strong> maya and unity to create the game
            </li>
          </ul>
        </div>
        <div className="photo">
          <img
            className="wide"
            src="/projects/leafylearn/1.png"
            alt="leafy learn"
          />
          <p>initial design plan</p>
        </div>
      </div>

      <div className="projectDetailRow">
        <div className="photo">
          <img
            className="wide"
            src="/projects/leafylearn/2.png"
            alt="leafy learn"
          />
          <p>storyboarding the plot of leary learn</p>
        </div>
        <div className="text">
          <div className="title">
            <img src="/icons/rightarrow.png" alt="rightarrow" />
            <h2>DESIGN</h2>
          </div>
          <ul>
            <li>
              team members experienced in maya, figma, and procreate made the
              assets for the game
              <ul>
                <li>
                  fun + cute characters to guide the user in the game experience
                </li>
                <li>vibrant environment leveraging both 2d + 3d assets</li>
              </ul>
            </li>
            <li>
              <strong>plot:</strong> need to revive the island by solving
              puzzles
              <ul>
                <li>
                  <strong>why?</strong>a story line keeps the user engaged and
                  motivated
                </li>
              </ul>
            </li>
            <li>
              <strong>drag-and-drop:</strong> simple and intuitive way to solve
              puzzles
              <ul>
                <li>no need to type or worry about syntax errors</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="projectDetailRow">
        <div className="photo">
          <img
            className="wide"
            src="/projects/leafylearn/3.png"
            alt="leafylearn"
          />
          <p>initial character designs by modelers</p>
        </div>
        <div className="photo">
          <img
            className="long"
            src="/projects/leafylearn/5.png"
            alt="leafylearn"
          />
          <p>drag-and-drop design for a language-free experience</p>
        </div>
        <div className="photo">
          <img
            className="wide"
            src="/projects/leafylearn/4.png"
            alt="leafylearn"
          />
          <p>assets created by team members for leafy learn environment</p>
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
              <strong>lesson plan:</strong> cover essential programming concepts
              <ul>
                <li>print statements and variable types</li>
                <li>functions, nested functions, parameters</li>
                <li>conditionals and loops</li>
              </ul>
            </li>
            <li>
              <strong>functionality:</strong> complete end-to-end implementation
              of game
              <ul>
                <li>character movement and environment interactions</li>
                <li>all puzzles created and tested</li>
                <li>manage overall game state</li>
                <li>save and load functionality</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="photo">
          <img
            className="wide"
            src="/projects/leafylearn/6.png"
            alt="leafy learn"
          />
          <p>environment becomes revived upon completing lessons</p>
        </div>
      </div>

      <div className="projectDetailRow">
        <div className="photo">
          <img
            className="wide"
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzBkc3E0cG5jbmRidmN4ejk1dTRndzVtNXViOG55NjI2ZGRhZzZlMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yZcXWoejibuYm1MdSC/giphy.gif"
            alt="leafylearn"
          />
          <p>
            walk around and interact with game environment [+ musho follows
            you!]
          </p>
        </div>
        <div className="photo">
          <img src="/projects/leafylearn/8.png" alt="leafylearn" />
          <p>models were finalized by team members with character animations</p>
        </div>
        <div className="photo">
          <img
            className="wide"
            src="/projects/leafylearn/7.png"
            alt="leafylearn"
          />
          <p>
            drag-and-drop coding puzzles with interactive display of results
          </p>
        </div>
      </div>

      <div className="projectDetailRow">
        <div className="photo">
          <img
            className="long"
            src="/projects/leafylearn/9.jpg"
            alt="drumset"
          />
          <p>sharing our project at a tech exhibition</p>
        </div>
        <div className="text">
          <div className="title">
            <img src="/icons/rightarrow.png" alt="rightarrow" />
            <h2>FINAL</h2>
          </div>

          <ul>
            <li>
              <strong>publish:</strong> ensure users can download and play our
              game
              <ul>
                <li>packaged for windows and mac</li>
                <li>website created for users to download</li>
              </ul>
            </li>
            <li>
              <strong>test</strong>: our product for continuous improvement
              <ul>
                <li>
                  implemented game statistics logging to track user retention
                </li>
                <li>
                  played game with cs professor at dartmouth who teaches
                  introductory cs
                </li>
                <li>
                  showcased game at termly dartmouth showcase twice to over 400+
                  people
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
