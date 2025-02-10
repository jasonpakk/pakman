const experienceData = {
  c1: {
    name: "capital one",
    image: "/experience/capitalone_banner.png",
    location: "mclean, va",
    tools: ["aws", "go", "angular", "tyepscript"],
    positions: [
      {
        title: "software engineer",
        date: "aug 2024 - present",
        description: [
          "developing new backend services in go to modernize core banking systems, supporting legacy functionality in the new platform",
          "designed and implemented flexible data models in dynamodb to support a variety of access patterns and use cases",
          "developed endpoints to support functionality within account management and transaction processing, all deployed on the cloud (aws)",
        ],
      },
      {
        title: "software engineer, intern",
        date: "jun 2023 - aug 2023",
        description: [
          "developed a desktop application in angular that enables users to build and edit webpages through natural language commands, eliminating the need for coding",
          "implemented services to parse natural language commands and render the webpage in real-time",
          "worked with a team of 5 to develop a proof of concept for a new product, which was presented to senior leadership",
        ],
      },
    ],
  },
  dali: {
    name: "dali lab",
    image: "/experience/dalilab_banner.png",
    location: "hanover, nh",
    tools: [
      "react",
      "react native",
      "express",
      "node.js",
      "mongodb",
      "javascript",
      "firebase",
      "figma",
    ],
    positions: [
      {
        title: "chair member",
        date: "mar 2023 - jun 2024",
        description: [
          "selected to serve on core leadership team, working with other chairs to make decisions regarding the direction of the lab of 100+ members",
          "served as chair of outreach domain, driving initatives with leads in alumni relations, marketing, events, professional development, and social events",
          "organized and led public-facing events such as project showcases and pitch competitions, managing everything from funding to logistics",
        ],
      },
      {
        title: "software engineer, mentor",
        date: "jan 2022 - jun 2024",
        description: [
          "promoted to mentor after just one project cycle, responsible for guiding a team of 2-4 engineers through the development process",
          "served as the lead engineer on projects; led discussions regarding code design & architecture, delivered project updates to clients, and mentored new team members",
          "reviewed new developer applications and conducted interviews to assess technical skills and organization fit",
        ],
      },
      {
        title: "software engineer",
        date: "sep 2021 - nov 2023",
        description: [
          "contracted to develop software products for clients in 10 weeks, leveraging skills in full-stack web and mobile development",
          "worked with an international agricultural organization to develop a web application for farmers to track crop growth and predict yields",
          "created a mobile app using react native and mongodb, for a university professor to conduct research on exercise habits and mental health of college students",
          "developed a web application using react and firebase that adheres to hippa regulations, so that patients and providers at a state medical center can easily manage recovery goals",
        ],
      },
    ],
  },
  vitalize: {
    name: "vitalize care",
    image: "/experience/vitalize_banner.png",
    location: "remote",
    tools: [
      "react",
      "react native",
      "node.js",
      "express",
      "mongodb",
      "javascript",
    ],
    positions: [
      {
        title: "software engineer",
        date: "jun 2021 - dec 2021",
        description: [
          "worked in a team to develop the first public beta release of a wellness app tailored to healthcare professionals",
          "developed frontend components in react native displaying user statistics, journal entries, meditation sessions, and video calls",
          "developed backend services using node.js and express, supporting endpoints for user authentication and data storage",
          "managed ios deployment and bugs reported by beta testers",
        ],
      },
    ],
  },
  mathworks: {
    name: "mathworks",
    image: "/experience/mathworks_banner.png",
    location: "natick, ma",
    tools: ["javascript", "matlab"],
    positions: [
      {
        title: "software engineer, intern",
        date: "jan 2023 - mar 2023",
        description: [
          "designed a new domain-specific language (DSL) to streamline the description and modification of MATLAB's Simulink block diagrams",
          "developed a compiler in javascript to parse the DSL into MATLAB, leveraging antlr4 for lexing and parsing to create abstract syntax trees",
          "created and leveraged an intermediate representation (IR) to regulate the flow of information between the DSL and MATLAB",
          "developed a reverse compiler to convert MATLAB code into the DSL, demonstrating the bidirectional nature of the DSL",
        ],
      },
    ],
  },
};

export default experienceData;
