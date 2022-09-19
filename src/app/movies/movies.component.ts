import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
movies=[]
pageNumbers:number[]=[]
currentPage=1
  constructor(private _MovieService:MovieService) { 
    for(let i=1; i<10 ;i++){
      this.pageNumbers.push(i)
   }

   _MovieService.getMovies(this.currentPage).subscribe((data)=>{
    this.movies=data.results
   })
  }
  changePage(ind){
    this.currentPage=ind
    this._MovieService.getMovies( this.currentPage).subscribe((data)=>{
     this.movies=data.results
 
    })
   }
   prev()
    {
       this.changePage(this.currentPage -1)
    }
    next()
    {
       this.changePage(this.currentPage +1)
    }
  ngOnInit(): void {
  }

}
