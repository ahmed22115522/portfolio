import React from "react";
import Card from "./Card";
// ecommerce
import ecommerce from '../public/projects/e-commerce.png'
import sanity from '../public/skills/sanity.png'
import react from '../public/skills/react.png'
import bootstrap from '../public/skills/bootsrap.png'
import nextdark from '../public/skills/next-dark.png'
// games
import games from '../public/projects/games.png'
// movies
import movies from '../public/projects/movieland.png'


const Projects = () => {
  const projects = [
    {
      title: "E-commerce Beta",
      disc: "This website made by Next.js and Sanity.io for the backend, it is a beta version but still one of the greatest projects I ever made. this project has a resposive and modern design for E-commerce website, also with amzing shopping cart that allows you to shop all across the app. Moreover, Sanity.io let you add more products and keep your ecommerce site up to date for every new product.",
      imageMain: ecommerce,
      skillsArr: [nextdark,sanity],
      liveLink: 'https://beta-ecommerce-eta.vercel.app/',
      gitHubLink:'https://github.com/ahmed22115522/Beta-Ecommerce',
      direction:true
    },
    {
      title: "Game Over",
      disc: "A gaming website that uses an API from Rapid APIs, This website is a single page website application that was build by React.js and Bootstrap with the use of Typescript as well. Users can navigate between the games with there favorite Platform,Categories and Sort by a lot of options. Also the user can create an account and login to the website, no user can access the website without logging in with the power of protected routes.",
      imageMain: games,
      skillsArr: [react,bootstrap],
      liveLink: 'https://free-to-play-games-tau.vercel.app/',
      gitHubLink:'https://github.com/ahmed22115522/free-to-play-games',
      direction:false
    },
    {
      title: "Movies Land",
      disc: "Great movie gallery that allow the user to check the latest and trending movies and series. The use need to log in to access the website if the use don't have an account he can simply create a new account and access the website after signup.",
      imageMain: movies,
      skillsArr: [react,bootstrap],
      liveLink: 'https://ahmed22115522.github.io/movie-land/',
      gitHubLink:'https://github.com/ahmed22115522/movie-land',
      direction:true
    },
  ];
  return (
    <section className="my-10 py-20 relative" id="projects">
      <div className="sm:w-[85%] md:w-[90%] w-[90%] m-auto flex flex-col justify-center items-center">
        <h3 className="font-mono">Projects Made with ❤</h3>
        {projects.map((project, i) => (
          <Card key={i} title={project.title} disc={project.disc} imageMain={project.imageMain} skillsArr={project.skillsArr} gitHubLink={project.gitHubLink} liveLink={project.liveLink} direction={project.direction}/>
        ))}
      </div>
      <h2 className="absolute top-0 right-[50%] translate-x-[55%] uppercase tracking-[15px] dark:text-gray-400 text-gray-600">
        Projects
      </h2>
    </section>
  );
};

export default Projects;
