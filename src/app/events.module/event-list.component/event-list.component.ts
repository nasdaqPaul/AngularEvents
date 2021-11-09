import {Component, OnInit} from "@angular/core";
import {EventsService} from "../services/events.service";

@Component({
  selector: 'event-list',
  templateUrl: 'event-list.component.html',
  styles: [
    `
        event-thumbnail:hover {
          background-color: red;
          cursor: pointer;
        }
    `
  ]

})
export class EventListComponent implements OnInit{
  events: any;

  constructor(private eventsService: EventsService) {
  }

  ngOnInit() {
    this.events = this.eventsService.getEvents();
  }
}
