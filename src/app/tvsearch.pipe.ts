import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tvsearch'
})
export class TvsearchPipe implements PipeTransform {

  transform(tvs:any[],term:string): any {
    if(term==undefined){
      return tvs
     }
   return tvs.filter((tvs)=>{
      return tvs['name'].toLocaleLowerCase().includes(term.toLocaleLowerCase())
    })
  }

}
