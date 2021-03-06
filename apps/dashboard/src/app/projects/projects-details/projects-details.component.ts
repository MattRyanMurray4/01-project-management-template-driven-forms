import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '@dashboard/core-data';

@Component({
  selector: 'dashboard-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss'],
})
export class ProjectsDetailsComponent {
  currentProject: Project;
  originalTitle;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set project(value) {
    if (value) this.originalTitle = value.title;
    this.currentProject = Object.assign({}, value);
  }

  save(project) {
    this.saved.emit(project);
  }

  cancel() {
    this.cancelled.emit();
  }
}
