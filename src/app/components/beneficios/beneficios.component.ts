import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Clock, TrendingUp, Users, BarChart2 } from 'lucide-angular';

@Component({
  selector: 'app-beneficios',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './beneficios.component.html',
  styleUrl: './beneficios.component.css'
})
export class BeneficiosComponent {
  Clock = Clock;
  TrendingUp = TrendingUp;
  Users = Users;
  BarChart2 = BarChart2;

  benefits = [
    { icon: 'Clock', title: 'Menos colas', desc: 'Los contribuyentes consultan online, no en la oficina' },
    { icon: 'TrendingUp', title: 'Más recaudación', desc: 'Información clara reduce conflictos y agiliza pagos' },
    { icon: 'Users', title: 'Mejor atención', desc: 'Reducís la carga de tu equipo de ingresos' },
    { icon: 'BarChart2', title: 'Datos reales', desc: 'Reportes actualizados de deudas y recaudación' }
  ];
}
