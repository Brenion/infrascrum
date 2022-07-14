import { tracked } from '@glimmer/tracking';

export default class ProjectModel {
  @tracked projectName;

  constructor(
    { id, projectName, startDate, endDate, description, image },
    relationships = {}
  ) {
    this.id = id;
    this.projectName = projectName;
    this.startDate = startDate;
    this.endDate = endDate;
    this.description = description;
    this.image = image;
    this.relationships = relationships;
  }
}
