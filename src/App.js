import React, { useState } from "react";
import PostList from "./components/PostList";
import AddPostForm from "./components/AddPostForm";
import './styles/App.css'
function App() {

  const [posts] = useState(
    [
      {
        id: 1,
        title: 'Javascript',
        body: 'Javascript - programing language'
      },
      {
        id: 2,
        title: 'Python',
        body: 'Python - programing language'
      },
      {
        id: 3,
        title: 'Python1',
        body: 'Python - programing language'
      }
    ]
  )

  return (
    <div className="App">
      <AddPostForm />
      <PostList posts={posts} title={'Posts lists'} />
    </div>
  );
}

export default App;
