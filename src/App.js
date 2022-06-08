import "./App.css";
import BlogLanding from "./routes/BlogLanding";
import { gql, request } from "graphql-request";
import { useState, useEffect } from "react";
import BlogGrid from "./routes/BlogGrid";

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

function App() {
  const [posts, setPosts] = useState([]);
  const [gridFlag, setGridFlag] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const data = await request(
        "https://api-ca-central-1.graphcms.com/v2/cl3n8hc993htn01z1h60y9rfs/master",
        QUERY
      ).then((data) => setPosts(data.posts));
    };
    fetchData();
  }, []);

  const showGrid = (flag) => {
    setGridFlag(flag);
  };

  return (
    <div className="App">
      <header className="site-header">
        <ul className="nav-list">
          <li className="list-item">
            <a>Nav Items</a>
          </li>
          <li className="list-item">
            <a href="#">Nav Items</a>
          </li>
          <li className="list-item">
            <a href="#">Nav Items</a>
          </li>
          <li className="list-item">
            <a href="#">Nav Items</a>
          </li>
          <li className="list-item">
            <a href="#">Nav Items</a>
          </li>
        </ul>
      </header>
      <main>
        {gridFlag === false ? (
          <BlogLanding blogPosts={posts} showGrid={showGrid} />
        ) : (
          <BlogGrid blogPosts={posts} handleGridClick={showGrid} />
        )}
      </main>
    </div>
  );
}

export default App;
