import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';
import { ProductoInterface } from 'src/app/Interfaces/ProductoInterface';


@Injectable({
  providedIn: 'root'
})

export class ProductosService {
  //***Resolucion con pipe() - Este reciben un dato y lo transforma***//
  constructor(private http: HttpClient) { }

  getAll():Promise<ProductoInterface[]> {
    return lastValueFrom(this.http.get<ProductoInterface[]>('https://api.mercadolibre.com/sites/MLA/search?q=juego de mates').pipe(map((value: any) => value.results)))
  }

  getById(id: string):Promise<ProductoInterface> {
    return lastValueFrom(this.http.get<ProductoInterface>(`https://api.mercadolibre.com/items/${id}`))
  }

  getDescription(id: string) {
    return lastValueFrom(this.http.get(`https://api.mercadolibre.com/items/${id}/description`))
  }


  //***Resolucion con Promise***//
  //  constructor(private http:HttpClient){}

  //  getAll() {
  //   return lastValueFrom(this.http.get('https://api.mercadolibre.com/sites/MLA/search?q=ipod'))
  //  }



  //***Resolucion con suscribe***//
  // constructor(private http:HttpClient) { }

  // getAll() {
  //   return this.http.get('https://api.mercadolibre.com/sites/MLA/search?q=ipod')
  // }





}
