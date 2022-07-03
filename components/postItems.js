import React from "react";

var postItems = function postItems() {
    return React.createElement(
        "div",
        { className: "post" },
        React.createElement(
            "div",
            { className: "post__content" },
            React.createElement(
                "strong",
                null,
                "Javascript"
            ),
            React.createElement(
                "div",
                null,
                "Javascript - programing language"
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

export default postItems;