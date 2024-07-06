/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGitSquare } from "react-icons/fa";
import { Context } from "../..";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Footer = () => {
  const form = useRef();
  const isDashboard = useLocation("https://blogspot-dev.netlify.app/dashboard");
  const { mode, setMode } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_cptahrq",
        "template_4qxmz35",
        form.current,
        "ZqUPQvE1F_SYMyMBq"
      )
      .then(
        (result) => {
          Swal.fire({
            title: "Success!",
            text: "Subscribed Succesfully!!",
            icon: "success",
            confirmButtonText: "OK",
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <footer
      className={
        isDashboard.pathname === "/dashboard"
          ? "hideFooter"
          : mode === "light"
          ? "light-footer"
          : "dark-footer"
      }
    >
      <div className="container">
        <div className="about">
          <h3>About</h3>
          <p>
            "Welcome to BlogSpot, where stories come alive and voices find their
            stage. Explore a world of diverse narratives, and connect with
            fellow writers. Join our vibrant community of storytellers today!"
          </p>
          <p>
            <span>Email:</span>gargshashwat705@gmail.com
          </p>
          <p>
            <span>Phone:</span>8955367568
          </p>
        </div>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/about"}>About</Link>
          </ul>
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Sports</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
          </ul>
        </div>
        <div className="news_letter">
          <div>
            <h3>Weekly Newletter</h3>
            <p>Get blog articles and offer via email</p>
          </div>
          <div>
            <form ref={form} onSubmit={handleSubmit} className="newsForm">
              <input
                type="text"
                placeholder={`Your Email`}
                name="from_email"
                required
              />
              <button type="submit" value="Send">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logo">
          BLOG<span>SPOT</span>
        </div>
        <div className="mark">
          &copy; 2023 <span>Shashwat Garg</span>. All rights reserved.
        </div>
        <div className="links">
          <Link to={"https://github.com/ItsMeShashu"} target="_blank">
            <FaGitSquare />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/shashwat-garg-9731a4281/"}
            target="_blank"
          >
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
