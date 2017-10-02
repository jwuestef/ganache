import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ChocolatesComponent } from '../chocolates/chocolates.component';
import { ShopComponent } from '../shop/shop.component';
import { ContactComponent } from '../contact/contact.component';
import { BarksComponent } from '../barks/barks.component';
import { FudgeComponent } from '../fudge/fudge.component';
import { MorechocComponent} from '../morechoc/morechoc.component';
import { CreamsComponent } from '../creams/creams.component';
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
  {path:'barks',
   component: BarksComponent
  },
  {path:'fudge',
   component: FudgeComponent
  },
  {path: 'morechoc',
   component: MorechocComponent
  },
  {
    path: 'shop',
    component: ShopComponent
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
    path: 'creams',
    component: CreamsComponent
  },
  {
    path: 'fudge',
    component: FudgeComponent
  },
  {
    path: 'morechoc',
    component: MorechocComponent
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
