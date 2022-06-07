import BlogArticle from "../BlogArticle";
import styles from "./BlogLanding.module.css";
import BlogList from "../BlogList";
import { useParams } from "react-router-dom";

const BlogLanding = (props) => {
  let params = useParams();

  return (
    <div className={styles["landing-wrapper"]}>
      <BlogArticle post={props} id={params.blogId} />
      <BlogList posts={props.blogPosts} />
    </div>
  );
};

export default BlogLanding;
