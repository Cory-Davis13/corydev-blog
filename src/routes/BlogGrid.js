import BlogDisplay from "../BlogDisplay";
import styles from "./BlogGrid.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const BlogGrid = (props) => {
  const [showGrid, setShowGrid] = useState(true);
  const handleGridClick = () => {
    setShowGrid(false);
  };
  useEffect(() => {
    props.handleGridClick(showGrid);
  }, [showGrid]);

  return (
    <div>
      <h1 className={styles["blog-grid-title"]}>All Posts</h1>
      <ul className={styles["blog-grid-wrapper"]}>
        {props.blogPosts
          .slice(0)
          .reverse()
          .map((post) => (
            <Link
              onClick={handleGridClick}
              key={post.id}
              to={`/blog/${post.id}`}
            >
              {" "}
              <BlogDisplay
                title={post.title}
                datePublished={post.date_published}
                content={post.content.html}
              />
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default BlogGrid;
