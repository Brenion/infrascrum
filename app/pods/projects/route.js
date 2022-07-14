import Route from '@ember/routing/route';
import { service } from '@ember/service';
import fetch from 'fetch';
import {
  isAbortError,
  isServerErrorResponse,
  isUnauthorizedResponse,
} from 'ember-fetch/errors';

export default class ProjectsRoute extends Route {
  // appel du service store
  @service project;
  @service store;

  // model() {
  //   return this.store.findAll('project');
  // }
  // readProjects() {
  //   this.service.readAll().subscribe((response) => {
  //     this.projects = response;
  //   });
  // }
  model() {
    return fetch('http://localhost:3000/projects')
      .then(function (response) {
        if (response.ok) {
          console.log(response);
          return response.json();
        } else if (isUnauthorizedResponse(response)) {
        } else if (isServerErrorResponse(response)) {
        }
      })
      .catch(function (error) {
        if (isAbortError(error)) {
        }
      });
  }
}
