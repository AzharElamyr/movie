import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
term:string;
tvs=[]
pageNumbers:number[]=[]
currentPage=1
  constructor( private _MovieService:MovieService) {
    for(let i=1; i<10 ;i++){
      this.pageNumbers.push(i)
   }

    _MovieService.getTvs(this.currentPage).subscribe((data)=>{
    this.tvs=data.results
    })
   }
   changePage(ind){
    this.currentPage=ind
    this._MovieService.getTvs( this.currentPage).subscribe((data)=>{
    this.tvs=data.results
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
