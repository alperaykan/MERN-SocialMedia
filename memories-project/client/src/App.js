import React, {useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core";
import memories from './images/memories.jpg';
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles";
import {useDispatch} from "react-redux";
import {getPosts} from './redux/actions/posts';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    },[dispatch]);

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} align='center' variant='h2'>Memories</Typography>
                <img className={classes.image} src={memories} alt='memories' height='60'/>
            </AppBar>

            <Grow in>
                <Container>
                    <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Container>
    )
};
export default App;