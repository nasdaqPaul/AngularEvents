import { Routes} from "@angular/router";
import {EventListComponent} from "./event-list/event-list.component";
import {EventDetailsComponent} from "./event-details/event-details.component";

// NOTE: The order of route objects is very important
export const routes: Routes = [
  {path:"events", component: EventListComponent},
  {path:"events/:eventId", component: EventDetailsComponent},
  {path:"", redirectTo:"events", pathMatch:"full"}
]
