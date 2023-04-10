import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

  btn = "Siguiente";
  circulo = "circulo";
  negro = "negro";
/*  colores = ["verde", "ambar", "rojo"];
*/
  color1 = "negro";
  color2 = "negro";
  color3 = "negro";

  control: number = 0;

  cambiarColor(){

    if(this.control===0){
      this.color1 = "verde";
      this.color2 = "negro";
      this.color3 = "negro";
      this.control++;
      
    } else if (this.control === 1){
      this.color1 = "negro";
      this.color2 = "ambar";
      this.color3 = "negro";
      this.control++;

    } else if (this.control === 2){
      this.color1 = "negro";
      this.color2 = "negro";
      this.color3 = "rojo";
      this.control++;
    } else {
      this.control = 0;
      this.color1 = "negro";
      this.color2 = "negro";
      this.color3 = "negro";      
    }




  }

  constructor() { }

  ngOnInit(): void { // Los métodos que se desarrollen aquí se ejecutarán
  //después de cargar todos los estilos y ejecutar cualquier directiva
  }

}
