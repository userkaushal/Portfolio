import React from "react";
import hcss from "./Home.module.css";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const name = "Kaushal Mahida";
  const navigate = useNavigate();

  
    const handleDownload = () => {
      const link = document.createElement("a");
      link.href = "/KaushalResume.pdf"; // Path to file in public folder
      link.download = "KaushalResume.pdf"; // The name of the downloaded file
      link.click();
    };

  return (
    <>
    {/* <Navbar/> */}
    <div className={hcss.container}>
      <div className={hcss.box}>
        <h1>
          Hello, my name is <br />
          <span style={{ color: "rgb(26 27 30)" }}>{`${name}`}</span>
        </h1>

        <h3>I am a Full-stack Developer</h3>

        <div className={hcss.btnflex}>
          <button onClick={() => navigate("/contact")}>Get In Touch</button>
          <button onClick={handleDownload}>Download Resume</button>
        </div>
      </div>
      {/* <div className={hcss.right}>
          <img src='/profile2.png' alt='profile_image' height={400}/>
        </div> */}
    </div>
    </>
  );
};

export default Home;
