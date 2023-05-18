import post from "../models/postModels.js"



//get all posts(cards)
const getAllPosts = async () => {
    try {
        const post = await post.find({});
        res.json(post);

    } catch (error) {
        res.status(500).json({ message: 'Fetching failed for this post', error: error.message }).send;
        console.log(error);
    }
}
//create new post
const createPost = async (req, res) => {
    const { name, title, postedDate, description, duration, guaranteeRequired, spending, need, imageUrl } = req.body;
    const post = new post(req.body);
    try {
        const savedPost = await post.create({
            name,
            title,
            postedDate,
            description,
            duration,
            guaranteeRequired,
            spending,
            need,
            imageUrl
        });
        res.json(savedPost);
    } catch (error) {
        res.status(500).json({ message: 'Saving failed for this post', error: error.message }).send;
        console.log(error);
    }
}

//getProductById
const getPostById = async (req, res) => {
    const { id } = req.params;
    try {
        if (req.params?.id) {
            const post = await post.findById(id);
            res.json(post);
        } else {
            res.status(404).json({ message: 'Post Not Found' }).send;
        }
    } catch (error) {
        res.status(404).json({ message: 'Fetching failed for this post', error: error.message }).send;
        console.log(error);
    }
}


export { getAllPosts, get, createPost, getPostById, getPost };