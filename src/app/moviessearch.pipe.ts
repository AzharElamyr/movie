import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moviessearch'
})
export class MoviessearchPipe implements PipeTransform {

  transform(movies:any[],term:string): any {
    if(term==undefined){
      return movies
     }
   return movies.filter((movies)=>{
      return movies['title']==undefined?movies['name'].toLocaleLowerCase().includes(term.toLocaleLowerCase()):movies['title'].toLocaleLowerCase().includes(term.toLocaleLowerCase())
    })
  }

}
