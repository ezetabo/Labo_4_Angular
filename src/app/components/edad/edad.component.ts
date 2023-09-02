import { Component } from '@angular/core';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.component.html',
  styleUrls: ['./edad.component.css']
})
export class EdadComponent {
  edadUno: string = '0';
  edadDos: string = '0';
  suma: number = 0;
  promedio: number = 0;

  calcular() {
    if (isNaN(parseInt(this.edadUno)) || isNaN(parseInt(this.edadDos))) {
      alert('Por favor, ingrese edades válidas (números).');
      return;
    }
    this.suma = parseInt(this.edadUno) + parseInt(this.edadDos);
    this.promedio = (parseInt(this.edadUno )+ parseInt(this.edadDos)) / 2;
  }

  limpiarCuadros() {
    this.edadUno = '0';
    this.edadDos = '0';
    this.suma = 0;
    this.promedio = 0;
  }
}
