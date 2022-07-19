import Service from '@ember/service';
import Project from 'infrascrum/models/project';
import { isArray } from '@ember/array';
import { tracked } from '@glimmer/tracking';

// function extractRelationships(object) {
//   let relationships = {};
//   for (let relationshipsName in object) {
//     relationships[relationshipsName] = object[relationshipsName].links.related;
//   }
//   return relationships;
// }

export default class ProjectService extends Service {
  @tracked response;
  storage = {};
  constructor() {
    super(...arguments);
    this.storage.projects = [];
  }

  async fetchAll() {
    let response = await fetch('http://localhost:3000/projects');
    let json = await response.json();
    console.log(response);
    console.log('------------');
    this.loadAll(json);
    return this.projects;
  }

  async create(attributes) {
    console.log('on rentre ici');
    let payload = { ...attributes };
    console.log(payload);
    let response = await fetch('http://localhost:3000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    let json = await response.json();
    return json;
  }

  // async delete(attributes) {
  //   console.log('delete');
  //   let payload = { ...attributes };
  //   console.log(payload);
  //   let response = await fetch(`http://localhost:3000/projects/id`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(payload),
  //   });
  //   let json = await response.json();
  //   return json;
  // }

  load(response) {
    return this._loadResource(response);
  }

  loadAll(json) {
    let records = [];

    for (let item of json) {
      records.push(this._loadResource(item));
    }
    return records;
  }

  _loadResource(data) {
    let record;
    let { id, ...attributes } = data;

    //let rels = extractRelationships(relationships);
    record = new Project({ id, ...attributes });

    this.add(record);

    return record;
  }

  add(record) {
    let collection = this.storage.projects;

    let recordIds = collection.map((record) => record.id);
    if (!recordIds.includes(record.id)) {
      collection.push(record);
    }
  }

  get projects() {
    return this.storage.projects;
  }
  find(filterFn) {
    let collection = this.projects;
    return collection.find(filterFn);
  }
}
