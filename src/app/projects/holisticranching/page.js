"use client";
import { useRouter } from "next/navigation";
import "../styles.scss";

export default function HolisticRanching() {
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
        <img src="/projects/holistic.png" alt="holistic ranching" />
        <div className="text">
          <h1 style={{ color: "#aff3e5" }}>HOLISTIC RANCHING</h1>
          <p>helping ranchers manage their cattle in a sustainable way</p>
          <div className="entry">
            <img src="/icons/wrench.png" alt="pin" />
            <p>react, express, node.js, mongodb, html, css, javascript</p>
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
            as a developer for the dali lab, i was contracted to develop a new
            web application for holistic management international
          </p>
          <br />
          <p>
            as an international organization that helps ranchers manage their
            cattle in a sustainable way, holistic management international
            needed a new web application to help ranchers track their cattle and
            manage their land
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
              <strong>learned:</strong> ranchers need an organized way to manage
              their cattle
              <ul>
                <li>
                  hundreds of cattle to track with different breeding cycles
                </li>
                <li>land to manage and rotate for sustainable grazing</li>
                <li>collect bcs score and track over time for each cow</li>
              </ul>
            </li>
            <li>
              <strong>lacks:</strong> a technological tool to systematically
              collect data that is also user friendly
            </li>
          </ul>
        </div>
        <div className="photo">
          <img
            className="wide"
            src="/projects/holistic/1.png"
            alt="holistic ranching"
          />
          <p>initial design for holistic ranching</p>
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
              <strong>goal:</strong> define a system to easily measure and track
              data for hundreds of cattle audit
            </li>
            <li>
              <strong>leverage:</strong> visual design to make data collection
              <ul>
                <li>
                  <strong>why?</strong>
                  users had difficulty understanding holistic management
                  guidelines, such as scoring cattle on a body condition scale
                </li>
                <li>
                  visual diagrams and user intuitive data input interfaces ease
                  the understanding for users
                </li>
              </ul>
            </li>
            <li>
              <strong>ensure:</strong> application is user friendly and
              accessible in remote areas
              <ul>
                <li>
                  if collecting data in remote areas, ensure offline access
                </li>
                <li>prevent data loss with automatic data syncing</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="photo">
          <img
            className="wide"
            src="https://media.giphy.com/media/b8ISw6C8bcvmdpv3b6/giphy.gif"
            alt="holistic ranching"
          />
          <p>simple system to measure, track, and audit cattle data</p>
        </div>
      </div>

      <div className="projectDetailRow">
        <div className="photo">
          <img
            className="wide"
            src="/projects/holistic/2.png"
            alt="holistic ranching"
          />
          <p>final design for holistic ranching</p>
        </div>
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
              <strong>frontend:</strong> react
              <ul>
                <li>create interactive user interface for data collection</li>
                <li>redux for state management</li>
                <li>
                  support offline access with local storage, trigger sync when
                  back online
                </li>
                <li>
                  implement calendar and data visualization libraries for user
                </li>
              </ul>
            </li>
            <li>
              <strong>backend:</strong> node.js, express, mongodb
              <ul>
                <li>
                  create restful api to handle authentication and necessary
                  endpoints
                </li>
                <li>mongoose for mongodb object modeling</li>
              </ul>
            </li>
            <li>
              <strong>delivery:</strong> from design to release in 10 weeks
              <ul>
                <li>launched beta version to meet client goals</li>
                <li>effectively handed off the code for future development</li>
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
