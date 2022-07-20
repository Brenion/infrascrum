import { inject as service } from '@ember/service';

import Session from 'ember-simple-auth/services/session';

export default class SessionService extends Session {
  @service currentUser;

  handleAuthentication() {
    super.handleAuthentication(...arguments); // On récupère l'authentification par défaut de la classe qu'on étend (celle de ember-simple-auth)

    this.currentUser.load().catch(() => this.invalidate()); // Ca vient récupérer l'utilisateur qui s'est connecté (mais pour l'instant ça ne fait rien car pas d'user_id)
  }
}
