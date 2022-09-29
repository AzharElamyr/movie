import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peoplesearch'
})
export class PeoplesearchPipe implements PipeTransform {

  transform(persons:any[],term:string): any {
    if(term==undefined){
      return persons
     }
   return persons.filter((persons)=>{
      return persons['name'].toLocaleLowerCase().includes(term.toLocaleLowerCase())
    })
  }

}
