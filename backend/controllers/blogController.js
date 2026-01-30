const Blog = require("../schema/blogSchema");

const getBlogs = (req, res) => {
  res.json({message: 'Get all blogs'});
}

const getBlogById = (req, res) => {
  const { id } = req.params;
  res.json({message: `Get blog with ID: ${id}`});
}

// Create a blog
const createBlog = async (req, res) => {
  try {
    const { title, description, content, imageUrl } = req.body;

    if (!title || !description || !content) {
      return res.status(400).json({message: 'Title, description and content are required'});
    }
    const newBlog = new Blog({ title, description, content, imageUrl });
    await newBlog.save();
    res.status(201).json({message: 'Blog created successfully'});
  } catch (error) {
    res.status(500).json({message: 'Error creating blog', error: error.message});
  }
}

const updateBlog = (req, res) => {
  const { id } = req.params;
  res.json({message: `Update blog with ID: ${id}`});
}
const deleteBlog = (req, res) => {
  const { id } = req.params;
  res.json({message: `Delete blog with ID: ${id}`});
}

module.exports = {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog
};