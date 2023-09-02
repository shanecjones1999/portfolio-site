import Route from '@ember/routing/route';
import projects from '../data/projects';

export default class ProjectsRoute extends Route {
    model() {
      return { projects };
    }
}
