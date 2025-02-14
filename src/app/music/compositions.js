import { useState } from "react";
import compositionsList from "./data";

export default function Compositions() {
  const [selectedComposition, setSelectedComposition] = useState(
    compositionsList["3 VIOLAS"][0] // Default selection
  );

  return (
    <div className="compositions">
      <div id="header">
        <h2>works list</h2>
        <img src="/icons/music.png" alt="music" />
      </div>

      <div id="content">
        <div id="list">
          {Object.keys(compositionsList).map((instrumentation) => (
            <div className="section" key={instrumentation}>
              <div className="sectionHeader">
                <img src="/icons/music.png" alt="music" />
                <p>for</p>
                <h3>{instrumentation}</h3>
              </div>
              <ul>
                {compositionsList[instrumentation].map((composition, index) => (
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
                    <p>→</p>
                    <p className="title">{composition.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div id="preview">
          <img id="note1" className="note" src="/icons/note.png" alt="music" />
          <img id="note2" className="note" src="/icons/note.png" alt="music" />

          <div className="text">
            <h3>{selectedComposition.title}</h3>
            <p className="subtext">{selectedComposition.subtext}</p>
            <div id="composer">
              <img src="/icons/person.png" alt="composer" />
              <p>{selectedComposition.composer}</p>
            </div>
          </div>

          <div id="samplePage">
            <img src={selectedComposition.samplePage} alt="music" />
            <p>sample page</p>
          </div>

          <div id="listen">
            <img src="/icons/play.png" alt="music" />
            <p>listen</p>
          </div>

          <div id="instrumentation">
            <img src="/bio/viola.png" alt="instrumentation" />
            <p style={{ fontWeight: "100" }}>for</p>
            <p>{selectedComposition.instrumentation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
