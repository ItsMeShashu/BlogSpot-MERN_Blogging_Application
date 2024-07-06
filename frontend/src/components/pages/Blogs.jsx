/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import LatestBlogs from "../miniComponents/LatestBlogs";
import { Context } from "../..";

const Blogs = () => {
  const { mode, blogs } = useContext(Context);

  return (
    <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
      <LatestBlogs blogs={blogs} title={"Blogs"} />
    </article>
  );
};

export default Blogs;
