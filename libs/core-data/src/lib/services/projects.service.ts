import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './projects';

const BASE_URL = 'https://server-30-x-30.herokuapp.com/';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  model = 'projects';
  constructor(private httpClient: HttpClient) {}

  getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  getUrlForId(id: string) {
    return `${this.getUrl()}${id}`;
  }

  create(project: Project) {
    return this.httpClient.post(this.getUrl(), project);
  }

  update(project: Project) {
    return this.httpClient.patch(this.getUrlForId(project.id), project);
  }

  delete(projectId: string) {
    return this.httpClient.delete(this.getUrlForId(projectId));
  }
}
