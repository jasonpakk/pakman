import { useState } from "react";
import compositionsList from "./data";
import SoundCloudPlayer from "./soundcloud";

export default function Compositions() {
  const [selectedComposition, setSelectedComposition] = useState(
    compositionsList["VIOLA, CELLO, PIANO"][0] // Default selection
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage("");
  };

  return (
    <>
      <div className="compositions">
        <div id="header">
          <h2>arrangements</h2>
          <img src="/icons/music.png" alt="music" />
        </div>

        <div id="content">
          <div id="list">
            {Object.keys(compositionsList).map((instrumentation) => (
              <div className="section" key={instrumentation}>
                <div className="sectionHeader">
                  <img src="/icons/rightarrow.png" alt="music" />
                  <p>for</p>
                  <h3>{instrumentation}</h3>
                </div>
                <ul>
                  {compositionsList[instrumentation].map(
                    (composition, index) => (
                      <li
                        key={index}
                        onClick={() => setSelectedComposition(composition)}
                        className={
                          composition.title === selectedComposition.title &&
                          composition.instrumentation ===
                            selectedComposition.instrumentation
                            ? "selected"
                            : ""
                        }
                      >
                        <p className="title">
                          ♪&nbsp;&nbsp;&nbsp;{composition.title}
                        </p>
                        <p className="composer">{composition.composer}</p>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>

          <div id="preview">
            <img
              id="note1"
              className="note"
              src="/icons/note.png"
              alt="music"
            />
            <img
              id="note2"
              className="note"
              src="/icons/note.png"
              alt="music"
            />
            <div className="text">
              <h3>{selectedComposition.title}</h3>
              <p className="subtext">{selectedComposition.subtext}</p>
              <div id="composer">
                <img src="/icons/person.png" alt="composer" />
                <p>{selectedComposition.composer}</p>
              </div>
            </div>
            <div
              id="samplePage"
              onClick={() => openModal(selectedComposition.samplePage)}
            >
              <img src={selectedComposition.samplePage} alt="music" />
              <p>sample page</p>
            </div>

            {selectedComposition.watch && (
              <a
                href={selectedComposition.watch}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="watch video"
                className="listen available"
              >
                <img src="/icons/play.png" alt="music" />
                <p>watch</p>
              </a>
            )}

            {selectedComposition.listen && (
              <SoundCloudPlayer trackUrl={selectedComposition.listen} />
            )}

            {!selectedComposition.watch && !selectedComposition.listen && (
              <div className="listen">
                <img src="/icons/play.png" alt="music" />
                <p>coming soon</p>
              </div>
            )}
            <div id="instrumentation">
              <img src="/bio/viola.png" alt="instrumentation" />
              <p style={{ fontWeight: "100" }}>for</p>
              <p>{selectedComposition.instrumentation}</p>
            </div>
          </div>
        </div>

        {modalOpen && (
          <div className="modal" onClick={closeModal}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={modalImage} alt="sample page enlarged" />
            </div>
          </div>
        )}
      </div>
      <p id="contactText">
        <a
          href="mailto:jaeyoung.pak8@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="email"
        >
          contact me
        </a>{" "}
        for any inquiries
      </p>
    </>
  );
}
