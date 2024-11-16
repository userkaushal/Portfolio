import React from "react";
import Ccss from "./Contact.module.css";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import { useRef } from "react";

const Contact = () => {

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const form = useRef();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(isSubmitting);
    
    await emailjs.sendForm(
        serviceId,   // Replace with your EmailJS service ID
        templateId,   // Replace with your EmailJS template ID
        form.current,
        publicKey     // Replace with your EmailJS public key
      )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Your message has been sent!');
      }, (error) => {
        console.error('Email sending failed:', error.text);
        alert('Failed to send your message. Please try again later.');
      });
  };
  
//   const sendEmail = (e) => {
//     e.preventDefault();

//   };
  return (
    <div className={Ccss.container}>
      <h1>
        Let's get in <span style={{ color: "rgb(26 27 30)" }}>touch</span>
      </h1>

      <p className={Ccss.para}>
        I'm always open to new opportunities and collaborations. Whether you
        have a project in mind or just want to say hi, feel free to reach out.
      </p>

      <div className={Ccss.flexbox}>
        <div className={Ccss.details}>
          <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", {required: true, message: "Name is required"})}
            />
            <br />
            <label>Email</label>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {required: true, message: "Email is required"})}
            />
            <br />
            <label>Message</label>
            <br />
            <textarea
              placeholder="Enter your message"
              {...register("message", {required: true, message: "Message is required"})}
            />
            {isSubmitting ? (<div><h2>Submitting...</h2></div>) :
                (<input type="submit" value="Submit" disabled={isSubmitting}/>)
            }
          </form>
        </div>
        <div className={Ccss.socials}>
          <h2 style={{ color: "rgb(26 27 30)" }}>Email:</h2>
          <p>
            <a href="mailto:kaushamahida@gmail.com">kaushamahida@gmail.com</a>
          </p>

          <h2 style={{ color: "rgb(26 27 30)" }}>Social:</h2>
          <div className={Ccss.socialIcons}>
            <p>
              <a href="https://github.com/userkaushal/" target="_blank">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/fluency/50/github.png"
                  alt="github"
                />
              </a>
            </p>
            <p>
              <a
                href="https://linkedin.com/in/kaushal-mahida"
                target="_blank"
              >
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/linkedin.png"
                  alt="linkedin"
                />
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/krish_mahida/" target="_blank">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/fluency/50/instagram-new.png"
                  alt="instagram-new"
                />
              </a>
            </p>
            <p>
              <a href="https://www.facebook.com/" target="_blank">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/facebook-new.png"
                  alt="facebook-new"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
