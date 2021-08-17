import {NgModule} from "@angular/core";
import {EventsService} from "./services/events.service";
import {RouterModule, Routes} from "@angular/router";
import {EventListComponent} from "./event-list/event-list.component";
import {EventThumbnailComponent} from "./event-thumbnail/event-thumbnail.component";
import {EventDetailsComponent} from "./event-details/event-details.component";
import {CommonModule} from "@angular/common";

const routes: Routes =[
  {path: '', redirectTo: 'events'},
  {path: 'events', component: EventListComponent},
  {path: 'events/:eventId', component: EventDetailsComponent}
]
@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
  ],
  providers: [
    EventsService
  ]
})
export class EventsModule {

}
