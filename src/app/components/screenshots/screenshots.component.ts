import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-screenshots',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './screenshots.component.html',
  styleUrl: './screenshots.component.css'
})
export class ScreenshotsComponent {
  screenshots = [
    { title: 'Dashboard Principal', desc: 'Panel de módulos disponibles' },
    { title: 'Gestión de Deudas', desc: 'Visualización de obligaciones' },
    { title: 'Detalle de Cuota', desc: 'Información detallada de pagos' },
    { title: 'Perfil del Contribuyente', desc: 'Datos personales y balance' }
  ];
}
