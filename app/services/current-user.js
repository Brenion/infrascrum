import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CurrentUserService extends Service {
  @service session;
  @service store;

  @tracked user;

  async load() {
    // Pour l'instant ça ne marche pas mais plus tard lorsqu'on recevra le token du backend, celui-ci devra envoyer un user_id et on viendra récupérer l'utilisateur courant
    let userId = this.session.data.authenticated.user_id;
    if (userId) {
      let user = await this.store.findRecord('user', userId);
      this.user = user;
    }
  }
}
