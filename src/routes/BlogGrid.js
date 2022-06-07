import BlogDisplay from "../BlogDisplay";
import styles from "./BlogGrid.module.css";
import { Link } from "react-router-dom";
import { gql, request } from "graphql-request";
import { useState, useEffect } from "react";

const QUERY = gql`
  {
    posts {
      date_published
      content {
        html
      }
      slug
      title
      id
    }
  }
`;

const BlogGrid = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await request(
        "https://api-ca-central-1.graphcms.com/v2/cl3n8hc993htn01z1h60y9rfs/master",
        QUERY
      ).then((data) => setPosts(data.posts));
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className={styles["blog-grid-title"]}>All Posts</h1>
      <ul className={styles["blog-grid-wrapper"]}>
        {posts
          .slice(0)
          .reverse()
          .map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
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
