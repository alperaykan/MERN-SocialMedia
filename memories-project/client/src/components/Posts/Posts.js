import React from "react";
import Post from './Post/Post';
import useStyles from './Posts.module.styles';
import {useSelector} from "react-redux";

const Posts = () => {
    const classes = useStyles();
    const fetchPosts = useSelector((state) => (state.posts))

    console.log(fetchPosts);

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