import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Post from "pages/PostPage";
import Home from "pages/HomePage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
