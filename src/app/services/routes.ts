import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ChocolatesComponent } from '../chocolates/chocolates.component';
import { ContactComponent } from '../contact/contact.component';
import { BarksComponent } from '../barks/barks.component';
import { FudgeComponent } from '../fudge/fudge.component';
import { OtherchocComponent } from '../otherchoc/otherchoc.component';
import { AssortedComponent } from '../assorted/assorted.component';
import { SeasonalComponent } from '../seasonal/seasonal.component';
import { TrufflesComponent } from '../truffles/truffles.component';

export const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'chocolates',
    component: ChocolatesComponent
  },
  {
    path: 'barks',
    component: BarksComponent
  },
  {
    path: 'fudge',
    component: FudgeComponent
  },
  {
    path: 'otherchoc',
    component: OtherchocComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'barks',
    component: BarksComponent
  },
  {
    path: 'assorted',
    component: AssortedComponent
  },
  {
    path: 'fudge',
    component: FudgeComponent
  },
  {
    path: 'seasonal',
    component: SeasonalComponent
  },
  {
    path: 'truffles',
    component: TrufflesComponent
  },
  {
    path: '**', redirectTo: '/'
  }
];
