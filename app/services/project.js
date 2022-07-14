import Service from '@ember/service';
import { tracked } from 'tracked-built-ins';
import Project from 'infrascrum/models/project';
import { isArray } from '@ember/array';

export default class ProjectService extends Service {
  url = 'http://localhost:3000/projects';

  readAll() {
    return this.http.get(this.url);
  }
  read(id) {
    return this.http.get(`${this.url}/${id}`);
  }
  post(projects) {
    return this.http.post(this.url, projects);
  }
  update(projects) {
    return this.http.patch(`${this.url}/${projects.id}`, projects);
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
