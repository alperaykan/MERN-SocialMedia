import React, {useState} from "react";
import useStyles from './Form.module.styles';
import {TextField, Typography, Button, Paper} from "@material-ui/core";
import FileBase from 'react-file-base64';
import {useDispatch} from "react-redux";
import {createPost} from "../../redux/actions/posts";


const Form = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        tags: '',
        message: '',
        selectedFile: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
    };

    const clear = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Paper className={classes.paper}>
                <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`}
                      onSubmit={handleSubmit}>

                    <Typography variant='h6'>Create a Memory</Typography>

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
                            setPostData({...postData, tags: e.target.value})
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