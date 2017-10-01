import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ChocolatesComponent } from '../chocolates/chocolates.component';
import { ShopComponent } from '../shop/shop.component';
import { ContactComponent } from '../contact/contact.component';
import { BarksComponent } from '../barks/barks.component';


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
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**', redirectTo: '/'
  }
];
