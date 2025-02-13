"use client";
import { useRouter } from "next/navigation";
import "../styles.scss";

export default function WhatTheYap() {
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
        <img src="/projects/whattheyap.png" alt="what the yap" />
        <div className="text">
          <h1 style={{ color: "#fcfaa2" }}>WHAT THE YAP?</h1>
          <p>
            yap to learn! turn your notes into AI-generated flashcards and study
            using just your voice
          </p>
          <div className="entry">
            <img src="/icons/wrench.png" alt="pin" />
            <p>react, express, node.js, firebase, html, css, javascript</p>
          </div>
          <div className="entry">
            <img src="/icons/calendar.png" alt="pin" />
            <p>2024</p>
          </div>
          <div className="entry">
            <img src="/icons/team.png" alt="pin" />
            <p>team of 3</p>
          </div>
          <div className="entry buttons">
            <a
              href="https://devpost.com/software/yabber"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="dev post"
            >
              <button>
                <p>devpost</p>
              </button>
            </a>
            <a
              href="https://www.whattheyap.study/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="project website"
            >
              <button>
                <p>project website</p>
              </button>
            </a>
            <a
              href="https://github.com/b-sheldon/whattheyap"
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
            leveraging the power of AI to help students study more effectively
          </p>
          <br />
          <p>
            in my final term at dartmouth, i decided to participate in
            dartmouth's annual hackathon. the theme was "blast from the past",
            so our team combined old study techniques with new technology to
            create "what the yap?" -{" "}
            <strong style={{ fontWeight: "bold" }}>
              which won first prize!
            </strong>
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
              <strong>found:</strong> preparing materials to study with is time
              consuming
              <ul>
                <li>manually have to rewrite notes to create flashcards</li>
                <li>
                  limited time to study for an exam, need a faster way to create
                  study materials
                </li>
                <li>
                  students want practice materials to study with, but it isn't
                  provided by professors
                </li>
              </ul>
            </li>
            <li>
              <strong>also found:</strong> verbalizing study material can
              significantly enhance learning outcomes
              <ul>
                <li>speaking out loud can help with understanding</li>
                <li>
                  engage in multiple cognitive processes that aid in memory
                  retention
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/jO4EMSMkdsw?si=GeMow4dxUbzSZxZH"
            title="What the Yap? Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <p>
            demo of auto-generating study materials + studying with your voice
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
              <strong>goal:</strong> facilitate creating study materials and
              leverage verbalization to enhance learning
            </li>
            <li>
              <strong>frontend:</strong> react
              <ul>
                <li>
                  create interactive user interface to upload notes and study
                </li>
              </ul>
            </li>
            <li>
              <strong>backend:</strong> node.js, express, firebase
              <ul>
                <li>
                  create api to handle user requests to generate flashcards
                </li>
                <li>store user data and study materials in firebase</li>
                <li>write functions to invoke external apis</li>
              </ul>
            </li>
            <li>
              <strong>use:</strong> openai's gpt-3, azure speech sdk
              <ul>
                <li>
                  openai's gpt-3 to generate flashcards and practice questions
                </li>
                <li>
                  azure speech sdk to generate voice commands and interpret user
                  voice inputs
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="photo">
          <img
            className="wide"
            src="/projects/whattheyap/1.png"
            alt="what the yap"
          />
          <p>welcome to what the yap?!</p>
        </div>
      </div>

      <div className="projectDetailRow">
        <div className="photo">
          <img
            className="wide"
            src="/projects/whattheyap/2.png"
            alt="what the yap"
          />
          <p>users can paste or upload file(s) of their notes</p>
        </div>
        <div className="photo">
          <img
            className="wide"
            src="/projects/whattheyap/3.png"
            alt="what the yap"
          />
          <p>flashcards are auto-generated and users can edit or add more</p>
        </div>
        <div className="photo">
          <img
            className="wide"
            src="/projects/whattheyap/4.png"
            alt="what the yap"
          />
          <p>always study w/ a new set of questions + use your voice!</p>
        </div>
      </div>

      <div className="projectDetailRow">
        <div className="photo">
          <img
            className="long"
            src="/projects/whattheyap/5.jpg"
            alt="what the yap"
          />
          <p>after an all-nighter with lots of caffeine, we won first prize!</p>
        </div>
        <div className="text">
          <div className="title">
            <img src="/icons/rightarrow.png" alt="rightarrow" />
            <h2>FINAL</h2>
          </div>

          <ul>
            <li>
              <strong>publish:</strong> ensure users can use and access our
              site, deployed and made it public facing
            </li>
            <li>
              <strong>showcase</strong>: demo-ed our project to hackathon judges
              <ul>
                <li>
                  demonstrated end-to-end functionality with elevator pitch
                </li>
                <li>
                  allowed judges to input their own notes, papers, and articles
                </li>
              </ul>
            </li>
            <li>
              <strong>results:</strong> we were announced as winners of
              hackdartmouth ix !
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
