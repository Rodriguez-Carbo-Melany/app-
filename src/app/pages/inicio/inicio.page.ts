import { Component } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  //crear nuevo listado
  //componentes: any[] = [];
  componentes: Componente[] = [

    {
      icon: '',
      name: 'Calcular el area del Rectangulo ',
      redirectTo: '/alert'
    },
  ];
  constructor() { }

}

