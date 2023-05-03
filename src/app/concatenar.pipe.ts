import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatenar'
})
export class ConcatenarPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(args)
    if (args[0] && args[1] != 0) {
      return `${args[0]} ${value} - Stock: ${args[1]}`
    }

    if (args[1] === 0) {
      return args[2]
    }
    return ` Binevenido, ha seleccionado ${value}`;
  }

}
