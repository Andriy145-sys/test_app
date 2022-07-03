import React from "react";
import '../styles/App.css'
import MyButton from "./UI/buttons/MyButton";

const PostItem = (props) =>  {
    let post = props.post;
    return (
        <div className="post">
            <div className="post__content">
                <strong>{post.id}.{post.title}</strong>
                <div>
                   {post.body}
                </div>
            </div>
            <div className="post__btn">
                <MyButton>Delete</MyButton>
            </div>
        </div>
    )
}

export default PostItem;