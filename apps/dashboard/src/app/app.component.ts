/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dashboard';
  links = [
    { path: '/projects', icon: 'home', title: 'Home' },
    { path: '/projects-details', icon: 'view_list', title: 'Projects-List' },
  ];

  ngOnInit(): void {}

  toggleSidenav() {}
}
