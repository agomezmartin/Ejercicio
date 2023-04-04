import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  activar = false;
  estadoBtn = "OFF";
  estadoBtnPantalla = "Apagado";


  cambiarEstado(){

    if(this.activar===false){

      this.estadoBtn = "ON";
      this.estadoBtnPantalla = "Encendido"
      this.activar = !this.activar;

    } else {

      this.estadoBtn = "OFF";
      this.estadoBtnPantalla = "Apagado"
      this.activar = !this.activar;
    }





    if(this.estadoBtn==="OFF"){
      this.estadoBtn = "ON";
      this.estadoBtnPantalla = "Encendido"
    } else {
      this.estadoBtn = "OFF";
      this.estadoBtnPantalla = "Apagado"
    }

  }












  constructor() { }

  ngOnInit(): void {
  }

}
