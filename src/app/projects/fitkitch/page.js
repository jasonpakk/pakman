"use client";
import { useRouter } from "next/navigation";
import "../styles.scss";

export default function FitKitch() {
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
        <img src="/projects/fitkitch.png" alt="fitkitch" />
        <div className="text">
          <h1 style={{ color: "#9e5ebf" }}>FITKITCH</h1>
          <p>
            bereal but for fitness! complete daily workouts within the timeframe
            and work with your friends to reveal the surprise recipe
          </p>
          <div className="entry">
            <img src="/icons/wrench.png" alt="pin" />
            <p>
              react native, xcode, express, node.js, mongodb, html, css,
              javascript
            </p>
          </div>
          <div className="entry">
            <img src="/icons/calendar.png" alt="pin" />
            <p>2022</p>
          </div>
          <div className="entry">
            <img src="/icons/team.png" alt="pin" />
            <p>team of 5 devs and designers</p>
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
            asked by a professor at dartmouth to build a new app to motivate
            young people to exercise using the benefits of cognitive health.
          </p>
          <br />
          <p>
            worked with 2 ui/ux designers, a PM, and 2 other developers at the
            DALI Lab to design, develop, and deploy the app for a beta launch in
            10 weeks.
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
              <strong>formerly:</strong> professor came up with an idea for a
              new app
              <ul>
                <li>
                  users play memory games after exercising to collect data on
                  how exercise positively affects cognitive health
                </li>
              </ul>
            </li>
            <li>
              <strong>we did our own research:</strong> found memory games were
              not appealing for users after strenuous exercise
            </li>
            <li>
              <strong>new idea</strong>: inspired by the trending app, bereal
              <ul>
                <li>
                  motivate young people to exercise through community obligation
                  + personalized daily activity goals
                </li>
                <li>
                  work <strong>together</strong> with friends towards a common
                  goal
                </li>
                <li>
                  fitwit becomes <strong>fitkitch</strong>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="photo">
          <img src="/projects/fitkitch/1.png" alt="fitkitch" />
          <p>fitwit, the initial idea proposed by the client</p>
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
              <strong>collaboration:</strong> leverage the power of community to
              motivate users to exercise
              <ul>
                <li>
                  inspired by <strong>cooking:</strong> an activity that brings
                  people together to achieve a collective goal: a well-cooked,
                  seasoned dish
                </li>
                <li>
                  users create/join groups called "kitchens" with their friends
                </li>
              </ul>
            </li>
            <li>
              <strong>personalization:</strong> fitness goals tailored to the
              user
              <ul>
                <li>
                  each user has a daily fitness goal to complete, tailored to
                  their fitness level and preferences
                </li>
                <li>integrated data from apple health kit</li>
              </ul>
            </li>
            <li>
              <strong>mission:</strong> earn ingredients for a surprise recipe
              <ul>
                <li>
                  users who complete their daily goal earn an ingredient for
                  their kitchen
                </li>
                <li>
                  if the kitchen completes the mission, they unlock the overall
                  surprise recipe!
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="photo">
          <img
            className="long"
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzkybW40bWNwdmd3em9teTl0cmcwMmZwdm9qbXpob2FwMmxodmRlNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/H8vnDy9YdgupWhFrl0/giphy.gif"
            alt="fitkitch"
          />
          <p>presenting...fitkitch!</p>
        </div>
      </div>

      <div className="projectDetailRow">
        <div className="photo">
          <img className="wide" src="/projects/fitkitch/2.png" alt="fitkitch" />
          <p>sharing our project at a tech exhibition</p>
        </div>
        <div className="text">
          <div className="title">
            <img src="/icons/rightarrow.png" alt="rightarrow" />
            <h2>DESIGN</h2>
          </div>

          <ul>
            <li>
              the design team created a clean, modern, and engaging interface
            </li>
            <li>
              underwent multiple iterations to ensure the app was user-friendly,
              and positively engaging
            </li>
            <li>
              checkout the full design process at{" "}
              <a
                href="https://justin-chong.com/fitkitch-case-study"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="design portfolio"
              >
                our designer's portfolio here
              </a>
            </li>
          </ul>
        </div>
      </div>

      <img
        src="/projects/fitkitch/3.png"
        alt="botthoven"
        style={{
          width: "70%",
          alignSelf: "center",
          marginTop: "5vw",
          marginBottom: "5vw",
        }}
      />

      <div className="projectDetailRow">
        <div className="text">
          <div className="title">
            <img src="/icons/rightarrow.png" alt="rightarrow" />
            <h2>DEVELOPMENT</h2>
          </div>

          <ul>
            <li>
              <strong>stack:</strong> mern
            </li>

            <li>
              <strong>frontend:</strong> react native
              <ul>
                <li>
                  create interactive user interface to app functionality,
                  implementing onboarding, goal selection, kitchen formation,
                  recipe presentation
                </li>
                <li>redux for state management</li>
                <li>
                  integration with apple healthkit data to track user's fitness
                  progress
                </li>
              </ul>
            </li>
            <li>
              <strong>backend:</strong> node.js, express, mongodb
              <ul>
                <li>
                  create restful api to handle authentication, kitchen creation,
                  manage user information
                </li>
                <li>mongoose for mongodb object modeling</li>
              </ul>
            </li>
            <li>
              <strong>delivery:</strong> from design to release in 10 weeks
              <ul>
                <li>launched beta version for test users on testflight</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <img
        src="/projects/fitkitch/4.png"
        alt="fitkitch"
        style={{
          width: "70%",
          alignSelf: "center",
          marginTop: "2vw",
          marginBottom: "5vw",
        }}
      />

      <p className="backtotop" onClick={() => handleScroll()}>
        ↑ back to top ↑
      </p>
    </div>
  );
}
