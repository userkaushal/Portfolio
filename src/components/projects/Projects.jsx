import React from 'react'
import Pcss from './Projects.module.css'

const Projects = () => {
  return (
    <>
    <div className={Pcss.projects}>
    <h1>Projects</h1>
    <div className={Pcss.container}>
        <h2>Weathersphere - A Weather Website</h2>
        <p>The WeatherApp is a sleek and responsive React-based application that provides real-time weather updates. It features intuitive design, location-based weather data, and dynamic background changes to reflect current weather conditions. Built with Material-UI for styling, it showcases modern UI/UX practices and highlights the ability to integrate APIs seamlessly.</p>

        <p><span style={{color: 'rgb(26 27 30)', fontWeight: 'bold'}}>Technologies Used:</span> React.js, Material-UI, OpenWeatherMap API</p>
        
        <div className={Pcss.links}>
            {/* <a href="" target='_blank'><img width="50" height="50" src="https://img.icons8.com/material-outlined/50/github.png" alt="github"/></a> */}
            <a href="https://weatherapp-lime-pi.vercel.app/" target='_blank'><img width="48" height="48" src="https://img.icons8.com/material-sharp/48/external-link.png" alt="external-link"/></a>
        </div>
    </div>
    <div className={Pcss.container}>
        <h2>Pricetracker - A Price Comparison Website Frontend</h2>
        <p>A website built to compare product prices across e-commerce platforms, providing users with real-time price insights. This project demonstrates my skills in web development, including data fetching, responsive design, and integration with APIs, showcasing my capability to build practical, user-focused applications.</p>
        
        <p><span style={{color: 'rgb(26 27 30)', fontWeight: 'bold'}}>Technologies Used:</span> React.js, ReactBootstrap</p>

        <div className={Pcss.links}>
            <a href="https://github.com/userkaushal/pricetracker.git" target='_blank'><img width="50" height="50" src="https://img.icons8.com/material-outlined/50/github.png" alt="github"/></a>
            {/* <a href="https://weatherapp-lime-pi.vercel.app/" target='_blank'><img width="48" height="48" src="https://img.icons8.com/material-sharp/48/external-link.png" alt="external-link"/></a> */}
        </div>
    </div>
    <div className={Pcss.container}>
        <h2>TodoSpheres - A To-Do List Website</h2>
        <p>TodoSpheres is a sleek and user-friendly to-do list web application designed to help users organize their tasks effectively. Built using React and styled with Material-UI, this project showcases my skills in frontend development, state management, and responsive design. Hosted on Netlify, TodoSpheres demonstrates my ability to create functional and visually appealing web applications.</p>
        
        <p><span style={{color: 'rgb(26 27 30)', fontWeight: 'bold'}}>Technologies Used:</span> React.js, TailwindCSS</p>
        <div className={Pcss.links}>
            <a href="https://github.com/userkaushal/todo_website.git" target='_blank'><img width="50" height="50" src="https://img.icons8.com/material-outlined/50/github.png" alt="github"/></a>
            <a href="https://todospheres.netlify.app/" target='_blank'><img width="48" height="48" src="https://img.icons8.com/material-sharp/48/external-link.png" alt="external-link"/></a>
        </div>
    </div>
    </div>
    </>
  )
}

export default Projects;