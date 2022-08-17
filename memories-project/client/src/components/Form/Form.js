import React, {useEffect, useState} from "react";
import useStyles from './Form.module.styles';
import {TextField, Typography, Button, Paper} from "@material-ui/core";
import FileBase from 'react-file-base64';
import {useDispatch, useSelector} from "react-redux";
import {createPost, updatePost} from "../../redux/actions/posts";


const Form = ({currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        tags: '',
        message: '',
        selectedFile: ''
    });
    const classes = useStyles();
    const dispatch = useDispatch();

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
        clear();
    };

    const clear = () => {
        setCurrentId(null);
        setPostData({
            creator: '',
            title: '',
            tags: '',
            message: '',
            selectedFile: ''
        });
    };

    return (
        <>
            <Paper className={classes.paper}>
                <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`}
                      onSubmit={handleSubmit}>

                    <Typography variant='h6'>{(currentId) ? 'Edit a Memory' : 'Create a Memory'}</Typography>

                    <TextField
                        variant='outlined'
                        fullWidth
                        label='Creator'
                        name='creator'
                        value={postData.creator}
                        onChange={(e) => {
                            setPostData({...postData, creator: e.target.value})
                        }}
                    />

                    <TextField
                        variant='outlined'
                        fullWidth
                        label='Title'
                        name='title'
                        value={postData.title}
                        onChange={(e) => {
                            setPostData({...postData, title: e.target.value})
                        }}
                    />

                    <TextField
                        variant='outlined'
                        fullWidth
                        label='Message'
                        name='message'
                        value={postData.message}
                        onChange={(e) => {
                            setPostData({...postData, message: e.target.value})
                        }}
                    />

                    <TextField
                        variant='outlined'
                        fullWidth
                        label='Tags'
                        name='tags'
                        inputMode='multiple'
                        value={postData.tags}
                        onChange={(e) => {
                            setPostData({...postData, tags: e.target.value.split(',')})
                        }}
                    />

                    <div className={classes.fileInput}>
                        <FileBase
                            type='file'
                            multiple={false}
                            onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
                        />
                    </div>

                    <Button
                        className={classes.buttonSubmit}
                        variant='contained'
                        color='primary'
                        size='large'
                        type='submit'
                        fullWidth
                    >
                        Submit
                    </Button>

                    <Button
                        className={classes.buttonSubmit}
                        variant='contained'
                        color='secondary'
                        size='small'
                        type='clear'
                        onClick={clear}
                        fullWidth
                    >
                        Clear
                    </Button>

                </form>
            </Paper>
        </>

    )
};
export default Form;