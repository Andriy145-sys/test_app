import React from "react";
import PostItem from "./PostItem";

var PostList = function PostList(_ref) {
    var posts = _ref.posts,
        title = _ref.title;


    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            { style: { textAlign: 'center', marginTop: '20px' } },
            title
        ),
        posts.map(function (post) {
            return React.createElement(PostItem, { post: post, key: post.id });
        })
    );
};

export default PostList;