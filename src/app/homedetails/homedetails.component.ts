import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {MovieService} from '../movie.service'

@Component({
  selector: 'app-homedetails',
  templateUrl: './homedetails.component.html',
  styleUrls: ['./homedetails.component.scss']
})
export class HomedetailsComponent implements OnInit {

  trendingDetails:any={}
  currentPage:any;
  index;
  
    constructor(_ActivatedRoute:ActivatedRoute, public _MovieService:MovieService) { 
      this.index= _ActivatedRoute.snapshot.paramMap.get('id')
      this.currentPage=_ActivatedRoute.snapshot.paramMap.get('page')
     _MovieService.getTrendingAll(this.currentPage).subscribe((data)=>{
       this.trendingDetails=data.results[this.index]
     })
    }
    
  ngOnInit(): void {
  }

}
