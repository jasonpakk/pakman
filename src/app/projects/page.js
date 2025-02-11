"use client";
import { useRouter } from "next/navigation";
import "./styles.scss";

const projectsList = [
  {
    title: "BOT-THOVEN",
    description:
      "program a xylophone-playing robot to perform your favorite tunes",
    image: "/projects/botthoven.png",
    demo: "/projects/demo.gif",
    category: "robot",
    path: "/projects/botthoven",
  },
  {
    title: "AR DRUM SET",
    description:
      "drop a drum set anywhere in your environment and create beats on the go",
    image: "/projects/ardrum.png",
    demo: "/projects/demo.gif",
    category: "augmented reality",
    path: "/projects/ardrumset",
  },
  {
    title: "LEAFY LEARN",
    description: "solve coding puzzles to revive your virtual island",
    image: "/projects/leafylearn.png",
    demo: "/projects/demo.gif",
    category: "desktop game",
    path: "/projects/leafylearn",
  },
  {
    title: "DOODLEGRAM",
    description:
      "a social media site for doodles? draw, share, and explore doodles with your friends",
    image: "/projects/doodlegram.png",
    demo: "/projects/demo.gif",
    category: "web",
    path: "/projects/doodlegram",
  },
  {
    title: "WHAT THE YAP?",
    description:
      "yap to learn! turn your notes into AI-generated flashcards and study using just your voice",
    image: "/projects/whattheyap.png",
    demo: "/projects/demo.gif",
    category: "web",
    path: "/projects/whattheyap",
  },
  {
    title: "SPACE COLONY",
    description:
      "farm, harvest, and build a thriving colony...except it's in outer space. no pressure :]",
    image: "/projects/spacecolony.png",
    demo: "/projects/demo.gif",
    category: "virtual reality",
    path: "/projects/spacecolony",
  },
  {
    title: "TERRACE SURVIVAL",
    description:
      "to win, you must do ~whatever~ it takes to survive on a deserted terrace",
    image: "/projects/terrace.png",
    demo: "/projects/demo.gif",
    category: "desktop game",
    path: "/projects/terracesurvival",
  },
  {
    title: "VR SOLAR SYSTEM",
    description:
      "experience the scale of the solar system, watching revolutions and rotations at scale",
    image: "/projects/vrsolar.png",
    demo: "/projects/demo.gif",
    category: "virtual reality",
    path: "/projects/vrsolar",
  },
  {
    title: "FITKITCH",
    description:
      "bereal but for fitness! complete daily workouts within the timeframe and work with your friends to reveal the surprise recipe",
    image: "/projects/fitkitch.png",
    demo: "/projects/demo.gif",
    category: "mobile",
    path: "/projects/fitkitch",
  },
  {
    title: "MINESWEEPER",
    description: "a classic: click wisely, or boom! the thrill never gets old",
    image: "/projects/minesweeper.png",
    demo: "/projects/demo.gif",
    category: "desktop game",
    path: "/projects/minesweeper",
  },
  {
    title: "HOLISTIC RANCHING",
    description: "helping ranchers manage their cattle in a sustainable way",
    image: "/projects/holistic.png",
    demo: "/projects/demo.gif",
    category: "web",
    path: "/projects/holisticranching",
  },
  {
    title: "mGAME",
    description:
      "set measurable goals and track your progress with your healthcare provider",
    image: "/projects/mgame.png",
    demo: "/projects/demo.gif",
    category: "web",
    path: "/projects/mgame",
  },
];

export default function Projects() {
  const router = useRouter();

  return (
    <div id="projectPage" className="page">
      <div className="pageHeader">
        <div className="title">
          <img src="/pacman/orange.png" alt="orange" />
          <h1>Projects</h1>
        </div>

        <button onClick={() => router.push("/pacman")}>
          <img src="/pacman/pacman.png" alt="pacman" />
          <p>Back to Game</p>
        </button>
      </div>

      <div id="projectCategories">
        <h2>I develop for...</h2>
        <img id="projectAvatar" src="/avatar/projects.gif" alt="projects" />

        <div id="web" className="projectCategory">
          <img src="/projects/web.png" alt="web" />
          <p>web</p>
        </div>

        <div id="mobile" className="projectCategory">
          <img src="/projects/mobile.png" alt="mobile" />
          <p>mobile</p>
        </div>

        <div id="vr" className="projectCategory">
          <p>ar + vr</p>
          <img src="/projects/vr.png" alt="vr" />
        </div>

        <div id="other" className="projectCategory">
          <p>other</p>
          <img src="/projects/other.png" alt="other" />
        </div>
      </div>

      <div id="projectList">
        {projectsList.map((project) => (
          <div className="project" key={project.title}>
            <img
              className="projectImage"
              src={project.image}
              alt={project.title}
              onClick={() => router.push(project.path)}
            />
            <img
              className="projectDemo"
              src={project.demo}
              alt={project.title}
              onClick={() => router.push(project.path)}
            />
            <h3>{project.title}</h3>
            <p className="categoryTag">{project.category}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
