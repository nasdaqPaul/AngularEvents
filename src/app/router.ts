import {Routes} from "@angular/router";
import {NotFoundComponent} from "./core/components/not-found.component";

// NOTE: The order of route objects is very important
export const routes: Routes = [
  {path: "", loadChildren: () => import('./events.module/events.module').then(m => m.EventsModule)},
  {
    path: 'auth',
    loadChildren: () => import('./core/authentication.module/authentication.module').then(module => module.AuthenticationModule)
  },
  {path: "**", component: NotFoundComponent}
]
