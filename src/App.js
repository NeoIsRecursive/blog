import React from "react";
import { useEffect, useState } from "react";
import GetSanityUrl from "./utils/GetSanityUrl.js";
import SinglePost from "./components/SinglePost.js";
import AllPosts from "./components/AllPosts.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.js";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
        <div className="p-4">
          <Routes>
              <Route path="/" element={<AllPosts />} />
              <Route path=":slug" element={<SinglePost />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
};

export default App;
