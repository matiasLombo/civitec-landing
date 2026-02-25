import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SolucionComponent } from './components/solucion/solucion.component';
import { FeaturesComponent } from './components/features/features.component';
import { ComoFuncionaComponent } from './components/como-funciona/como-funciona.component';
import { ScreenshotsComponent } from './components/screenshots/screenshots.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
// @ts-ignore
import createScrollSnap from 'scroll-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    SolucionComponent,
    FeaturesComponent,
    ComoFuncionaComponent,
    ScreenshotsComponent,
    BeneficiosComponent,
    ContactoComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'civitec-landing';

  ngAfterViewInit() {
    const container = document.querySelector('.scroll-container') as HTMLElement;
    if (container) {
      const { bind } = createScrollSnap(container, {
        snapDestinationY: '100vh',
        duration: 300,
        timeout: 200,
        threshold: 0.1,
      });
      bind();
    }
  }
}
