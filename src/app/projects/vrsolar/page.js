"use client";
import { useRouter } from "next/navigation";
import "../styles.scss";

export default function VRSolarSystem() {
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
        <img src="/projects/vrsolar.png" alt="solar system" />
        <div className="text">
          <h1 style={{ color: "#bfbdbd" }}>VR SOLAR SYSTEM</h1>
          <p>
            experience the scale of the solar system, watching revolutions and
            rotations at scale
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
            <p>team of 3</p>
          </div>
          <div className="entry buttons">
            <a
              href="https://github.com/jasonpakk/VR_SolarSystem"
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
        <div className="text" style={{ width: "95%" }}>
          <div className="title">
            <img src="/icons/rightarrow.png" alt="rightarrow" />
            <h2>SUMMARY</h2>
          </div>

          <p style={{ marginTop: "1vw" }}>
            this was my first project working within the realm of virtual
            reality.
          </p>
          <br />
          <p>
            i worked with one other developer and a modeler to leverage the
            power of virtual reality to create an immersive experience of the
            solar system.
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
              <strong>experience:</strong> the scale of the solar system in VR
              <ul>
                <li>
                  understand the differences in size and distance of planets
                </li>
                <li>watch the revolutions and rotations of planets at scale</li>
              </ul>
            </li>
            <li>
              <strong>enable:</strong> users to view statistics of each planet
              <ul>
                <li>
                  ability to change values to see how it affects the planet's
                  orbit
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/jzn9STFVCxM?si=sRtbcBJJnuA5i10z"
            title="VR Solar System Demo"
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
            <h2>DESIGN</h2>
          </div>

          <ul>
            <li>
              <strong>create:</strong> a realistc model of the solar system
              <ul>
                <li>planets from available modles on unity asset store</li>
                <li>milky way galaxy background</li>
              </ul>
            </li>
            <li>
              <strong>interact:</strong> with a modal to view planet statistics
              <ul>
                <li>change values to see how it affects the planet's orbit</li>
                <li>draggable slider using vr controllers</li>
              </ul>
            </li>
            <li>
              <strong>plot:</strong> user teleports to solar system
              <ul>
                <li>
                  start off in a classroom where user is learning about the
                  solar system
                </li>
                <li>portal opens up for user to teleport to solar system</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="photo">
          <img
            className="wide"
            src="/projects/vrsolar/1.png"
            alt="vr solar system"
          />
          <p>planet assets used for the project</p>
        </div>
      </div>

      <div className="projectDetailRow">
        <div className="photo">
          <img
            className="wide"
            src="/projects/vrsolar/2.png"
            alt="vr solar system"
          />
          <p>
            user starts off in a classroom where they are learning about the
            planets
          </p>
        </div>
        <div className="photo">
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2Q0YWdoN2t5Nm9yMzBtOG51dHNzcXN5NzhqZW15aTVhMGk5MDIzaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zTTH9KIqZ1Oevqr4Em/giphy.gif"
            alt="vr solar system"
          />
          <p>ability to view and change planet statistics</p>
        </div>
        <div className="photo">
          <img className="wide" src="/projects/vrsolar/3.png" alt="botthoven" />
          <p>overall view of the solar system</p>
        </div>
      </div>

      <div className="projectDetailRow">
        <div className="photo">
          <img
            className="wide"
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2c5M2ppeHVtamE2ZnhnMjhvYTlhaXJydmUzaXY0aHpxeGJqOW1sOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hS5OPOzNQnhmvrIkuN/giphy.gif"
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
              <strong>sound:</strong> added sound effects to enhance immersive
              experience
              <ul>
                <li>background music to feel like user is in space</li>
                <li>ui interaction sounds</li>
                <li>teleportation</li>
              </ul>
            </li>
            <li>
              <strong>delpoy</strong> and ensured game is available for users to
              download onto their headsets
              <ul>
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
