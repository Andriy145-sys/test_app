var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import React, { useState } from "react";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import './styles/App.css';
function App() {
  var _useState = useState([{
    id: 1,
    title: 'Javascript',
    body: 'Javascript - programing language'
  }, {
    id: 2,
    title: 'Python',
    body: 'Python - programing language'
  }, {
    id: 3,
    title: 'Python1',
    body: 'Python - programing language'
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      posts = _useState2[0],
      setPosts = _useState2[1];

  return React.createElement(
    "div",
    { className: "App" },
    React.createElement(PostList, { posts: posts, title: 'Posts lists' })
  );
}

export default App;