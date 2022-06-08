import styles from "./BlogList.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const BlogList = (props) => {
  const [link, setLink] = useState("");
  const [flag, setFlag] = useState(false);

  const activeLink = (e) => {
    let clickedTitle = e.target.innerText;
    setLink(clickedTitle);
  };

  const handleAllPostClick = () => {
    flag === false ? setFlag(true) : setFlag(false);
  };

  useEffect(() => {
    props.allPostClick(flag);
  }, [flag]);

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
        <a
          href="#"
          onClick={handleAllPostClick}
          className={styles["list-link"]}
        >
          All Posts...
        </a>
      </li>
    </ul>
  );
};

export default BlogList;
