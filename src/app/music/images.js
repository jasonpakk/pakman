import HoverItem from "../components/hover";

export default function MusicImages() {
  return (
    <div className="musicImages">
      <div className="row">
        <HoverItem
          src="/music/1.jpg"
          alt="music image"
          text="me on my first instrument - a plastic toy piano"
        />
        <HoverItem
          src="/music/2.jpg"
          alt="music image"
          text="performing at the beautiful o-farm in hanover, nh"
        />
        <HoverItem
          src="/music/3.jpg"
          alt="music image"
          text="side-by-side rehearsal w/ the national symphony orchestra"
        />
        <HoverItem
          src="/music/4.jpg"
          alt="music image"
          text="performing on abc-7's good morning washington"
        />
        <HoverItem
          src="/music/5.jpg"
          alt="music image"
          text="performing as a soloist w/ the dartmouth symphony"
        />
      </div>
      <div className="row">
        <HoverItem
          src="/music/6.jpg"
          alt="music image"
          text="took a conducting class during my time at dartmouth"
        />
        <HoverItem
          src="/music/7.jpg"
          alt="music image"
          text="met connie britton during a gig!"
        />
        <HoverItem
          src="/music/8.jpg"
          alt="music image"
          text="with marcia cassidy, my teacher who greatly influenced my musical journey"
        />
        <HoverItem
          src="/music/9.jpg"
          alt="music image"
          text="selfie caught mid-performance during my senior recital :]"
        />
        <HoverItem
          src="/music/10.png"
          alt="music image"
          text="pre-concert warmup at the kennedy center in washington, dc"
        />
      </div>
    </div>
  );
}
