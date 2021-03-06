// Module imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AppRoutingModule } from './app-routing-module';
import { MaterializeModule } from 'angular2-materialize';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { StarRatingModule } from 'angular-star-rating/src/star-rating.module';

// Component imports
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { ConcertComponent } from './components/concert/concert.component';
import { UserComponent } from './components/user/user.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ArtistComponent } from "./components/artist/artist.component"
import { AlbumComponent } from "./components/album/album.component"

// Guard imports
import { AuthGuard } from './guards/auth.guard';

// Authentication
import { AuthService } from "./services/auth.service";
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

// Temporary stuff
import { initializeApp, database } from 'firebase';

// Test
import { TestDirective } from './directives/test.directive';
import { TestPipe } from './pipes/test.pipe';
import { AdminComponent } from './components/admin/admin.component';
import { SearchComponent } from './components/search/search.component';
import { SafePipe } from './pipes/safe.pipe';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { AboutComponent } from './components/about/about.component';

// Angularfire2 documentation https://github.com/angular/angularfire2/tree/master/docs
export const firebaseConfig = {
  apiKey: "AIzaSyAT-aho1S_5doVAxms3PuFaTzb31CGsEmA",
    authDomain: "iprogd-project.firebaseapp.com",
    databaseURL: "https://iprogd-project.firebaseio.com",
    projectId: "iprogd-project",
    storageBucket: "iprogd-project.appspot.com",
    messagingSenderId: "298381157046"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

// Log entire db
// TODO: Remove when project finished
initializeApp(firebaseConfig);
//database().ref().on('value', snapshot => console.log(snapshot.val()));

@NgModule({
  declarations: [
    AppComponent,
    ConcertComponent,
    UserComponent,
    PageNotFoundComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    TestDirective,
    TestPipe,
    AdminComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent,
    SafePipe,
    LoadingIndicatorComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    StarRatingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    AppRoutingModule,
    MaterializeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyChiF662GOUy0E9_ncWL4Ekq-y1luWh6bw'
    })
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
