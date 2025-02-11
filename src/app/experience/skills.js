import HoverItem from "../components/hover";

export default function SkillsLibrary() {
  return (
    <div id="cabinetContainer">
      <p id="hoverme">try hovering :]</p>
      <img id="cabinet" src="/experience/cabinet.png" alt="cabinet" />
      <div id="cabinetTop">
        <img src="/experience/library.png" alt="library" />
        <HoverItem
          id="aws"
          src="/experience/aws.png"
          alt="aws"
          text="certified: aws solutions architect associate"
        />
      </div>
      <div id="cabinetContent">
        <div className="cabinetRow">
          <HoverItem
            id="java"
            src="/experience/java.png"
            alt="badminton"
            text="java"
          />
          <HoverItem
            id="html"
            src="/experience/html.png"
            alt="html"
            text="html"
          />
          <HoverItem id="css" src="/experience/css.png" alt="css" text="css" />
          <HoverItem
            id="js"
            src="/experience/js.png"
            alt="javascript"
            text="javascript"
          />
        </div>
        <div className="cabinetRow">
          <HoverItem id="c" src="/experience/c.png" alt="c" text="c" />
          <HoverItem
            id="csharp"
            src="/experience/csharp.png"
            alt="c#"
            text="c#"
          />
          <HoverItem
            id="python"
            src="/experience/python.png"
            alt="python"
            text="python"
          />
          <HoverItem
            id="go"
            src="/experience/go.png"
            alt="golang"
            text="golang"
          />
        </div>
        <div className="cabinetRow">
          <HoverItem
            id="ts"
            src="/experience/ts.png"
            alt="typescript"
            text="typescript"
          />
          <HoverItem
            id="react"
            src="/experience/react.png"
            alt="react"
            text="react"
          />
          <HoverItem
            id="angular"
            src="/experience/angular.png"
            alt="angular"
            text="angular"
          />
          <HoverItem
            id="node"
            src="/experience/node.png"
            alt="node.js"
            text="node.js"
          />
        </div>
        <div className="cabinetRow">
          <HoverItem
            id="unity"
            src="/experience/unity.png"
            alt="unity"
            text="unity"
          />
          <HoverItem
            id="mongo"
            src="/experience/mongo.png"
            alt="mongodb"
            text="mongodb"
          />
          <HoverItem
            id="docker"
            src="/experience/docker.png"
            alt="docker"
            text="docker"
          />
          <HoverItem
            id="figma"
            src="/experience/figma.png"
            alt="figma"
            text="figma"
          />
        </div>
      </div>
    </div>
  );
}
