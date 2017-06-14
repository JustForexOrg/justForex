import { AuthenticationComponent } from './authentication.component'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const authenticationRoutes: Routes = [
  {
    path: '/authentication',
    component: AuthenticationComponent
  }
];

export const authenticationRouting = RouterModule.forChild(authenticationRoutes);

@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    authenticationRouting
  ],
  providers: [  ],
  bootstrap: [AuthenticationComponent]
})
export class AuthenticationModule { }
