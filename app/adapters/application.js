import RestAdapter from '@ember-data/adapter/rest';
import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends RestAdapter {
  @service session;
  host = 'http://localhost:8000';

  get headers() {
    const headers = {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
      Authorization: '',
    };
    if (this.session.isAuthenticated) {
      headers[
        'Authorization'
      ] = `Bearer ${this.session.data.authenticated.access_token}`;
    }
    return headers;
  }
}
