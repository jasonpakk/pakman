import experienceData from "./data";

export default function Browser({ browserContent, setBrowserContent }) {
  if (!browserContent) return null;

  const experience = experienceData[browserContent];

  return (
    <div className="browser">
      <div className="header">
        <p className="title">{experience.name}</p>
        <button className="close" onClick={() => setBrowserContent("")}>
          x
        </button>
      </div>
      <div className="content">
        <div className="contentHeader">
          <img className="companyImage" src={experience.image} />
          <div className="companyInfo">
            <div>
              <img src="/icons/pin.png" alt="pin" />
              <p>{experience.location}</p>
            </div>
            <div>
              <img src="/icons/wrench.png" alt="pin" />
              <p>{experience.tools.join(", ")}</p>
            </div>
          </div>
        </div>
        {experience.positions.map((position) => (
          <div key={position.title} className="experienceEntry">
            <p>
              <b>{position.title}</b> | {position.date}
            </p>
            <ul>
              {position.description.map((desc) => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
