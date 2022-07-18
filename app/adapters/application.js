import RestAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RestAdapter {
  host = 'http://localhost:8080';
}
