// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as $ from 'jquery';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChocolatesComponent } from './chocolates/chocolates.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { TexteditorComponent } from './services/texteditor.component';
import { TrufflesComponent } from './truffles/truffles.component';
import { AssortedComponent } from './assorted/assorted.component';
import { BarksComponent } from './barks/barks.component';
import { FudgeComponent } from './fudge/fudge.component';
import { OtherchocComponent } from './otherchoc/otherchoc.component';
import { SeasonalComponent } from './seasonal/seasonal.component';
import { FooterComponent } from './footer/footer.component';

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
    TexteditorComponent,
    TrufflesComponent,
    AssortedComponent,
    BarksComponent,
    FudgeComponent,
    OtherchocComponent,
    SeasonalComponent,
    FooterComponent,
    TexteditorComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FlashMessagesModule,
    AngularFontAwesomeModule
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
