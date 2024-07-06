/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Context } from "../..";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About BlogSpot</h2>
        <p>
          Welcome to <b>BlogSpot</b>, a vibrant community of writers, thinkers,
          and storytellers from around the globe. Our platform is more than just
          a blogging website; it is a space where voices converge to share
          experiences, insights, and passions.
        </p>
        <p>
          At <b>BlogSpot</b>, we believe in the power of words to inspire,
          educate, and connect. Whether you are an aspiring writer finding your
          voice or a seasoned blogger sharing your expertise, this is the place
          to spark conversations, foster creativity, and build a community that
          thrives on the diversity of ideas.
        </p>
        <p>
          Our mission is simple yet profound: to provide a platform where every
          story matters. From travel adventures to culinary explorations, from
          tech reviews to philosophical musings, <b>BlogSpot</b> is the canvas
          where you can paint your thoughts and experiences for the world to
          see.
        </p>
        <p>
          What sets <b>BlogSpot</b> apart is our commitment to inclusivity and
          freedom of expression. We welcome voices from all walks of life,
          embracing diverse perspectives and encouraging respectful dialogue.
          Here, you all find a supportive network of fellow bloggers ready to
          engage, collaborate, and celebrate the richness of human experiences.
        </p>
        <p>
          Whether you are here to read, write, or simply explore, we invite you
          to join us on this journey of discovery and connection.{" "}
          <b>BlogSpot</b> is more than a website; it is a community of
          passionate individuals united by the love of storytelling.
        </p>
        <p>
          So, dive into the pages, discover new voices, share your stories, and
          let's create something extraordinary together at <b>BlogSpot</b>—a
          tapestry of tales that reflects the richness and diversity of the
          world we live in.
        </p>

        <h5>
          Join the <b>BlogSpot</b> Community
        </h5>
        <p>
          Whether you're a seasoned blogger or a newcomer to the world of
          writing, <b>BlogSpot</b> welcomes you with open arms. Join our
          community of storytellers, thinkers, and dreamers, and let's embark on
          this adventure together.
        </p>
        <p>
          Follow us on social media for updates, writing prompts, community
          spotlights, and more. Subscribe to our newsletter to receive the
          latest articles, exclusive content, and special offers directly in
          your inbox.
        </p>
        <p>
          Thank you for being part of the <b>BlogSpot</b> journey. Together,
          let's continue to celebrate the power of words, the beauty of
          storytelling, and the connections that unite us all. Welcome to{" "}
          <b>BlogSpot</b>—where every story finds a home.
        </p>
      </div>
    </article>
  );
};

export default About;
