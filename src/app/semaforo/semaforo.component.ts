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
  colores = ["verde", "ambar", "rojo"];

  cambiarColor(){

  }

  constructor() { }

  ngOnInit(): void {
  }

}
