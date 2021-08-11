import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {EventsService} from "../services/events.service";

@Component({
  templateUrl: 'event-details.component.html'
})
export class EventDetailsComponent implements OnInit{
  event: any

  constructor(private route: ActivatedRoute, private eventsService: EventsService) {
  }

  ngOnInit() {
    let eventId: number = + this.route.snapshot.params['eventId'];
    this.event = this.eventsService.getEvent(eventId);

    console.log('Innitted')
  }
}
