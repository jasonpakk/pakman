import "./styles.scss";

export default function Socials() {
  return (
    <div className="socials">
      <a
        href="mailto:jaeyoung.pak8@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="email"
        style={{ backgroundColor: "#dfeed6" }}
      >
        <img className="buttonIcon" src="/icons/email.png" />
      </a>

      <a
        href="https://www.linkedin.com/in/jason-j-pak"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="linkedin"
        style={{ backgroundColor: "#0072b1" }}
      >
        <p>in</p>
      </a>

      <a
        href="https://github.com/jasonpakk"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="github"
        style={{ backgroundColor: "#4f4a4e" }}
      >
        <img className="buttonIcon" src="/icons/github.png" />
      </a>

      <a
        href="https://drive.google.com/file/d/1SYXlT2gPGgJ6TZSmaoWf__ZdFXRMM-3R/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="resume"
        style={{ backgroundColor: "#dad55e" }}
      >
        <img className="buttonIcon" src="/icons/resume.png" />
      </a>
    </div>
  );
}
