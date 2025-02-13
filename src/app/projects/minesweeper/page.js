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
          <h1 style={{ color: "#bfbdbd" }}>MINESWEEPER</h1>
          <p>a classic: click wisely, or boom! the thrill never gets old</p>
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
            the first programming language i learned was java: i learned it in
            my high school's computer science class.
          </p>
          <br />
          <p>
            during the class, if we finished our work early, we had free time to
            do whatever we wanted. me and my friend would always play
            minesweeper to pass the time.
          </p>
          <br />
          <p>
            when it was announced that our final project would be to create a
            game, we knew exactly what we wanted to recreate :]!
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
              <strong>learned:</strong> object-oriented programming in java
              <ul>
                <li>data structures such as arrays, lists, maps</li>
                <li>recursion, loops, conditionals</li>
                <li>abstraction, polymorphism</li>
                <li>GUIs</li>
              </ul>
            </li>
            <li>
              <strong>found:</strong> minesweeper to encompass all these topics,
              making it the perfect culminating project
              <ul>
                <li>data structures for game board and components</li>
                <li>
                  recursion for revealing empty spaces, loops and conditionals
                  for game logic
                </li>
                <li>use of file i/o for high scores</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="photo">
          <img
            className="wide"
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM25rOXM1aGpmbnFtOG5pZjcycTJsbjBtcGluc3k4c2xhcTd0c3B5NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l3V0GQMoaDLVbjXEI/giphy.gif"
            alt="minesweeper"
          />
          <p>our goal was to recreate minesweeper using java</p>
        </div>
      </div>

      <div className="projectDetailRow">
        <div className="photo">
          <img
            className="wide"
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExejV6aDFkbngxbmxna2swdHA4aG5zc3pvYzNlb2FubG04amxnZnl5OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/m1j2MEzdiePlGZ3pDW/giphy.gif"
            alt="minesweeper"
          />
          <p>final result!</p>
        </div>

        <div className="text">
          <div className="title">
            <img src="/icons/rightarrow.png" alt="rightarrow" />
            <h2>APPROACH</h2>
          </div>

          <ul>
            <li>
              <strong>define data structures:</strong> game board, cells, mines,
              empty spaces
              <ul>
                <li>2d array for game board</li>
                <li>cell object for each cell</li>
                <li>
                  polymorphism with cells being either mine, a number, or empty
                </li>
              </ul>
            </li>
            <li>
              <strong>implement game logic:</strong> reveal cells, flag mines,
              handle different mouse click events
              <ul>
                <li>recursion to reveal empty spaces</li>
                <li>loops and conditionals to handle game state</li>
              </ul>
            </li>
            <li>
              <strong>create GUI:</strong> game board, buttons, labels, as well
              as different screens and levels
            </li>
            <li>
              <strong>track high scores</strong>: leverage file i/o to store and
              sort high scores
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
