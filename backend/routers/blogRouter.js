const Router = require('express');
const { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog } = require('../controllers/blogController');

const blogRouter = Router();

// get all blogs
blogRouter
  .get('/blogs', getBlogs)

  // get one blog
  .get('/blogs/:id', getBlogById)

  // create a blog
  .post('/blogs', createBlog)

  // update a blog
  .put('/blogs/:id', updateBlog)

  // delete a blog
  .delete('/blogs/:id', deleteBlog)

module.exports = blogRouter;