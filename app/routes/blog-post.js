import Route from '@ember/routing/route';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';

import blogPosts from '../data/blog-posts';

export default class BlogPostRoute extends Route {
  @service router;

  model(params) {
    const blogPost = A(blogPosts).findBy('slug', params.slug);

    if (blogPost) {
      return blogPost;
    }
  }
}
