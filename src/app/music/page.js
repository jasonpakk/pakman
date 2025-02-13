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
            I double-majored in music + computer science at Dartmouth, where I
            earned high honors for my thesis on arrangements and transcriptions.
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
              text="with my friends from the program!"
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
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExenV1dDk0MjVnOWQ4Z3FzaTdiczJ2MHR3djdyazFubXpzdzA5Yzh4bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XiCKHfN7ESnnht1YG8/giphy.gif"
            alt="performances"
          />
          <p>in rehearsal as a soloist with the dartmouth symphony orchestra</p>
        </div>
      </div>

      <div className="musicRow videoSamples">
        <div className="video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/tUo7kLDjtFQ?si=EWFdKtBc_2QIa_-Q"
            title="Clarke Viola Sonata"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <p>sonata for viola + piano, by rebecca clarke</p>
        </div>
        <div className="video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/4bydyqrdc08?si=Uohf31XZkQtN4HDM"
            title="Souvenir de Florence"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <p>
            tchaikovsky's souvenir de florence, performed at the kennedy
            center's millennium stage
          </p>
        </div>
        <div className="video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/PQb8vSSSEzA?si=0rN2ljmduOY3V-Pu&amp;start=368"
            title="NSO-SMI"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <p>
            don juan + brahms 1 with the national symphony's summer music
            institute
          </p>
        </div>
      </div>

      <div className="musicRow videoSamples" style={{ margin: "8vw 0" }}>
        <div className="video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/qP1NytR8urI?si=JTqo_2GjbN0XNFsx&amp;start=4"
            title="NSO-SMI"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <p>b rossette arranged for piano quintet!</p>
        </div>
        <div className="video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/E1wcT70dbjI?si=HgIpeXz60Z9HdIma&amp;start=2"
            title="NSO-SMI"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <p>
            dobon's spin on "pop! goes the weasel" rearranged for viola trio
          </p>
        </div>
        <div className="text" style={{ textAlign: "right", width: "30%" }}>
          <h2>COMPOSING</h2>
          <p>
            I arrange music to play with the ensembles that I play with.
            Currently, my viola trio and ext description goes here
            akjflkdjlkfsdj jdskfljdlfjdslk.
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
