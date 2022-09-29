import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {MovieService} from '../movie.service'

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.scss']
})
export class TvdetailsComponent implements OnInit {
  tvDetails:any={}
  currentPage:any;
  index;
  
  constructor(_ActivatedRoute:ActivatedRoute,_MovieService:MovieService) {
    this.index= _ActivatedRoute.snapshot.paramMap.get('id')
    this.currentPage=_ActivatedRoute.snapshot.paramMap.get('page')
   _MovieService.getTvs(this.currentPage).subscribe((data)=>{
     this.tvDetails=data.results[this.index]
   })
   }

  ngOnInit(): void {
  }

}
