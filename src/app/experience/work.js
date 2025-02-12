"use client";

export default function WorkExperience({ setBrowserContent }) {
  return (
    <>
      <div
        className="shelfContainer"
        id="capitalone"
        onClick={() => setBrowserContent("c1")}
      >
        <img
          className="companyImage"
          src="/experience/capitalone.png"
          alt="capital one"
        />
        <img className="shelf" src="/experience/shelf.png" alt="shelf" />
        <p className="left">2023</p>
        <p className="right">present</p>
      </div>

      <div
        className="shelfContainer"
        id="dalilab"
        onClick={() => setBrowserContent("dali")}
      >
        <img
          className="companyImage"
          src="/experience/dalilab.png"
          alt="dalilab"
        />
        <img className="shelf" src="/experience/shelf.png" alt="shelf" />
        <p className="left">2021</p>
        <p className="right">2024</p>
      </div>

      <div
        className="shelfContainer"
        id="vitalize"
        onClick={() => setBrowserContent("vitalize")}
      >
        <img
          className="companyImage"
          src="/experience/vitalize.png"
          alt="vitalize"
        />
        <img className="shelf" src="/experience/shelf.png" alt="shelf" />
        <p className="left">2021</p>
        <p className="right">2022</p>
      </div>

      <div
        className="shelfContainer"
        id="mathworks"
        onClick={() => setBrowserContent("mathworks")}
      >
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
