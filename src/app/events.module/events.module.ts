import {NgModule} from "@angular/core";
import {EventsService} from "./services/events.service";
import {RouterModule, Routes} from "@angular/router";
import {EventListComponent} from "./event-list.component/event-list.component";
import {EventThumbnailComponent} from "./event-list.component/event-thumbnail/event-thumbnail.component";
import {EventDetailsComponent} from "./event-details.component/event-details.component";
import {CommonModule} from "@angular/common";
import {EventDetailsResolver} from "./resolvers/event-details.resolver";
import {SessionListComponent} from "./event-details.component/session-list.component/session-list.component";
import {EventCreateComponent} from "./event-create.component/event-create.component";

const routes: Routes = [
  {path: 'events', component: EventListComponent},
  {path: '', redirectTo: 'events', pathMatch: 'full'},
  {path: 'events/new', component: EventCreateComponent},
  {path: 'events/:eventId', component: EventDetailsComponent, resolve: {event: EventDetailsResolver}}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    SessionListComponent,
    EventCreateComponent
  ],
  providers: [
    EventsService,
    EventDetailsResolver
  ]
})
export class EventsModule {

}
