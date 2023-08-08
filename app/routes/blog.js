import Route from '@ember/routing/route';
import blogPosts from '../data/blog-posts';

export default class BlogPostRoute extends Route {
  model() {
    return blogPosts;
  }
}
