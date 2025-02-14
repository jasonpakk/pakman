"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "../styles.scss";

export default function ARDrumSet() {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalText, setModalText] = useState("");

  const openModal = (imageSrc, caption) => {
    setModalImage(imageSrc);
    setModalText(caption);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage("");
    setModalText("");
  };

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
        <img src="/projects/ardrum.png" alt="ar drum" />
        <div className="text">
          <h1 style={{ color: "#ffa6a7" }}>AR DRUM SET</h1>
          <p>
            drop a drum set anywhere in your environment and create beats on the
            go
          </p>
          <div className="entry">
            <img src="/icons/wrench.png" alt="pin" />
            <p>unity, c#, vuforia, maya</p>
          </div>
          <div className="entry">
            <img src="/icons/calendar.png" alt="pin" />
            <p>2022</p>
          </div>
          <div className="entry">
            <img src="/icons/team.png" alt="pin" />
            <p>worked with a modeler</p>
          </div>
          <div className="entry buttons">
            <a
              href="https://github.com/jasonpakk/AR-Drumset"
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
            another project integrating my interests as a programmer + musician.
          </p>
          <br />
          <p>
            also an opportunity to learn and develop for augmented reality [ar]!
            from pokemon go, to google translate, ar has been a growing field in
            tech.
          </p>
          <br />
          <p>
            i wanted to explore how i could use ar to create a fun and
            interactive music experience, so i partnered with a modeler to
            create an ar drum set.
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
              <strong>found:</strong> people want to learn the drums, but it
              isn't always accessible
              <ul>
                <li>
                  <strong>expensive:</strong> as even instruments for beginners
                  start in the hundreds
                </li>
                <li>
                  <strong>bulky:</strong> drum sets take up a lot of space and
                  are difficult for one person to transport
                </li>
                <li>
                  <strong>noisy:</strong> difficult to practice without
                  disrupting others
                </li>
              </ul>
            </li>
            <li>
              <strong>lacking:</strong> accessible ways to play and create drum
              tracks
              <ul>
                <li>drum tracks are the backbone of many songs</li>
                <li>
                  easy to get started, as it doesn't required learning notes or
                  pitches
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/DfeqlA-RrQQ?si=bNInDXBrzxRWzQi0&amp;start=11"
            title="AR Drum Set Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <p>
            watch how you can interact with a drum set directly in your
            environment
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
              <strong>goal:</strong> create an accessible way to play and create
              drum tracks
            </li>
            <li>
              users shoud be able to:
              <ul>
                <li>
                  place a drum set anywhere in their environment and interact
                  with it
                </li>
                <li>easily use their phone and hands to play the drums</li>
                <li>create, record, and save drum tracks</li>
              </ul>
            </li>
            <li>
              <strong>use:</strong> vuforia engine to create ar experience
            </li>
            <li>
              <strong>design + code:</strong> in maya & unity (c#)
              <ul>
                <li>create 3d model of drum set</li>
                <li>create drum sounds and drum set interaction</li>
                <li>create recording and saving functionality</li>
              </ul>
            </li>
          </ul>
        </div>
        <div
          className="photo"
          onClick={() =>
            openModal("/projects/ardrum/1.png", "initial sketches")
          }
        >
          <img className="long" src="/projects/ardrum/1.png" alt="ardrum" />
          <p>initial sketches</p>
        </div>
      </div>

      <div className="projectDetailRow">
        <div className="text">
          <div className="title">
            <img src="/icons/rightarrow.png" alt="rightarrow" />
            <h2>PROTOTYPE</h2>
          </div>

          <ul>
            <li>
              <strong>learn:</strong> how to use vuforia engine to create ar
              <ul>
                <li>
                  integrate with unity with a simple cube to test tracking
                </li>
              </ul>
            </li>
            <li>
              <strong>test:</strong> ar tracking on mobile phone
              <ul>
                <li>ensure ar experience can work using phone camera</li>
                <li>
                  test detection of surfaces and objects, as well as motion
                  tracking
                </li>
              </ul>
            </li>
            <li>
              <strong>design:</strong> interactive drum set experience
              <ul>
                <li>model drum set in maya</li>
                <li>
                  create animations for each interaction with the different
                  parts of the drum set
                </li>
                <li>
                  create vuforia image targets for each part of the drum set
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div
          className="photo"
          onClick={() =>
            openModal(
              "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTQwMTZvdmc0azlraHl3bG5vZDJqZXBpc3VpdmhybXZmbHJ1bXo0NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/caF2FhBhpb5njqE77z/giphy.gif",
              "learning ar using vuforia + unity with simple cube tracking"
            )
          }
        >
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTQwMTZvdmc0azlraHl3bG5vZDJqZXBpc3VpdmhybXZmbHJ1bXo0NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/caF2FhBhpb5njqE77z/giphy.gif"
            alt="ardrum"
            className="wide"
          />
          <p>learning ar using vuforia + unity with simple cube tracking</p>
        </div>
      </div>

      <div className="projectDetailRow">
        <div
          className="photo"
          onClick={() =>
            openModal(
              "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYndweG9wb2tiZDF1MHUwdmoxOTUxZzBvc3AyMTl2anJzcjRnZDA2YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LrukcJQqBdBuYBUIle/giphy.gif",
              "testing ar tracking on a mobile phone"
            )
          }
        >
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYndweG9wb2tiZDF1MHUwdmoxOTUxZzBvc3AyMTl2anJzcjRnZDA2YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LrukcJQqBdBuYBUIle/giphy.gif"
            alt="ardrum"
          />
          <p>testing ar tracking on a mobile phone</p>
        </div>
        <div
          className="photo"
          onClick={() => openModal("/projects/ardrum/2.png", "drum set in ar")}
        >
          <img src="/projects/ardrum/2.png" alt="ardrum" />
          <p>drum set finished by modeler</p>
        </div>
        <div
          className="photo"
          onClick={() => openModal("/projects/ardrum/3.png", "drum set in ar")}
        >
          <img src="/projects/ardrum/3.png" alt="ardrum" />
          <p>image target created to map drum set</p>
        </div>
      </div>

      <div className="projectDetailRow">
        <div
          className="photo"
          onClick={() =>
            openModal(
              "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTBsazRxaGVlODV4cXhxYWd0OXR1MzBnbGtudWwwcmRsbHBwOWVoZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GnDCiHLuGZD7zmrNOM/giphy.gif",
              "all done :0"
            )
          }
        >
          <img
            className="wide"
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTBsazRxaGVlODV4cXhxYWd0OXR1MzBnbGtudWwwcmRsbHBwOWVoZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GnDCiHLuGZD7zmrNOM/giphy.gif"
            alt="drumset"
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
              <strong>integrate:</strong> mobile experience with vuforia + unity
              implementation
            </li>
            <li>
              <strong>map</strong> all parts of the drum set to vuforia image
              <ul>
                <li>
                  trigger animations and sounds when user interacts with each
                  part of the drum set
                </li>
              </ul>
            </li>
            <li>
              <strong>create:</strong> recording and saving functionality
              <ul>
                <li>
                  ensure users can record their drum tracks and save them to
                  their phone
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <p className="backtotop" onClick={() => handleScroll()}>
        ↑ back to top ↑
      </p>

      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="sample page enlarged" />
            <p>{modalText}</p>
          </div>
        </div>
      )}
    </div>
  );
}
