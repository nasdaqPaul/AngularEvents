import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {EventListComponent} from "./event-list/event-list.component"
import {EventThumbnailComponent} from "./event-thumbnail/event-thumbnail.component";
import {EventsService} from "./services/events.service";
import {EventDetailsComponent} from "./event-details/event-details.component";
import {RouterModule} from "@angular/router";
import {routes} from "./router";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
