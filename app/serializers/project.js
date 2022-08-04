import JSONSerializer from '@ember-data/serializer/json';

export default class ProjectSerializer extends JSONSerializer {
  // normalizeFindRecordResponse(
  //   store,
  //   primaryModelClass,
  //   payload,
  //   id,
  //   requestType
  // ) {
  //   let json = super.normalizeFindRecordResponse(
  //     store,
  //     primaryModelClass,
  //     payload,
  //     id,
  //     requestType
  //   );
  //   console.log(JSON.stringify(json));
  //   let project = json.data;
  //   console.log(project.attributes.projectName);
  //   let elements = project.relationships.elements;
  //   console.log(elements);
  //   let admin = project.relationships.admin;
  //   console.log(admin.data.id);
  //   return json;
  // }
  //   normalizeResponse(store, primaryModelClass, payload, id, requestType) {
  //     let newPayload = {};
  //     newPayload[primaryModelClass.modelName] = payload;
  //     let json = super.normalizeResponse(
  //       store,
  //       primaryModelClass,
  //       newPayload,
  //       id,
  //       requestType
  //     );
  //     console.log(JSON.stringify(json));
  //   }
}
