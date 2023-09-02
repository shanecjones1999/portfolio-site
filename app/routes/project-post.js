import Route from '@ember/routing/route';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';
import projectPosts from '../data/projects';

export default class ProjectPostRoute extends Route {
  @service router;

  model(params) {
    const projectPost = A(projectPosts).findBy('slug', params.slug);

    if (projectPost) {
      return { projectPost };
    }
  }
}