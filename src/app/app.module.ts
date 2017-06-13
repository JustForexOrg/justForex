import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AceEditorModule } from 'ng2-ace-editor';
import { Ng2HighchartsModule } from 'ng2-highcharts';
import {DataTableModule} from "angular2-datatable";

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
import { UserService } from './users/authentication/services/user.service';
import { AuthenticationService } from './users/authentication/services/authentication.service'
import { ChatComponent } from './users/chat/chat.component'
import { AuthGuard } from './users/authentication/guards/auth.guard';

//Components for Chat Service
import { UsersService } from './users/chat/user/users.service';
import { ThreadsService } from './users/chat/thread/threads.service';
import { MessagesService } from './users/chat/message/messages.service';
import { ChatMessageComponent } from './users/chat/chat-message/chat-message.component';
import { ChatThreadComponent } from './users/chat/chat-thread/chat-thread.component';
import { ChatNavBarComponent } from './users/chat/chat-nav-bar/chat-nav-bar.component';
import { ChatThreadsComponent } from './users/chat/chat-threads/chat-threads.component';
import { ChatWindowComponent } from './users/chat/chat-window/chat-window.component';
import { ChatPageComponent } from './users/chat/chat-page/chat-page.component';
import { FromNowPipe } from './users/chat/pipes/from-now.pipe';

export const appRoutes: Routes = [
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
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: '',
    component: DashboardComponent
  },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   canActivate: [AuthGuard]
  // }
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
    ChatComponent,
    ChatMessageComponent,
    ChatThreadComponent,
    ChatNavBarComponent,
    ChatThreadsComponent,
    ChatWindowComponent,
    ChatPageComponent,
    FromNowPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AceEditorModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    Ng2HighchartsModule,
    DataTableModule
  ],
  providers: [
    EditorService,
    ProjectsService,
    UserService,
    AuthenticationService,
    MessagesService,
    ThreadsService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
