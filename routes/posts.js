
const { getPostsSchema, getPostSchema } = require('../controllers/schemas/posts.js');
const { getPostsHandler, getPostHandler } = require('../controllers/handlers/posts.js');

const getPostsOpts = {
    schema: getPostsSchema,
    handler: getPostsHandler,
  };

const getPostOpts = {
    schema: getPostSchema,
    handler: getPostHandler, 
};


const postRoutes = (fastify, options, done) => {
    fastify.get('/api/posts', getPostsOpts);
    fastify.get('/api/posts/:id', getPostOpts); 

    done();
  };


  
  module.exports = postRoutes