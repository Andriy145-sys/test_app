import React from "react";
import '../styles/App.css';

var PostItem = function PostItem(props) {
    var post = props.post;
    return React.createElement(
        "div",
        { className: "post" },
        React.createElement(
            "div",
            { className: "post__content" },
            React.createElement(
                "strong",
                null,
                post.id,
                ".",
                post.title
            ),
            React.createElement(
                "div",
                null,
                post.body
            )
        ),
        React.createElement(
            "div",
            { className: "post__btn" },
            React.createElement(
                "button",
                null,
                "Delete"
            )
        )
    );
};

export default PostItem;