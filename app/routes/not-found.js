// app/routes/not-found.js
import Route from '@ember/routing/route';

export default class NotFoundRoute extends Route {
  // Override the default model hook to prevent any data fetching
  model() {
    return;
  }
}
