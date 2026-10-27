import html from "./src/assets/images/html.svg"
import javascript from "./src/assets/images/js.svg"
import css from "./src/assets/images/css.svg"
import react from "./src/assets/images/react.svg"
import reactRouter from "./src/assets/images/reactRouter.svg"
import nodejs from "./src/assets/images/nodejs.svg"
import mysql from "./src/assets/images/mysql.svg"
import mongodb from "./src/assets/images/mongodb.svg"
import git from "./src/assets/images/git.svg"
import github from "./src/assets/images/github.svg"
import bootstrap from "./src/assets/images/bootstrap.svg"
import docker from "./src/assets/images/docker.svg"
import typescript from "./src/assets/images/typescript.svg"

let idNum = 0;

export default [
  {
    id: idNum +=1,
    title: 'JavaScript',
    image: {
      src: `${javascript}`,
      alt: "javascript logo"
    }
  },
  {
    id: idNum +=1,
    title: "TypeScript",
    image: {
      src: `${typescript}`,
      alt: "typescript logo"
    }
  },
  {
    id: idNum +=1,
    title: "Shopify",
    image: {
      src: null,
      alt: "Shopify logo"
    }
  },
  {
    id: idNum +=1,
    title: "GraphQL",
    image: {
      src: null,
      alt: "GraphQL logo"
    }
  },
  {
    id: idNum +=1,
    title: 'CSS',
    image: {
      src: `${css}`,
      alt: "css logo"
    }
  },
  {
    id: idNum +=1,
    title: "HTML",
    image: {
      src: `${html}`,
      alt: "html logo"
    }
  },
  {
    id: idNum +=1,
    title: "React",
    image: {
      src: `${react}`,
      alt: "react logo"
    }
  },
  {
    id: idNum +=1,
    title: "MySQL",
    image: {
      src: `${mysql}`,
      alt: "mysql logo"
    }
  },
  {
    id: idNum +=1,
    title: "Git",
    image: {
      src: `${git}`,
      alt: "git logo"
    }
  },
  {
    id: idNum +=1,
    title: "Github",
    image: {
      src: `${github}`,
      alt: "github logo"
    }
  },
  {
    id: idNum +=1,
    title: "Bootstrap",
    image: {
      src: `${bootstrap}`,
      alt: "bootstrap logo"
    }
  },
  {
    id: idNum +=1,
    title: "Docker",
    image: {
      src: `${docker}`,
      alt: "docker logo"
    }
  },
  {
    id: idNum +=1,
    title: "Node.js",
    image: {
      src: `${nodejs}`,
      alt: "nodejs logo"
    }
  },
  {
    id: idNum +=1,
    title: "React Router",
    image: {
      src: `${reactRouter}`,
      alt: "react router logo"
    }
  },
  {
    id: idNum +=1,
    title: "MongoDB",
    image: {
      src: `${mongodb}`,
      alt: "mongodb logo"
    }
  },
  {
    id: idNum +=1,
    title: "Jasmine",
    image: {
      src: null,
      alt: "Jasmine testing logo"
    }
  },
]