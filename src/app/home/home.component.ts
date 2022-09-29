import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 term:string
  pageNumbers:number[]=[]
  currentPage=1
  trendingAll=[]
  
  constructor( private _MovieService:MovieService) {
    for(let i=1; i<10 ;i++){
       this.pageNumbers.push(i)
    }

    _MovieService.getTrendingAll(this.currentPage).subscribe((data)=>{
     this.trendingAll=data.results
    })
   }
  changePage(ind){
   this.currentPage=ind
   this._MovieService.getTrendingAll( this.currentPage).subscribe((data)=>{
    this.trendingAll=data.results

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
