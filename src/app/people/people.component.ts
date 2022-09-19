import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  persons=[]
  pageNumbers:number[]=[]
  currentPage=4
  constructor( private _MovieService:MovieService) {
    for(let i=1; i<10 ;i++){
      this.pageNumbers.push(i)
   }

    _MovieService.getPerson(this.currentPage).subscribe((data)=>{
     this.persons=data.results;
   
    })
   }
   changePage(ind){
    this.currentPage=ind
    this._MovieService.getPerson( this.currentPage).subscribe((data)=>{
     this.persons=data.results
 
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
