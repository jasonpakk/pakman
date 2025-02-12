"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Socials from "../bio/socials";
import "./styles.scss";
import projectsList from "./data";

export default function Projects() {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleScroll = (down) => {
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: down ? document.getElementById("projectList").offsetTop : 0,
        behavior: "smooth",
      });
    }, 200);
    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    projectsList.forEach((project) => {
      const projectElement = document.getElementById(project.id);

      if (selectedCategory === "") {
        projectElement.style.opacity = 1;
      } else if (project.category === "web") {
        selectedCategory === "web"
          ? (projectElement.style.opacity = 1)
          : (projectElement.style.opacity = 0.1);
      } else if (project.category === "mobile") {
        selectedCategory === "mobile"
          ? (projectElement.style.opacity = 1)
          : (projectElement.style.opacity = 0.1);
      } else if (
        project.category === "augmented reality" ||
        project.category === "virtual reality"
      ) {
        selectedCategory === "vr"
          ? (projectElement.style.opacity = 1)
          : (projectElement.style.opacity = 0.1);
      } else {
        selectedCategory === "other"
          ? (projectElement.style.opacity = 1)
          : (projectElement.style.opacity = 0.1);
      }
    });
  }, [selectedCategory]);

  const sortProjectsList = (projectsList) => {
    return projectsList.sort((a, b) => {
      const aVisible =
        selectedCategory === "" ||
        (a.category === "web" && selectedCategory === "web") ||
        (a.category === "mobile" && selectedCategory === "mobile") ||
        ((a.category === "augmented reality" ||
          a.category === "virtual reality") &&
          selectedCategory === "vr") ||
        (selectedCategory === "other" &&
          !["web", "mobile", "augmented reality", "virtual reality"].includes(
            a.category
          ));

      const bVisible =
        selectedCategory === "" ||
        (b.category === "web" && selectedCategory === "web") ||
        (b.category === "mobile" && selectedCategory === "mobile") ||
        ((b.category === "augmented reality" ||
          b.category === "virtual reality") &&
          selectedCategory === "vr") ||
        (selectedCategory === "other" &&
          !["web", "mobile", "augmented reality", "virtual reality"].includes(
            b.category
          ));

      return bVisible - aVisible; // Moves visible items to the top
    });
  };

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

        <p id="toggleText">
          select a category to filter projects, or unselect to view all :]
        </p>

        <div
          id="web"
          className={
            "projectCategory" + (selectedCategory === "web" ? "" : " hidden")
          }
          onClick={() => {
            setSelectedCategory(selectedCategory === "web" ? "" : "web");
            handleScroll(true);
          }}
        >
          <img src="/projects/web.png" alt="web" />
          <p>web</p>
        </div>

        <div
          id="mobile"
          className={
            "projectCategory" + (selectedCategory === "mobile" ? "" : " hidden")
          }
          onClick={() => {
            setSelectedCategory(selectedCategory === "mobile" ? "" : "mobile");
            handleScroll(true);
          }}
        >
          <img src="/projects/mobile.png" alt="mobile" />
          <p>mobile</p>
        </div>

        <div
          id="vr"
          className={
            "projectCategory" + (selectedCategory === "vr" ? "" : " hidden")
          }
          onClick={() => {
            setSelectedCategory(selectedCategory === "vr" ? "" : "vr");
            handleScroll(true);
          }}
        >
          <p>ar + vr</p>
          <img src="/projects/vr.png" alt="vr" />
        </div>

        <div
          id="other"
          className={
            "projectCategory" + (selectedCategory === "other" ? "" : " hidden")
          }
          onClick={() => {
            setSelectedCategory(selectedCategory === "other" ? "" : "other");
            handleScroll(true);
          }}
        >
          <p>other</p>
          <img src="/projects/other.png" alt="other" />
        </div>

        <p id="viewmywork" onClick={() => handleScroll(true)}>
          ↓ view my work ↓
        </p>

        <Socials />
      </div>

      <div id="projectList">
        {sortProjectsList(projectsList).map((project) => (
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

      <p id="backtotop" onClick={() => handleScroll(false)}>
        ↑ back to top ↑
      </p>
    </div>
  );
}
