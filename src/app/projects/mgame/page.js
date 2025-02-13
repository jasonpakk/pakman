"use client";
import { useRouter } from "next/navigation";
import "../styles.scss";

export default function MGame() {
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
        <img src="/projects/mgame.png" alt="mGAME" />
        <div className="text">
          <h1 style={{ color: "#cbf9fd" }}>mGAME</h1>
          <p>
            set measurable goals and track your progress with your healthcare
            provider
          </p>
          <div className="entry">
            <img src="/icons/wrench.png" alt="pin" />
            <p>react, express, node.js, firebase, html, css, javascript</p>
          </div>
          <div className="entry">
            <img src="/icons/calendar.png" alt="pin" />
            <p>2023</p>
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
            as a developer for the dali lab, i was contracted to develop a new
            web application for dartmouth-hitchcock medical center
          </p>
          <br />
          <p>
            healthcare providers and patients needed a way to set measurable
            goals and a way to track progress towards to improve the healthcare
            experience.
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
              <strong>found:</strong> difficulty in tracking patient progress
              <ul>
                <li>unmeasurable, unclear on difference between visits</li>
                <li>no motivation for patients to improve</li>
              </ul>
            </li>
            <li>
              <strong>lacks:</strong> application to have patients set detailed,
              measurable goals
              <ul>
                <li>
                  must also meet <strong>HIPAA compliance</strong>
                </li>
              </ul>
            </li>
            <li>
              patients said there was no <strong>motivation</strong> to
              continue:
              <ul>
                <li>no way to track progress</li>
                <li>no way to see improvement</li>
                <li>want to capture their goals in a personalized way</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="photo">
          <img className="wide" src="/projects/mgame/1.png" alt="mgame" />
          <p>
            presenting mGAME, a platform to set goals using the SMART framework
          </p>
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
              <strong>leverage:</strong> SMART framework
              <ul>
                <li>specific, measurable, achievable, relevant, time-bound</li>
                <li>no more vauge goals like "i want my leg to heal"</li>
                <li>
                  now say "i want to be able to walk my daughter down the aisle
                  for the wedding in june"
                </li>
              </ul>
            </li>
            <li>
              <strong>patient view:</strong> see progress over time
              <ul>
                <li>
                  set checkpoints to track progress towards goal completion
                </li>
                <li>see improvement over time</li>
              </ul>
            </li>
            <li>
              <strong>provider view:</strong> organized view of progress across
              all patients
              <ul>
                <li>prevent forgetting about patient goals and progress</li>
                <li>history of patient progress</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="photo">
          <img
            className="wide"
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2R0NzV6djhoaGVudnJsdnd6dDB3dTFvbHZvaG9lbm5ic25ieTljZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LWxgTX4enIkzUcJHTB/giphy.gif"
            alt="mgame"
          />
          <p>goal setting interface with interactive questions</p>
        </div>
      </div>

      <div className="projectDetailRow">
        <div className="photo">
          <img className="wide" src="/projects/mgame/3.png" alt="mgame" />
          <p>recovery summary view to track progress</p>
        </div>
        <div className="text">
          <div className="title">
            <img src="/icons/rightarrow.png" alt="rightarrow" />
            <h2>DEVELOPMENT</h2>
          </div>

          <ul>
            <li>
              <strong>stack:</strong> fern
            </li>

            <li>
              <strong>frontend:</strong> react
              <ul>
                <li>
                  create interactive user interface for goal setting and
                  tracking
                </li>
                <li>redux for state management</li>
              </ul>
            </li>
            <li>
              <strong>backend:</strong> node.js, express, firebase
              <ul>
                <li>
                  create restful api to handle authentication and necessary
                  endpoints
                </li>
                <li>
                  ensure <strong>HIPAA compliance</strong> with firebase
                </li>
              </ul>
            </li>
            <li>
              <strong>delivery:</strong> from design to release in 10 weeks
              <ul>
                <li>launched beta version to meet client goals</li>
                <li>
                  effectively handed off the code for future development teams
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
