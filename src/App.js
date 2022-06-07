import "./App.css";
import BlogLanding from "./routes/BlogLanding";
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

function App() {
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
    <div className="App">
      <main>
        <BlogLanding blogPosts={posts} />
      </main>
    </div>
  );
}

export default App;
