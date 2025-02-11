"use client";
import { useRouter } from "next/navigation";
import "./styles.scss";

const projectsList = [
  {
    id: "botthoven",
    title: "BOT-THOVEN",
    description:
      "program a xylophone-playing robot to perform your favorite tunes",
    image: "/projects/botthoven.png",
    demo: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTl2cDJhaXA2N3JxZTZ0aHV2bjh6OWs2YXRsaTFqemI2YTJ0MWJ2NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BhIZiJYZ1FaVuQVpO6/giphy.gif",
    category: "robot",
  },
  {
    id: "ardrumset",
    title: "AR DRUM SET",
    description:
      "drop a drum set anywhere in your environment and create beats on the go",
    image: "/projects/ardrum.png",
    demo: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHV4NGoyc3hzM2FrNzQ4ZmRpbWxkZHpwMjAxbTdwb24zbzY5bGg1MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GnDCiHLuGZD7zmrNOM/giphy.gif",
    category: "augmented reality",
  },
  {
    id: "leafylearn",
    title: "LEAFY LEARN",
    description: "solve coding puzzles to revive your virtual island",
    image: "/projects/leafylearn.png",
    demo: "/projects/leafylearn.gif",
    category: "desktop game",
  },
  {
    id: "doodlegram",
    title: "DOODLEGRAM",
    description:
      "a social media site for doodles? draw, share, and explore doodles with your friends",
    image: "/projects/doodlegram.png",
    demo: "/projects/doodlegram.gif",
    category: "web",
  },
  {
    id: "whattheyap",
    title: "WHAT THE YAP?",
    description:
      "yap to learn! turn your notes into AI-generated flashcards and study using just your voice",
    image: "/projects/whattheyap.png",
    demo: "/projects/whattheyap.gif",
    category: "web",
  },
  {
    id: "spacecolony",
    title: "SPACE COLONY",
    description:
      "farm, harvest, and build a thriving colony...except it's in outer space. no pressure :]",
    image: "/projects/spacecolony.png",
    demo: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjMxenFkbWY2MTRxa2ppamoxeTY5bXZiaWx0dDdiYngyejJsZjZiNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ym9dxZOxmMbGR1iTHJ/giphy.gif",
    category: "virtual reality",
  },
  {
    id: "terracesurvival",
    title: "TERRACE SURVIVAL",
    description:
      "to win, you must do ~whatever~ it takes to survive on a deserted terrace",
    image: "/projects/terrace.png",
    demo: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXhuMGFucTBoaG0ybmFjZnJsd2xoNTBwbWZvMXIxNm1memN3MWlpaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/O5q7a8MMCOAm9CiAXB/giphy.gif",
    category: "desktop game",
  },
  {
    id: "vrsolar",
    title: "VR SOLAR SYSTEM",
    description:
      "experience the scale of the solar system, watching revolutions and rotations at scale",
    image: "/projects/vrsolar.png",
    demo: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTA5bzVodng1NGhqbzZxZ2p0bm5hM3YxMThjaXh1aDdjNWdrdTZuaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/wK3LzfKDJg3W8SwosH/giphy.gif",
    category: "virtual reality",
  },
  {
    id: "fitkitch",
    title: "FITKITCH",
    description:
      "bereal but for fitness! complete daily workouts within the timeframe and work with your friends to reveal the surprise recipe",
    image: "/projects/fitkitch.png",
    demo: "/projects/fitkitch.gif",
    category: "mobile",
  },
  {
    id: "minesweeper",
    title: "MINESWEEPER",
    description: "a classic: click wisely, or boom! the thrill never gets old",
    image: "/projects/minesweeper.png",
    demo: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnNpMW1paHVrNmVzcTR3bzQ1bGphcXZsY2p1MzR2cW84eTN2a3N2bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZQorCHYLJs7Mzwu0Gy/giphy.gif",
    category: "desktop game",
  },
  {
    id: "holisticranching",
    title: "HOLISTIC RANCHING",
    description: "helping ranchers manage their cattle in a sustainable way",
    image: "/projects/holistic.png",
    demo: "/projects/holistic.gif",
    category: "web",
  },
  {
    id: "mgame",
    title: "mGAME",
    description:
      "set measurable goals and track your progress with your healthcare provider",
    image: "/projects/mgame.png",
    demo: "/projects/mgame.gif",
    category: "web",
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
          <div className="project" key={project.title} id={project.id}>
            <img
              className="projectImage"
              src={project.image}
              alt={project.title}
              onClick={() => router.push("/projects/" + project.id)}
            />
            <img
              className="projectDemo"
              src={project.demo}
              alt={project.title}
              onClick={() => router.push("/projects/" + project.id)}
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
