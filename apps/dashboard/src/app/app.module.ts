import { NgModule } from '@angular/core';
import { MaterialModule } from '@dashboard/material';
import { BrowserModule } from '@angular/platform-browser';
import { CoreDataModule } from '@dashboard/core-data';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsDetailsComponent } from './projects/projects-details/projects-details.component';
import { RoutingModule } from '../app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectsListComponent,
    ProjectsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule,
    CoreDataModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
