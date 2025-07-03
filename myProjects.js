import maduwedding from "./src/assets/images/tochiandyvonne.png";
import fittrack from "./src/assets/images/fittrack_mock.jpeg";
import portfolio_site from "./src/assets/images/darryladigwu_mock.jpeg";
import tenzies from "./src/assets/images/tenzies_game.jpeg";
import endgame from "./src/assets/images/assembly_endgame.jpeg";


export default [
  {
    id: 1,
    title: "FitTrack Site",
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
    id: 2,
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
    id: 3,
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
    id: 4,
    title: "Tenzies game",
    link: "https://darryls-tenzies-game.vercel.app/",
    image: {
      src: `${tenzies}`,
      alt: "Photo of tenzies game"
    },
    skills: ["HTML", "CSS", "Javascript", "React", "Vercel"],
    description: `The classic dice game developed with React.`,
  },
  {
    id: 5,
    title: "Assembly Endgame",
    link: "https://the-assembly-endgame.netlify.app/",
    image: {
      src: `${endgame}`,
      alt: "Photo of assembly endgame game"
    },
    skills: ["HTML", "CSS", "Javascript", "React", "Netlify"],
    description: `A classic game of hangman with coding themes.`,
  },
]