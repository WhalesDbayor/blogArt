const getBlogs = (req, res) => {
  res.json({message: 'Get all blogs'});
}

const getBlogById = (req, res) => {
  const { id } = req.params;
  res.json({message: `Get blog with ID: ${id}`});
}

const createBlog = (req, res) => {
  res.json({message: 'Create a new blog'});
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