import PostMessage from "../modals/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        const PostMessages = await PostMessage.find();
        console.log(PostMessages);
        res.status(200).json(PostMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

export const createPost = (req, res) => {
    try {
        res.send('Post oluşturuldu!');
    } catch (error) {

    }

};