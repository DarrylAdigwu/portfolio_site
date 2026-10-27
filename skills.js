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
    title: 'javascript',
    image: {
      src: `${javascript}`,
      alt: "javascript logo"
    }
  },
  {
    id: idNum +=1,
    title: 'css',
    image: {
      src: `${css}`,
      alt: "css logo"
    }
  },
  {
    id: idNum +=1,
    title: "html",
    image: {
      src: `${html}`,
      alt: "html logo"
    }
  },
  {
    id: idNum +=1,
    title: "react",
    image: {
      src: `${react}`,
      alt: "react logo"
    }
  },
  {
    id: idNum +=1,
    title: "mysql",
    image: {
      src: `${mysql}`,
      alt: "mysql logo"
    }
  },
  {
    id: idNum +=1,
    title: "git",
    image: {
      src: `${git}`,
      alt: "git logo"
    }
  },
  {
    id: idNum +=1,
    title: "github",
    image: {
      src: `${github}`,
      alt: "github logo"
    }
  },
  {
    id: idNum +=1,
    title: "bootstrap",
    image: {
      src: `${bootstrap}`,
      alt: "bootstrap logo"
    }
  },
  {
    id: idNum +=1,
    title: "docker",
    image: {
      src: `${docker}`,
      alt: "docker logo"
    }
  },
  {
    id: idNum +=1,
    title: "node js",
    image: {
      src: `${nodejs}`,
      alt: "nodejs logo"
    }
  },
  {
    id: idNum +=1,
    title: "react router",
    image: {
      src: `${reactRouter}`,
      alt: "react router logo"
    }
  },
  {
    id: idNum +=1,
    title: "mongo db",
    image: {
      src: `${mongodb}`,
      alt: "mongodb logo"
    }
  },
  {
    id: idNum +=1,
    title: "typescript",
    image: {
      src: `${typescript}`,
      alt: "typescript logo"
    }
  },
  {
    id: idNum +=1,
    title: "jasmine",
    image: {
      src: null,
      alt: "Jasmine testing logo"
    }
  },
]