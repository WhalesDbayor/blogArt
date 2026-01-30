const Router = require('express');
const { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog } = require('../controllers/blogController');

const blogRouter = Router();

blogRouter
  .get('/blogs', getBlogs)

  // get one blog
  .get('/blogs/:id', getBlogById)

  .post('/blogs', createBlog)

  .put('/blogs/:id', updateBlog)

  .delete('/blogs/:id', deleteBlog)
  
module.exports = blogRouter;