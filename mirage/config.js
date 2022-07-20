import Mirage from 'ember-cli-mirage';
export default function () {
  // These comments are here to help you get started. Feel free to delete them.
  /*
  Config (with defaults).
  
  Note: these only affect routes defined *after* them!
  */
  this.urlPrefix = 'http://localhost:8080'; // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = ''; // make this `/api`, for example, if your API is namespaced
  this.resource('projects');
  this.resource('users');
  this.resource('roles');
  this.resource('elements');
  this.resource('checklists');
  this.resource('tasks');
  this.resource('types');

  function formEncodedToJson(encoded) {
    var result = {};
    encoded.split('&').forEach(function (part) {
      var item = part.split('=');
      result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
  }

  this.post('/login', function (db, request) {
    var params = formEncodedToJson(request.requestBody);
    if (params.username === 'user' && params.password === 'machin') {
      return {
        access_token: 'SecretToken',
        token_type: 'bearer',
        user: {
          username: 'Mon beau chaton',
          infoUltraImportante: 'Rien',
        },
      };
    } else {
      var body = { errors: 'Email or password is invalid' };
      return new Mirage.Response(401, {}, body);
    }
  });
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing
  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
}
