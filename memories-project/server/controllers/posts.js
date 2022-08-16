import PostMessage from "../modals/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        const PostMessages = await PostMessage.find();
        console.log(PostMessages);
        res.statusCode(200).json(PostMessages);
    } catch (error) {
        res.statusCode(404).json({message: error.message});
    }
};

export const createPost = (req, res) => {
    try {
        res.send('Post oluşturuldu!');
    } catch (error) {

    }

};