import HoverItem from "../components/hover";
import { useState } from "react";

export default function MusicImages() {
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

  return (
    <div className="musicImages">
      <div className="row">
        <HoverItem
          src="/music/1.jpg"
          alt="music image"
          text="me on my first instrument - a plastic toy piano"
          openModal={openModal}
        />
        <HoverItem
          src="/music/2.jpg"
          alt="music image"
          text="performing at the beautiful o-farm in hanover, nh"
          openModal={openModal}
        />
        <HoverItem
          src="/music/3.jpg"
          alt="music image"
          text="side-by-side rehearsal w/ the national symphony orchestra"
          openModal={openModal}
        />
        <HoverItem
          src="/music/4.jpg"
          alt="music image"
          text="performing on abc-7's good morning washington"
          openModal={openModal}
        />
        <HoverItem
          src="/music/5.jpg"
          alt="music image"
          text="performing as a soloist w/ the dartmouth symphony"
          openModal={openModal}
        />
      </div>
      <div className="row">
        <HoverItem
          src="/music/6.jpg"
          alt="music image"
          text="took a conducting class during my time at dartmouth"
          openModal={openModal}
        />
        <HoverItem
          src="/music/7.jpg"
          alt="music image"
          text="met connie britton during a gig!"
          openModal={openModal}
        />
        <HoverItem
          src="/music/8.jpg"
          alt="music image"
          text="with marcia cassidy, my teacher who greatly influenced my musical journey"
          openModal={openModal}
        />
        <HoverItem
          src="/music/9.jpg"
          alt="music image"
          text="selfie caught mid-performance during my senior recital :]"
          openModal={openModal}
        />
        <HoverItem
          src="/music/10.png"
          alt="music image"
          text="pre-concert warmup at the kennedy center in washington, dc"
          openModal={openModal}
        />
      </div>

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
