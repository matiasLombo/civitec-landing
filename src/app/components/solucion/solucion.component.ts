import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, CheckCircle2 } from 'lucide-angular';

@Component({
  selector: 'app-solucion',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './solucion.component.html',
  styleUrl: './solucion.component.css'
})
export class SolucionComponent {
  CheckCircle2 = CheckCircle2;
}
