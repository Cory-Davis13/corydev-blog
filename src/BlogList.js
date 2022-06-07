import styles from "./BlogList.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const BlogList = (props) => {
  const [link, setLink] = useState("");
  const activeLink = (e) => {
    let clickedTitle = e.target.innerText;
    setLink(clickedTitle);
  };

  return (
    <ul className={styles["blog-list"]}>
      {props.posts
        .slice(0)
        .reverse()
        .map((post) => {
          return (
            <li key={post.title} className={styles["list-item"]}>
              <Link
                onClick={activeLink}
                to={`/blog/${post.id}`}
                className={
                  link === post.title
                    ? `${styles["list-link"]} ${styles["link-active"]}`
                    : styles["list-link"]
                }
              >
                {post.title}
              </Link>
            </li>
          );
        })}
      <li className={styles["list-item"]}>
        <Link to="/blog-posts" className={styles["list-link"]}>
          All Posts
        </Link>
      </li>
    </ul>
  );
};

export default BlogList;
