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
import { InvestorGuideComponent } from './tutorials/investor-guide/investor-guide.component';
import { ProgrammerGuideComponent } from './tutorials/programmer-guide/programmer-guide.component';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { AppSocketIoService } from './app.socketIo.service';
import { FileSelectDirective } from 'ng2-file-upload';

import { EditorService } from './projectsFolder/editor/editor.service';
import { ProjectsService } from './projectsFolder/projects/projects.service';
import { UserService } from './users/authentication/services/user.service';
import { AuthenticationService } from './users/authentication/services/authentication.service'
import { ChatComponent } from './users/chat/chat.component'
import { AuthGuard } from './users/authentication/guards/auth.guard';
import { MessageComponent } from './users/chat/message/message.component';
import { MessageService } from './users/chat/message.service';
import { ApiGuidesComponent } from './projectsFolder/api-guides/api-guides.component';
import { ContractComponent } from './users/contract/contract.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: AuthenticationComponent
  },
  {
    path: 'dashboard/developer',
    children: [
      { path: '', component: ProjectsComponent },
      { path: '', component: TopHeaderComponent, outlet: 'topheader' },
      { path: '', component: SideBarComponent, outlet: 'sidebar'}
    ]
  },
  {
    path: 'myprofile',
    children: [
      { path: '', component: MyProfileComponent },
      { path: '', component: TopHeaderComponent, outlet: 'topheader' },
      { path: '', component: SideBarComponent, outlet: 'sidebar'}
    ]
  },
  {
    path: 'community',
    children: [
      { path: '', component: CommunityComponent },
      { path: '', component: TopHeaderComponent, outlet: 'topheader' },
      { path: '', component: SideBarComponent, outlet: 'sidebar'}
    ]
  },
  {
    path: 'getting-started',
    children: [
      { path: '', component: TutorialsComponent },
      { path: '', component: TopHeaderComponent, outlet: 'topheader' },
      { path: '', component: SideBarComponent, outlet: 'sidebar'}
    ]
  },
  {
    path: 'investor-guide',
    children: [
      { path: '', component: InvestorGuideComponent },
      { path: '', component: TopHeaderComponent, outlet: 'topheader' },
      { path: '', component: SideBarComponent, outlet: 'sidebar'}
    ]
  },
  {
    path: 'programmer-guide',
    children: [
      { path: '', component: ProgrammerGuideComponent },
      { path: '', component: TopHeaderComponent, outlet: 'topheader' },
      { path: '', component: SideBarComponent, outlet: 'sidebar'}
    ]
  },
  {
    path: 'editor',
    children: [
      { path: ':id', component: EditorComponent },
      { path: '', component: TopHeaderComponent, outlet: 'topheader' },
      { path: '', component: SideBarComponent, outlet: 'sidebar'}
    ]
  },
  {
    path: 'contract',
    children: [
      { path: ':id', component: ContractComponent },
      { path: '', component: TopHeaderComponent, outlet: 'topheader' },
      { path: '', component: SideBarComponent, outlet: 'sidebar'}
    ]
  },
  {
    path: 'graphs',
    children: [
      { path: ':id', component: GraphsComponent },
      { path: '', component: TopHeaderComponent, outlet: 'topheader' },
      { path: '', component: SideBarComponent, outlet: 'sidebar'}
    ]
  },
  {
    path: 'chat',
    children: [
      { path: '', component: ChatComponent },
      { path: '', component: TopHeaderComponent, outlet: 'topheader' },
      { path: '', component: SideBarComponent, outlet: 'sidebar'}
    ]
  },
  {
    path: 'api-guides',
    children: [
      { path: '', component: ApiGuidesComponent },
      { path: '', component: TopHeaderComponent, outlet: 'topheader' },
      { path: '', component: SideBarComponent, outlet: 'sidebar'}
    ]
  },
  {
    path: 'leaderboards',
    children: [
      { path: '', component: LeaderboardsComponent },
      { path: '', component: TopHeaderComponent, outlet: 'topheader' },
      { path: '', component: SideBarComponent, outlet: 'sidebar'}
    ]
  },
  {
    path: 'dashboard/investor',
    children: [
      { path: '', component: DashboardComponent },
      { path: '', component: TopHeaderComponent, outlet: 'topheader' },
      { path: '', component: SideBarComponent, outlet: 'sidebar'}
    ]
  },
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
    ChatComponent,
    MessageComponent,
    InvestorGuideComponent,
    ProgrammerGuideComponent,
    AuthenticationComponent,
    ApiGuidesComponent,
    FileSelectDirective,
    ContractComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'justForex'}),
    FormsModule,
    HttpModule,
    AceEditorModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    Ng2HighchartsModule,
    DataTableModule,
    ToasterModule
    // authenticationRouting
  ],
  providers: [
    EditorService,
    ProjectsService,
    UserService,
    AuthenticationService,
    MessageService,
    ToasterService,
    AppSocketIoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private appSocketIoService: AppSocketIoService) {
    this.appSocketIoService.consumeEventOnMessageSaved();
  }
}
