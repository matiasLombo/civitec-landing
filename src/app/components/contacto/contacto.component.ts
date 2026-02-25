import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Mail, MessageCircle } from 'lucide-angular';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  Mail = Mail;
  MessageCircle = MessageCircle;

  emailLink = 'mailto:contacto@civitec.com.ar';
  whatsappLink = 'https://wa.me/5493794000000';
}
