"use client";
import { useRouter } from "next/navigation";
import "../styles.scss";

export default function SpaceColony() {
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
        <img src="/projects/spacecolony.png" alt="space colony" />
        <div className="text">
          <h1>SPACE COLONY</h1>
          <p>
            farm, harvest, and build a thriving colony...except it's in outer
            space. no pressure :]
          </p>
          <div className="entry">
            <img src="/icons/wrench.png" alt="pin" />
            <p>unity, c#, maya, figma</p>
          </div>
          <div className="entry">
            <img src="/icons/calendar.png" alt="pin" />
            <p>2023</p>
          </div>
          <div className="entry">
            <img src="/icons/team.png" alt="pin" />
            <p>team of 5 devs and modelers</p>
          </div>
          <div className="entry buttons">
            <a
              href="https://github.com/andrewwchen/colony"
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
            similar to stardew valley, where you can farm and maintain animals,
            but in outer space + virtual reality + 3d!
          </p>
          <br />
          <p>
            completed as a culminating project in the mixed reality course i was
            taking - worked in a team of 3 devs and 2 modelers
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
              <strong>goal:</strong> recreate a farming game in virtual reality
              <ul>
                <li>environment of outer space</li>
                <li>growth of plants and animals based on daily cycles</li>
                <li>maintenance required, otherwise colony will fail</li>
                <li>currency system to buy and sell resources</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/qVChgCFsS1k?si=0ZGJGUHtSwPC16Rn"
            title="Space Colony Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <p>watch a demo of how you can grow a colony in outer space!</p>
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
          <img
            className="wide"
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGluZmJ5bnBjd3RjOTE1dGVsM3Jtc2Jrbm5zM2FoeHk2MmQ1aGs1YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QTrcJiuNDo6no3aHPu/giphy.gif"
            alt="space colony"
          />
          <p>environment cycles between day and night to affect growth</p>
        </div>
      </div>

      <div className="projectDetailRow">
        <div className="photo">
          <img
            className="wide"
            src="https://media.giphy.com/media/0TwoXuM3gnwjeJKb2B/giphy.gif"
            alt="space colony"
          />
          <p>futuristic UI for users to interact with shop and items</p>
        </div>
        <div className="photo">
          <img src="/projects/spacecolony/1.png" alt="space colony" />
          <p>shop with various inventory and a currency system</p>
        </div>
        <div className="photo">
          <img src="/projects/spacecolony/2.png" alt="space colony" />
          <p>users can buy, feed, and gain resources by maintaing animals</p>
        </div>
      </div>

      <div className="projectDetailRow">
        <div className="photo">
          <img
            className="wide"
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTR5bml3NXMwaGk0MGN2ZnpvdndpbHV4dnIydnM4MW1qNW4zdGFkbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ym9dxZOxmMbGR1iTHJ/giphy.gif"
            alt="space colony"
          />
          <p>all done! :o</p>
        </div>
        <div className="text">
          <div className="title">
            <img src="/icons/rightarrow.png" alt="rightarrow" />
            <h2>FINAL</h2>
          </div>

          <ul>
            <li>
              <strong>publish:</strong> ensure users can use and download our
              game onto their own VR headsets
            </li>
            <li>
              <strong>showcase</strong>: demo-ed our project at dartmouth's
              termly tech exhibition
              <ul>
                <li>
                  allowed users to interact with our game and provide feedback
                </li>
                <li>
                  tech exhibition was attended by 400+ students, faculty, and
                  community members
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
