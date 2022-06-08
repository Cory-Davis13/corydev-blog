import BlogArticle from "../BlogArticle";
import styles from "./BlogLanding.module.css";
import BlogList from "../BlogList";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const BlogLanding = (props) => {
  let params = useParams();
  const [gridFlag, setGridFlag] = useState(false);

  const handleAllPostClick = (flag) => {
    setGridFlag(flag);
  };
  useEffect(() => {
    props.showGrid(gridFlag);
  }, [gridFlag]);

  return (
    <div className={styles["landing-wrapper"]}>
      <BlogArticle post={props} id={params.blogId} />
      <BlogList posts={props.blogPosts} allPostClick={handleAllPostClick} />
    </div>
  );
};

export default BlogLanding;
