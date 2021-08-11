import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {EventListComponent} from "./event-list/event-list.component"
import {EventThumbnailComponent} from "./event-thumbnail/event-thumbnail.component";
import {EventsService} from "./services/events.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventListComponent,
    EventThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
