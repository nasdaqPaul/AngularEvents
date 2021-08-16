import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from "./core/components/navbar/navbar.component";
import {EventListComponent} from "./events/event-list/event-list.component"
import {EventThumbnailComponent} from "./events/event-thumbnail/event-thumbnail.component";
import {EventsService} from "./core/services/events.service";
import {EventDetailsComponent} from "./events/event-details/event-details.component";
import {RouterModule} from "@angular/router";
import {routes} from "./router";
import {FooterComponent} from "./core/components/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent, FooterComponent
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
