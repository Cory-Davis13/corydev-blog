import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import BlogLanding from "./routes/BlogLanding";
import BlogGrid from "./routes/BlogGrid";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="blog" element={<BlogLanding />}>
            <Route path=":blogId" element={<BlogLanding />} />
          </Route>
        </Route>
        <Route path="blog-posts" element={<BlogGrid />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
