import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';


export const routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**', redirectTo: '/'
  }
];
