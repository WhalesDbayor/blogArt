const Blog = require("../schema/blogSchema");

// Get all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    if (blogs.length === 0) {
      return res.status(404).json({message: 'No blogs found'});
    }
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({message: 'Error fetching blogs', error: error.message});
  }
}

// Get blog by ID
const getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({message: 'Blog not found'});
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({message: 'Error fetching blog', error: error.message});
  }
}

// Create a blog
const createBlog = async (req, res) => {
  try {
    const { title, description, content, imageUrl } = req.body;

    // const userId = req.params.userId;
    // if (!userId) {
    //   return res.status(400).json({message: 'User ID is required to create a blog'});
    // }

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

// Update a blog
const updateBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedBlog) {
      return res.status(404).json({message: 'Blog not found'});
    }
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({message: 'Error updating blog', error: error.message});
  }
}

// Delete a blog
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return res.status(404).json({message: 'Blog not found'});
    }
    res.status(200).json({message: 'Blog deleted successfully'});
  } catch (error) {
    res.status(500).json({message: 'Error deleting blog', error: error.message});
  }
}
module.exports = {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog
};