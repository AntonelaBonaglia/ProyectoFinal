import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductoInterface } from 'src/app/Interfaces/ProductoInterface';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Input()
  data!: ProductoInterface

  @Output()
  reload = new EventEmitter();

  handleEliminar() {
    //hace un request api y elimina el producto
    console.log("handleEliminar")
    this.reload.emit()
  }
}
