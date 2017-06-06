import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AceEditorModule } from 'ng2-ace-editor';
import { Ng2HighchartsModule } from 'ng2-highcharts';

import { AppComponent } from './app.component';
import { TopHeaderComponent } from './fixed/top-header/top-header.component'
import { SideBarComponent } from './fixed/side-bar/side-bar.component'
import { DashboardComponent }  from './users/dashboard/dashboard.component';
import { ProjectsComponent } from './projectsFolder/projects/projects.component'
import { MyProfileComponent } from './myprofile/myprofile.component'
import { CommunityComponent } from './users/community/community.component'
import { TutorialsComponent } from './tutorials/tutorials.component'
import { EditorComponent } from './projectsFolder/editor/editor.component'
import { MyprojectComponent } from './projectsFolder/myproject/myproject.component'
import { GraphsComponent } from './projectsFolder/graphs/graphs.component'
import { LeaderboardsComponent } from './users/leaderboards/leaderboards.component';
import { AuthenticationComponent } from './users/authentication/authentication.component'

import { EditorService } from './projectsFolder/editor/editor.service';
import { ProjectsService } from './projectsFolder/projects/projects.service';
import { UsersService } from './users/users.service'

export const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'myprojects',
    component: ProjectsComponent
  },
  {
    path: 'myprofile',
    component: MyProfileComponent
  },
  {
    path: 'community',
    component: CommunityComponent
  },
  {
    path: 'tutorials',
    component: TutorialsComponent
  },
  {
    path: 'editor',
    component: EditorComponent
  },
  {
    path: 'graphs',
    component: GraphsComponent
  },
  {
    path: 'leaderboards',
    component: LeaderboardsComponent
  },
  {
    path: 'authentication',
    component: AuthenticationComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    SideBarComponent,
    DashboardComponent,
    ProjectsComponent,
    MyProfileComponent,
    TutorialsComponent,
    CommunityComponent,
    EditorComponent,
    MyprojectComponent,
    GraphsComponent,
    LeaderboardsComponent,
    AuthenticationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AceEditorModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    Ng2HighchartsModule
  ],
  providers: [
    EditorService,
    ProjectsService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
