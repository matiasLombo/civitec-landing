import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MessageCircle } from 'lucide-angular';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  MessageCircle = MessageCircle;

  whatsappLink = 'https://wa.me/5493772406593';
}
