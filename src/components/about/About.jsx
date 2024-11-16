import React from 'react'
import Acss from "./About.module.css";

const About = () => {
  return (
    <>  
    <div className={Acss.container}>
        <h1>A bit <span style={{color: "rgb(26 27 30)"}}>about me</span></h1>
        <p className={Acss.para}>I'm a passionate and detail-oriented web developer from Junagadh, India. My journey into the world of web development began with a deep curiosity about how websites work and a desire to create seamless, user-friendly digital experiences. As a recent graduate, I have equipped myself with a solid foundation in various web development technologies and programming languages.</p>
    </div>
    <div className={Acss.tech}>
        <h2>worked with these <span style={{color: "rgb(26 27 30)"}}>tools and technologies</span></h2>
        <p className={Acss.para}>Throughout my development journey, I’ve worked with a range of tools and technologies that help bring ideas to life. Listed below are some of the tools and technologies I’ve used:</p>
    </div>
    <div className={Acss.techbox}>
        <div className={Acss.techbox1}>
          <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>
          <p>HTML</p>
        </div>
        <div className={Acss.techbox1}>
          <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
          <p>CSS</p>
        </div>
        <div className={Acss.techbox1}>
          <img width="48" height="48" src="https://img.icons8.com/fluency/48/javascript.png" alt="javascript"/>
          <p>JavaScript</p>
        </div>
        <div className={Acss.techbox1}>
          <img width="48" height="48" src="https://img.icons8.com/color/48/react-native.png" alt="react-native"/>
          <p>ReactJS</p>
        </div>
        <div className={Acss.techbox1}>
          <img width="48" height="48" src="https://img.icons8.com/color/48/nodejs.png" alt="nodejs"/>
          <p>NodeJS</p>
        </div>
        <div className={Acss.techbox1}>
          <img width="50" height="50" src="https://img.icons8.com/fluency/50/express-js.png" alt="express-js"/>
          <p>ExpressJS</p>
        </div>
        <div className={Acss.techbox1}>
          <img width="48" height="48" src="https://img.icons8.com/color/48/mongo-db.png" alt="mongo-db"/>
          <p>MongoDB</p>
        </div>
        <div className={Acss.techbox1}>
          <img width="50" height="50" src="https://img.icons8.com/ios/50/mysql-logo.png" alt="mysql-logo"/>
          <p>MySQL</p>
        </div>
        <div className={Acss.techbox1}>
          <img width="50" height="50" src="https://img.icons8.com/fluency/50/java-coffee-cup-logo.png" alt="java-coffee-cup-logo"/>
          <p>Java</p>
        </div>
        <div className={Acss.techbox1}>
          <img width="48" height="48" src="https://img.icons8.com/color/48/c-plus-plus-logo.png" alt="c-plus-plus-logo"/>
          <p>C++</p>
        </div>
        <div className={Acss.techbox1}>
          <img width="50" height="50" src="https://img.icons8.com/fluency/50/tailwind_css.png" alt="tailwind_css"/>
          <p>Tailwind CSS</p>
        </div>
        <div className={Acss.techbox1}>
          <img width="48" height="48" src="https://img.icons8.com/color/48/material-ui.png" alt="material-ui"/>
          <p>Material UI</p>
        </div>
        <div className={Acss.techbox1}>
          <img width="50" height="50" src="https://img.icons8.com/material-outlined/50/bootstrap.png" alt="bootstrap"/>
          <p>Bootstrap</p>
        </div>
        <div className={Acss.techbox1}>
          <img width="48" height="48" src="https://img.icons8.com/color/48/git.png" alt="git"/>
          <p>Git</p>
        </div>
        <div className={Acss.techbox1}>
          <img width="50" height="50" src="https://img.icons8.com/material-rounded/50/visual-studio-code-2019.png" alt="visual-studio-code-2019"/>
          <p>VS Code</p>
        </div>
        <div className={Acss.techbox1}>
          <img width="50" height="50" src="https://img.icons8.com/wired/50/postman-api.png" alt="postman-api"/>
          <p>Postman</p>
        </div>
        <div className={Acss.techbox1}>
          <img width="50" height="50" src="https://img.icons8.com/material-outlined/50/github.png" alt="github"/>
          <p>Github</p>
        </div>
    </div>
    </>
  )
}

export default About