import maduwedding from "./src/assets/images/tochiandyvonne.png";
import fittrack from "./src/assets/images/fittrack.png";
import portfolio_site from "./src/assets/images/portfolio.png";
import tenzies from "./src/assets/images/tenzies_game.jpeg";
import endgame from "./src/assets/images/assembly_endgame.jpeg";
import slash from "./src/assets/images/slash.png";

export default [
  {
    id: 1,
    title: "SLASH S&E",
    link: "https://www.slashse.com/",
    image: {
      src: `${slash}`,
      alt: "SLASH sports site homepage"
    },
    skills: [
      "React","HTML", "CSS", "Typescript", "Next.js",
       "Bootstrap", "Vercel"
    ],
    description: `Professional web app designed to vizualize SLASH sports core values`,
  },
  {
    id: 2,
    title: "FitTrack",
    link: "https://www.fittracker.us",
    image: {
      src: `${fittrack}`,
      alt: "Photo of fit track app homepage"
    },
    skills: [
      "React", "MySQL", "React Router", "NGINX",
      "HTML", "CSS", "Javascript", "Express.js",
       "Bootstrap", "Render", "AWS RDS",
    ],
    description: `Fully functional web app for planning and recording workouts.`,
  },
  {
    id: 3,
    title: "My Portfolio",
    link: "https://www.darryladigwu.com",
    image: {
      src: `${portfolio_site}`,
      alt: "Photo of portfolio site"
    },
    skills: ["React", "HTML", "CSS", "Javascript", "Bootstrap", "Render"],
    description: `Portfolio site.
    `,
  },
  {
    id: 4,
    title: "The Madu Wedding",
    link: "https://tochiandyvonne.onrender.com/",
    image: {
      src: `${maduwedding}`,
      alt: "Photo of wedding site"
    },
    skills: ["HTML", "CSS", "Javascript", "Express.js", "EJS", "Bootstrap", "Render"],
    description: `Multipage static website for a wedding.`,
  },
  {
    id: 5,
    title: "Tenzies",
    link: "https://darryls-tenzies-game.vercel.app/",
    image: {
      src: `${tenzies}`,
      alt: "Photo of tenzies game"
    },
    skills: ["HTML", "CSS", "Javascript", "Typescript", "React", "Vercel"],
    description: `The classic dice game developed with React.`,
  },
  {
    id: 6,
    title: "Assembly Endgame",
    link: "https://the-assembly-endgame.netlify.app/",
    image: {
      src: `${endgame}`,
      alt: "Photo of assembly endgame game"
    },
    skills: ["HTML", "CSS", "Javascript", "Typescript", "React", "Netlify"],
    description: `A classic game of hangman with coding themes.`,
  },
]