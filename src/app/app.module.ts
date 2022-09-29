import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { TvComponent } from './tv/tv.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {HttpClientModule} from '@angular/common/http';
import { SeemorePipe } from './seemore.pipe';
import { MoviessearchPipe } from './moviessearch.pipe'
import {FormsModule} from '@angular/forms';
import { TvsearchPipe } from './tvsearch.pipe';
import { PeoplesearchPipe } from './peoplesearch.pipe';
import { MovieDetailsComponent } from './movie-details/movie-details.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    TvComponent,
    MoviesComponent,
    PeopleComponent,
    ContactsComponent,
    NotfoundComponent,
    SeemorePipe,
    MoviessearchPipe,
    TvsearchPipe,
    PeoplesearchPipe,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
