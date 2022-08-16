import React from "react";
import Post from './Post/Post';
import useStyles from './Posts.module.styles';

const Posts = () => {
    const classes = useStyles();

    return (
        <>
            <h2>Posts</h2>
            <Post/>
            <Post/>
            <Post/>
        </>
    )
};
export default Posts;