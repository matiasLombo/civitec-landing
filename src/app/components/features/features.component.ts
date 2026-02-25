import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Box, DollarSign, BarChart3, Smartphone, Lock, User } from 'lucide-angular';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  Box = Box;
  DollarSign = DollarSign;
  BarChart3 = BarChart3;
  Smartphone = Smartphone;
  Lock = Lock;
  User = User;

  features = [
    { icon: 'Box', title: 'Módulos Tributarios', desc: 'Inmuebles, automotores, comercios, profesionales y más' },
    { icon: 'DollarSign', title: 'Ver Deudas', desc: 'Consulta el estado de todas tus obligaciones' },
    { icon: 'BarChart3', title: 'Informes', desc: 'Descarga informes de deudas en PDF' },
    { icon: 'Smartphone', title: 'Celular y PC', desc: 'Accede desde cualquier dispositivo' },
    { icon: 'Lock', title: 'Seguro', desc: 'Autenticación y datos protegidos' },
    { icon: 'User', title: 'Perfil', desc: 'Tu información en un solo lugar' }
  ];
}
