import { Component, OnInit } from '@angular/core';
import {Imagen} from 'src/app/model/imagen';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  imagenNueva : Imagen;
  imagenes: Imagen[] = [];

  constructor() {
    this.imagenNueva=new Imagen('','');
   }

  ngOnInit() {
  }


  guardar (){
    //this.canciones.push(this.cancionNueva);
    this.imagenNueva = new Imagen(
      '','');
    window.alert('Se agregó exitosamente');
  }

}
