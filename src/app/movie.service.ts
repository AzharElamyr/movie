import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _HttpClient:HttpClient) { 

  }
  getTrendingAll(pageNumber):Observable<any>{
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/week?api_key=04a6167bc7a086c1379a6153d8de6079&page="+pageNumber)
    
  }

  getMovies(pageNumber):Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=04a6167bc7a086c1379a6153d8de6079&page='+pageNumber)
    
  }
  getPerson(pageNumber):Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/person/week?api_key=04a6167bc7a086c1379a6153d8de6079&page='+pageNumber)
    
  }
  getTvs(pageNumber):Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/week?api_key=04a6167bc7a086c1379a6153d8de6079&page='+pageNumber)
    
  }
 
}
