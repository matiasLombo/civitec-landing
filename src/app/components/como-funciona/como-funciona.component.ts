import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-como-funciona',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './como-funciona.component.html',
  styleUrl: './como-funciona.component.css'
})
export class ComoFuncionaComponent {
  steps = [
    { number: '1', title: 'Ingresar', desc: 'Con tu usuario y contraseña' },
    { number: '2', title: 'Elegir módulo', desc: 'Inmuebles, automotores, etc.' },
    { number: '3', title: 'Ver tus deudas', desc: 'Consulta y descarga informes' }
  ];
}
