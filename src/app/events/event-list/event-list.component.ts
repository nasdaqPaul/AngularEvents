import {Component, OnInit} from "@angular/core";
import {EventsService} from "../../core/services/events.service";

@Component({
  selector: 'event-list',
  templateUrl: 'event-list.component.html'
})
export class EventListComponent implements OnInit{
  events: any;

  constructor(private eventsService: EventsService) {
  }

  ngOnInit() {
    this.events = this.eventsService.getEvents();
  }
}
