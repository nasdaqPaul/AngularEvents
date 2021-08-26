import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Router} from "@angular/router";
import {IEvent} from "../models";
import {Observable} from "rxjs";
import {EventsService} from "../services/events.service";

@Injectable()
export class EventDetailsResolver implements Resolve<IEvent> {
  constructor(private eventService: EventsService, private router: Router) {
  }
  resolve(route: ActivatedRouteSnapshot): Observable<IEvent> | Promise<IEvent> | IEvent {
    let event = this.eventService.getEvent( +route.params['eventId']);
    if (!event) this.router.navigate(['/404']);

    return event;
  }
}
