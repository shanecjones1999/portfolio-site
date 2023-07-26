// app/routes/blog-post.js
import Route from '@ember/routing/route';
import { A } from '@ember/array'; // Importing `A` to create an Ember array
import { inject as service } from '@ember/service';

import blogPosts from '../data/blog-posts'; // Adjust 'your-app-name' with your actual app name

export default class BlogPostRoute extends Route {
  @service router;
  
  model(params) {
    const blogPost = A(blogPosts).findBy('slug', params.slug);

    // If you use ID as the dynamic segment, you can find the post by ID like this:
    // const blogPost = A(blogPosts).findBy('id', params.post_id);

    if (blogPost) {
      return blogPost;
    }  
    // else {
    //   // Handle the case where the blog post is not found (e.g., display a 404 page)
    //   this.router.transitionTo('not-found');
    // }
  }
}
