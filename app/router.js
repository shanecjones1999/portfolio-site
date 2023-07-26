import EmberRouter from '@ember/routing/router';
import config from 'portfolio-site/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/' });
  this.route('about');
  this.route('blog');
  this.route('blog-post', { path: '/blog/:slug' });
  this.route('projects');
  this.route('not-found', { path: '/*path' });
});
