// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as $ from 'jquery';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChocolatesComponent } from './chocolates/chocolates.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { TexteditorComponent } from './services/texteditor.component';

// Configuration
import { routes } from './services/routes';
import { firebaseConfig } from '../environments/firebase.config';

// Services
import { AuthService } from './services/auth.service';
import { ContentService } from './services/content.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ChocolatesComponent,
    ShopComponent,
    ContactComponent,
    TexteditorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    AuthService,
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
