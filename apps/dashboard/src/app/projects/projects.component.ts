import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project, emptyProject } from '@dashboard/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'dashboard-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projectTitle = 'Project-Management';
  selectedProject: Project;
  projects$: Observable<any>;

  constructor(private projectService: ProjectsService) {}

  ngOnInit(): void {
    this.projects$ = this.projectService.all();
  }

  getProjects() {
    this.projects$ = this.projectService.all();
  }

  saveProject(project) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  selectProject(project: Project) {
    this.selectedProject = project;
  }

  createProject(project: Project) {
    this.projectService.create(project).subscribe(() => {
      this.getProjects();
      this.resetProject();
    });
  }

  updateProject(project: Project) {
    this.projectService.update(project).subscribe(() => {
      this.getProjects();
      this.resetProject();
    });
  }

  deleteProject(project: Project) {
    this.projectService.delete(project.id).subscribe(() => {
      this.getProjects();
      this.resetProject();
    });
  }

  cancel() {
    this.resetProject();
  }

  resetProject() {
    this.selectProject(emptyProject);
  }
}
