// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//
// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';
//
// // if (environment.production) {
// //   enableProdMode();
// // }
//
// // platformBrowserDynamic().bootstrapModule(AppModule);
//
// export function main(): any {
//   return platformBrowserDynamic().bootstrapModule(AppModule);
// }

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
