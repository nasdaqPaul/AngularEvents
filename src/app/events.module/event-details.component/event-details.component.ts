import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {EventsService} from "../services/events.service";
import {IEvent} from "../models";

@Component({
  templateUrl: 'event-details.component.html'
})
export class EventDetailsComponent implements OnInit {
  event!: IEvent

  constructor(private route: ActivatedRoute, private eventsService: EventsService) {
  }

  ngOnInit() {
    // console.log(this.route.data);
    this.route.data.subscribe(data => {
        this.event = data['event'];
      }
    )
  }
}
