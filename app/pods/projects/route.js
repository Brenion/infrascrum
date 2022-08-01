import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ProjectsRoute extends Route {
  @service store;
  @service currentUser;
  async model() {
    console.log('ici');
    console.log(this.currentUser);
    console.log('stop');
    // return this.store.findAll('project');

    // return await this.store.query('project', { username: username });

    // let task = this.store.findAll('task');
  }
}
// @service store;
//   async model(params) {
//     let project = await this.store.findRecord('project', params.id);
//     let element = await this.store.query('element', {
//       projectId: params.id,
//       include: 'tasks',
//     });
//     // let task = this.store.findAll('task');
//     return { project: project, element: element, task: element.tasks };
//   }
