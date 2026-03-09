import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LucideAngularModule, Building2, FileText, Car, Store, Skull, Wallet, CalculatorIcon, ShoppingCart, HardHat, Server, Scale, Droplets, Lightbulb, IdCard, Gavel, FileSignature, Folder, Zap } from 'lucide-angular';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  mobileMenuOpen = false;

  constructor(private router: Router) {}

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  // Icons
  Building2 = Building2;
  FileText = FileText;
  Car = Car;
  Store = Store;
  Skull = Skull;
  Wallet = Wallet;
  CalculatorIcon = CalculatorIcon;
  ShoppingCart = ShoppingCart;
  HardHat = HardHat;
  Server = Server;
  Scale = Scale;
  Droplets = Droplets;
  Lightbulb = Lightbulb;
  IdCard = IdCard;
  Gavel = Gavel;
  FileSignature = FileSignature;
  Folder = Folder;
  Zap = Zap;

  modulos = [
    { icon: 'Building2', nombre: 'Catastro', slug: 'catastro', descripcion: 'Gestión de inmuebles y propiedades' },
    { icon: 'FileText', nombre: 'Inmobiliario', slug: 'inmobiliario', descripcion: 'Tasa inmobiliaria' },
    { icon: 'Car', nombre: 'Automotores', slug: 'automotores', descripcion: 'Registro y tasa automotor' },
    { icon: 'Store', nombre: 'Comercio', slug: 'comercio', descripcion: 'Habilitación comercial' },
    { icon: 'Droplets', nombre: 'Tasa higiene profilaxis y seguridad', slug: 'thps', descripcion: 'Higiene y Seguridad' },
    { icon: 'Server', nombre: 'Tasas y Servicios', slug: 'tasas-servicios', descripcion: 'Tasas municipales variadas' },
    { icon: 'Lightbulb', nombre: 'Alumbrado Público', slug: 'alumbrado-publico', descripcion: 'Tasa de alumbrado' },
    { icon: 'IdCard', nombre: 'Transporte y Carnet', slug: 'transporte-carnet', descripcion: 'Carnets de conducir' },
    { icon: 'Gavel', nombre: 'Juzgado de Faltas', slug: 'juzgado-faltas', descripcion: 'Infracciones y multas' },
    { icon: 'FileSignature', nombre: 'Convenios y Juicios', slug: 'convenios-juicios', descripcion: 'Gestión de convenios' },
    { icon: 'Folder', nombre: 'Cuentas Corrientes', slug: 'cuentas-corrientes', descripcion: 'Cuentas especiales' },
    { icon: 'Skull', nombre: 'Cementerio', slug: 'cementerio', descripcion: 'Gestión de cementerio' },
    { icon: 'Wallet', nombre: 'Tesorería', slug: 'tesoreria', descripcion: 'Cobros y pagos' },
    { icon: 'CalculatorIcon', nombre: 'Contabilidad', slug: 'contabilidad', descripcion: 'Sistema contable completo' },
    { icon: 'ShoppingCart', nombre: 'Compras', slug: 'compras', descripcion: 'Adquisiciones municipales' },
    { icon: 'HardHat', nombre: 'Obras Públicas', slug: 'obras-publicas', descripcion: 'Control de obras' },
    { icon: 'Zap', nombre: 'Servicios Varios', slug: 'servicios-varios', descripcion: 'Otros servicios municipales' }
  ];

  caracteristicas = [
    {
      titulo: 'Interfaz Intuitiva',
      descripcion: 'Navegación tipo explorador para acceso rápido a toda la información municipal.'
    },
    {
      titulo: 'Informes Personalizados',
      descripcion: 'Generación de reportes en múltiples formatos: word, pdf, excel, texto e imagen.'
    },
    {
      titulo: 'Seguridad Integral',
      descripcion: 'Autenticación nativa o Active Directory con auditoría completa de todas las operaciones.'
    },
    {
      titulo: 'Copias Automatizadas',
      descripcion: 'Sistema de backup para proteger todos los datos municipales.'
    },
    {
      titulo: 'Archivos Históricos',
      descripcion: 'Depuración y consulta de datos históricos sin perder información.'
    },
    {
      titulo: 'Alta Conectividad',
      descripcion: 'Integración con email, web y API REST para conectar con otros sistemas (según requerimiento, presupuesto y cotización aparte).'
    }
  ];

  beneficios = [
    {
      titulo: 'Gestión Integral',
      descripcion: 'Un solo sistema para administrar todas las áreas del municipio.'
    },
    {
      titulo: 'Aumento de Recaudación',
      descripcion: 'Control preciso de deudas, convenios y juicios para maximizar la recaudación municipal.'
    },
    {
      titulo: 'Transparencia Total',
      descripcion: 'Auditoría completa de todas las operaciones y acceso controlado por permisos de usuario.'
    },
    {
      titulo: 'Escalabilidad',
      descripcion: 'Sistema modular que crece con las necesidades del municipio.'
    }
  ];

  scrollToSection(id: string) {
    this.mobileMenuOpen = false;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
