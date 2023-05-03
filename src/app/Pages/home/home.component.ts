import { Component } from '@angular/core';
import { ProductosService } from '../../Service/productos/productos.service';
import { ProductoInterface } from 'src/app/Interfaces/ProductoInterface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productos:Promise<ProductoInterface[]>
  loading = true

  constructor(private productosService: ProductosService) {
    this.productos = this.productosService.getAll()
    //console.log(this.productos)
    this.loading = false
  }
  
  handleReload(){
    console.log("handleReload")
    this.productos = this.productosService.getAll()

  }
}
