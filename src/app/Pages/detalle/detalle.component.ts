import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoInterface } from 'src/app/Interfaces/ProductoInterface';
import { ProductosService } from 'src/app/Service/productos/productos.service';



@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  producto!: ProductoInterface
  loading = true

  constructor(
    private activateRoute: ActivatedRoute,
    private productosService: ProductosService
  ) {
    const id = this.activateRoute.snapshot.paramMap.get("id")
    console.log(id)
    if(id)this.init(id)
  }

  async init(id: string) {
    try {
      const producto:ProductoInterface = await this.productosService.getById(id)
      const description = await this.productosService.getDescription(id)
      this.producto={...producto, ...description}
      this.loading = false
    } catch (e) {
      console.log(e)
    }
  }
}
