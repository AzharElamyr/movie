import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { HomedetailsComponent } from './homedetails/homedetails.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { PeopledetailsComponent } from './peopledetails/peopledetails.component';
import { TvComponent } from './tv/tv.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'trendingDetails/:page/:id',component:HomedetailsComponent},
  {path:'about',component:AboutComponent},
  {path:'movies',component:MoviesComponent},
  {path:'movieDetails/:page/:id',component:MovieDetailsComponent},
  {path:'people',component:PeopleComponent},
  {path:'peopleDetails/:page/:id',component:PeopledetailsComponent},
  {path:'tv',component:TvComponent},
  {path:'tvDetails/:page/:id',component:TvdetailsComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
