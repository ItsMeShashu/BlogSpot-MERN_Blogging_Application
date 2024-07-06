/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Context } from "../..";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { blogs } = useContext(Context);
  return (
    <section className="hero">
      {blogs && blogs.length > 0 ? (
        blogs.slice(3, 5).map((element) => {
          return (
            <Link
              to={`/blog/${element._id}`}
              className="card"
              key={element._id}
            >
              <img src={element.mainImage.url} alt="blog" className="blogImg" />
              <div className="category">{element.category}</div>
              <h1>{element.title}</h1>
              <div className="writer_section">
                <div className="author">
                  <img src={element.authorAvatar} alt="author_avatar" />
                  <p>{element.authorName}</p>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <BeatLoader color="gray" size={30} />
      )}
    </section>
  );
};

export default HeroSection;
