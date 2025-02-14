"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MusicImages from "./images";
import HoverItem from "../components/hover";
import Compositions from "./compositions";
import Socials from "../bio/socials";
import "./styles.scss";

export default function Music() {
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
            when I'm not writing code, you'll find me involved with music —
            whether it be playing, listening, or arranging.
          </p>
          <p>
            i play the viola with orchestras in the area and enjoy writing
            arrangements to play with the groups I'm a part of, like my viola
            trio.
          </p>
          <p>feel free to explore my performances and arrangements below!</p>
        </div>
        <img src="/avatar/music.gif" alt="avatar" />
      </div>

      <MusicImages />
      <img className="divider" src="/music/divider1.png" alt="divider" />

      <div className="musicRow">
        <div className="text" style={{ width: "40%" }}>
          <h2>THESIS</h2>
          <p>i double-majored in music & cs at dartmouth.</p>
          <p>
            senior year, i was awarded high honors for my thesis on the
            transcription process of rewriting paul schoenfield's café music to
            perform with my trio of viola, cello, and piano.
          </p>
          <p>feel free to check out our performance of the transcription!</p>
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
              watch a performance of my transcription - rewriting schoenfield's
              café music for viola-cello-piano!
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
              openModal={openModal}
            />
            <HoverItem
              src="/music/abroad2.jpg"
              alt="music image"
              text="at the infamous royal albert hall"
              openModal={openModal}
            />
            <HoverItem
              src="/music/abroad3.jpg"
              alt="music image"
              text="stonehenge :o"
              openModal={openModal}
            />
          </div>
          <div className="row">
            <HoverItem
              src="/music/abroad4.jpg"
              alt="music image"
              text="performing bowen's viola sonata in his hometown"
              openModal={openModal}
            />
            <HoverItem
              src="/music/abroad5.jpg"
              alt="music image"
              text="kitchen rehearsal?!"
              openModal={openModal}
            />
            <HoverItem
              src="/music/abroad6.jpeg"
              alt="music image"
              text="with my friends from the program!"
              openModal={openModal}
            />
          </div>
        </div>
        <div className="text" style={{ textAlign: "right" }}>
          <h2>ABROAD</h2>
          <p>
            in the spring of 2022, i spent a term studying abroad in london, a
            music capital of the world.
          </p>{" "}
          <p>
            i had the opportunity to attend concerts on a daily basis, featuring
            world-renowned musicians and ensembles performing solo, chamber, and
            orchestral works.
          </p>
          <p>
            learning from the best professors in london while immersing myself
            in the city's rich musical culture was an experience i'll never
            forget!
          </p>
        </div>
      </div>

      <div className="musicRow" style={{ marginBottom: "3vw" }}>
        <div className="text">
          <h2>PERFORMANCES</h2>
          <p>
            over the years, i've had the opportunity to perform in a variety of
            solo, chamber, and orchestral performances.
          </p>
          <p>
            highlights have included playing at the kennedy center, performing
            on abc-7 news, side by side rehearsals with the national symphony,
            and soloing with the dartmouth symphony.
          </p>
        </div>
        <div
          className="media"
          onClick={() =>
            openModal(
              "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExenV1dDk0MjVnOWQ4Z3FzaTdiczJ2MHR3djdyazFubXpzdzA5Yzh4bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XiCKHfN7ESnnht1YG8/giphy.gif",
              "in rehearsal as a soloist with the dartmouth symphony orchestra"
            )
          }
        >
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

      <img className="divider" src="/music/divider2.png" alt="divider" />

      <div className="musicRow videoSamples" style={{ margin: "4vw 0" }}>
        <div className="video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/qP1NytR8urI?si=JTqo_2GjbN0XNFsx&amp;start=4"
            title="NSO-SMI"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <p>
            b rossette, a popular soundtrack from a k-drama, rearranged for
            piano quintet!
          </p>
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
            i enjoy arranging music for the groups i play with, such as my viola
            trio.
          </p>
          <p>
            it can be hard to find existing music for such a group of
            instruments, so writing arrangements comes in handy!
          </p>
        </div>
      </div>

      <Compositions />

      <Socials />

      <p id="backtotop" onClick={() => handleScroll()}>
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
