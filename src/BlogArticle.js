import { useEffect, useState } from "react";
import styles from "./BlogArticle.module.css";

const BlogArticle = (props) => {
  const [activePost, setActivePost] = useState();
  useEffect(() => {
    if (props.id === undefined) {
      setActivePost(props.post.blogPosts.slice(0).reverse()[0]);
    } else {
      setActivePost(props.post.blogPosts.find((post) => post.id === props.id));
    }
  }, [props]);
  function createMarkup() {
    return { __html: activePost.content.html };
  }

  return (
    <div className={styles["article-wrapper"]}>
      {activePost === undefined ? (
        <p>Loading....</p>
      ) : (
        <div>
          <h1>{activePost.title}</h1>
          <div dangerouslySetInnerHTML={createMarkup()}></div>
        </div>
      )}
    </div>
  );
};

export default BlogArticle;
