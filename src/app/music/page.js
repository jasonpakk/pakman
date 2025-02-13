"use client";
import { useRouter } from "next/navigation";
import MusicImages from "./images";
import HoverItem from "../components/hover";
import "./styles.scss";

export default function Music() {
  const router = useRouter();

  const handleScroll = () => {
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 200);
    return () => clearTimeout(timeout);
  };

  return (
    <div id="musicPage" className="page">
      <div className="pageHeader">
        <div className="title">
          <img src="/pacman/blue.png" alt="blue" />
          <h1>Music</h1>
        </div>

        <button onClick={() => router.push("/pacman")}>
          <img src="/pacman/pacman.png" alt="pacman" />
          <p>Back to Game</p>
        </button>
      </div>

      <div id="avatarHeader">
        <div className="text">
          <p>
            When I'm not writing code, I'm making music — whether it be playing,
            listening, or arranging.
          </p>
          <p>
            I perform viola with local orchestras and love creating arrangements
            to play with the groups I'm part of, like my viola trio.
          </p>
          <p>Feel free to explore my performances and arrangements below!</p>
        </div>
        <img src="/avatar/music.gif" alt="avatar" />
      </div>

      <MusicImages />
      <img className="divider" src="/music/divider1.png" alt="divider" />

      <div className="musicRow">
        <div className="text" style={{ width: "40%" }}>
          <h2>THESIS</h2>
          <p>
            I'm part of a viola trio that arranges and performs music for
            violas. We have a lot of fun playing together and creating new
            arrangements.
          </p>
        </div>

        <div id="thesisMedia" className="media">
          <a
            href="https://search.library.dartmouth.edu/permalink/01DCL_INST/e2iu1t/alma991034102714905706"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="thesis"
          >
            <div id="thesis">
              <img src="/music/dartmouth.png" alt="thesis" />
              <p id="title">T H E S I S</p>
              <p id="description">
                A complete transcription of Paul Schoenfield's Café music for
                piano, viola, and cello trio
              </p>
            </div>
          </a>

          <div className="video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/l7KYLZUCKrU?si=bclF1HjabAW4MbGb"
              title="Cafe Music"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>
              watch a performance of my transaction of cafe music for
              viola-cello-piano!
            </p>
          </div>
        </div>
      </div>

      <div className="musicRow">
        <div id="abroadImages" className="media">
          <div className="row">
            <HoverItem
              src="/music/abroad1.jpg"
              alt="music image"
              text="presenting the dowb string quartet..."
            />
            <HoverItem
              src="/music/abroad2.jpg"
              alt="music image"
              text="at the infamous royal albert hall"
            />
            <HoverItem
              src="/music/abroad3.jpg"
              alt="music image"
              text="stonehenge :o"
            />
          </div>
          <div className="row">
            <HoverItem
              src="/music/abroad4.jpg"
              alt="music image"
              text="performing bowen's viola sonata in his hometown"
            />
            <HoverItem
              src="/music/abroad5.jpg"
              alt="music image"
              text="kitchen rehearsal?!"
            />
            <HoverItem
              src="/music/abroad6.jpeg"
              alt="music image"
              text="wrapping up the program on a dinner cruise"
            />
          </div>
        </div>
        <div className="text" style={{ textAlign: "right" }}>
          <h2>ABROAD</h2>
          <p>
            I also spent a term studying abroad in London, where I had the
            opportunity to perform solo and chamber music while immersing myself
            in the city's vibrant concert scene.
          </p>
        </div>
      </div>

      <div className="musicRow">
        <div className="text">
          <h2>PERFORMANCES</h2>
          <p>
            I'm part of a viola trio that arranges and performs music for
            violas. We have a lot of fun playing together and creating new
            arrangements.
          </p>
        </div>
        <div className="media">
          <img src="/music/hummel.png" alt="performances" />
        </div>
      </div>

      <div className="musicRow">
        <div className="media"></div>
        <div className="text" style={{ textAlign: "right" }}>
          <h2>COMPOSING</h2>
          <p>
            I'm part of a viola trio that arranges and performs music for
            violas. We have a lot of fun playing together and creating new
            arrangements.
          </p>
        </div>
      </div>

      <img className="divider" src="/music/divider2.png" alt="divider" />

      <p id="backtotop" onClick={() => handleScroll()}>
        ↑ back to top ↑
      </p>
    </div>
  );
}
