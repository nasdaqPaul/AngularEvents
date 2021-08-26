import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from "./core/components/navbar/navbar.component";
import {RouterModule} from "@angular/router";
import {routes} from "./router";
import {FooterComponent} from "./core/components/footer.component";
import {NotFoundComponent} from "./core/components/not-found.component";
import {AuthenticationService} from "./core/authentication.module/services/authentication.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
