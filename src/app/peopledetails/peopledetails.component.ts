import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {MovieService} from '../movie.service'
@Component({
  selector: 'app-peopledetails',
  templateUrl: './peopledetails.component.html',
  styleUrls: ['./peopledetails.component.scss']
})
export class PeopledetailsComponent implements OnInit {
  personDetails:any={}
  currentPage:any;
  index;
  
  constructor(_ActivatedRoute:ActivatedRoute, public _MovieService:MovieService) { 
    this.index= _ActivatedRoute.snapshot.paramMap.get('id')
    this.currentPage=_ActivatedRoute.snapshot.paramMap.get('page')
   _MovieService.getPerson(this.currentPage).subscribe((data)=>{
     this.personDetails=data.results[this.index]
     console.log(  this.personDetails)
   })
  }
  

  ngOnInit(): void {
  }

}
