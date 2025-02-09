"use client";

export default function WorkExperience() {
  return (
    <>
      <div className="shelfContainer" id="capitalone">
        <img
          className="companyImage"
          src="/experience/capitalone.png"
          alt="capital one"
        />
        <img className="shelf" src="/experience/shelf.png" alt="shelf" />
        <p className="left">2023</p>
        <p className="right">- - - -</p>
      </div>

      <div className="shelfContainer" id="dalilab">
        <img
          className="companyImage"
          src="/experience/dalilab.png"
          alt="dalilab"
        />
        <img className="shelf" src="/experience/shelf.png" alt="shelf" />
        <p className="left">2021</p>
        <p className="right">2024</p>
      </div>

      <div className="shelfContainer" id="vitalize">
        <img
          className="companyImage"
          src="/experience/vitalize.png"
          alt="vitalize"
        />
        <img className="shelf" src="/experience/shelf.png" alt="shelf" />
        <p className="left">2021</p>
        <p className="right">2022</p>
      </div>

      <div className="shelfContainer" id="mathworks">
        <img
          className="companyImage"
          src="/experience/mathworks.png"
          alt="mathworks"
        />
        <img className="shelf" src="/experience/shelf.png" alt="shelf" />
        <p className="left">2023</p>
        <p className="right">2023</p>
      </div>
    </>
  );
}
