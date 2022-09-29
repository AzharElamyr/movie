import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {MovieService} from '../movie.service'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
movieDetails:any={}
currentPage=1;
index;
moviesPage=[]
  constructor(_ActivatedRoute:ActivatedRoute, public _MovieService:MovieService) { 


    this.index= _ActivatedRoute.snapshot.paramMap.get('id')

   _MovieService.getMovies(this.currentPage).subscribe((data)=>{
     this.movieDetails=data.results[this.index]
   })
   

  }
  

  ngOnInit(): void {
  }

}
