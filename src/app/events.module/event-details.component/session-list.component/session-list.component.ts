import {Component, Input, OnChanges} from "@angular/core";
import {ISession} from "../../models";

@Component({
  selector: 'session-list',
  templateUrl: 'session-list.component.html'
})
export class SessionListComponent {
  @Input()
  sessions!: ISession[];
  sort: 'a-z' | 'z-a' | undefined;
  filter: 'all' | 'beginner' | 'intermediate' | 'advanced' = "all";


  get visibleSessions(): ISession[] {
    console.log('Change');
    if (this.filter !== 'all') {
      if (this.sort === 'a-z') {
        return this.sessions.filter(session => session.level.toLocaleLowerCase() === this.filter).sort((s1: ISession, s2: ISession) => {
          if (s1.name > s2.name) return 1;
          else if (s1.name === s2.name) return 0;
          return -1;
        });
      } else if (this.sort == 'z-a') {
        return this.sessions.filter(session => session.level.toLocaleLowerCase() === this.filter).sort((s1: ISession, s2: ISession) => {
          if (s1.name > s2.name) return -1;
          else if (s1.name === s2.name) return 0;
          return 1;
        });
      }
      return this.sessions.filter(session => session.level.toLocaleLowerCase() === this.filter);
    } else {
      if (this.sort === 'a-z') {
        return this.sessions.sort((s1: ISession, s2: ISession) => {
          if (s1.name > s2.name) return 1;
          else if (s1.name === s2.name) return 0;
          return -1;
        });
      } else if (this.sort == 'z-a') {
        return this.sessions.sort((s1: ISession, s2: ISession) => {
          if (s1.name > s2.name) return -1;
          else if (s1.name === s2.name) return 0;
          return 1;
        });
      }
      return this.sessions;
    }
  }

}
