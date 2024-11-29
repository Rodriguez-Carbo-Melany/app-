import { Component } from '@angular/core';
import { AlertPageModule } from './alert.module';

@Component({
  selector: 'app-alert',
  templateUrl: 'alert.page.html',
  styleUrls: ['alert.page.scss'],
})
export class AlertPage {
  base: number | null = null;
  altura: number | null = null;
  resultado: number | null = null;

  constructor() { }

  calcularArea() {
    if (this.base && this.altura && this.base > 0 && this.altura > 0) {
      this.resultado = this.base * this.altura;
    } else {
      alert('Por favor, ingresa valores válidos para la base y la altura.');
    }
  }
}

