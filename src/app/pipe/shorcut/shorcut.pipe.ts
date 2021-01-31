import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorcut'
})
export class ShorcutPipe implements PipeTransform {

  transform(value: string, limit = 30): string {
    return value.length > limit ? value.substring(0, limit) + "..." : value;
  }

}
