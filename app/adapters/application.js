import RestAdapter from '@ember-data/adapter/rest';
import { inject as service } from '@ember/service';
import TokenAdapterMixin from 'ember-simple-auth-token/mixins/token-adapter';
import TokenAuthorizerMixin from 'ember-simple-auth-token/mixins/token-authorizer';

export default class ApplicationAdapter extends RestAdapter {
  @service session;
  host = 'http://localhost:8000';

  get headers() {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: '',
    };

    if (this.session.isAuthenticated) {
      headers[
        'Authorization'
      ] = `Bearer ${this.session.data.authenticated.access_token}`;
    }
    return headers;
  }

  handleResponse(status) {
    if (status === 401 && this.session.isAuthenticated) {
      this.session.invalidate();
    }
    return super.handleResponse(...arguments);
  }
}
// headers: computed('session.isAuthenticated', 'session.data.authenticated.token', function() {
//   if (this.session.isAuthenticated) {
//     return {
//       Authorization: `Bearer ${this.session.data.authenticated.token}`,
//     };
//   } else {
//     return {};
//   }
// }),
