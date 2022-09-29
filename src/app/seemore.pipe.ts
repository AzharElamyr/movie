import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeemorePipe implements PipeTransform {

  transform(desc:string,limited:number): string {
    return desc.substring(0,limited);
  }

}
