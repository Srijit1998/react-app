import React, { useState } from "react";
import Layout from "./components/Layout/Layout";
import PostForm from "./components/PostForm/PostForm";
import PostList from "./components/Posts/PostList";

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: Math.floor(Math.random() * 100) + 1,
      postTitle: "Gooo!!!",
      gifUrl:
        "https://media2.giphy.com/media/FT0UFROtAbVEA/giphy-preview.gif?cid=f71134d8mgwyktf5b12ep71jvfv5q0tv9b341wui2vbfyjgi&rid=giphy-preview.gif&ct=g",
    },
  ]);

  const onAddDataHandler = (data) => {
    const postData = {
      id: Math.floor(Math.random() * 100) + 1,
      postTitle: data.inputValue,
      gifUrl: data.gifUrl,
    };
    setPosts([postData, ...posts]);
  };

  return (
    <Layout>
      <PostForm onAddDataHandler={onAddDataHandler} />
      <PostList posts={posts} />
    </Layout>
  );
};

export default App;
