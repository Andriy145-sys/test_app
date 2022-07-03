import React from "react";
import MyButton from "./UI/buttons/MyButton";
import MyInput from "./UI/inputs/MyInput";

const AddPostForm = () => {

    return (
        <div>
            <MyInput type='text' placeholder="Post title"/>
            <MyInput type='text' placeholder="Post body"/>
            <MyButton>Create</MyButton>
        </div>
    )
}

export default AddPostForm