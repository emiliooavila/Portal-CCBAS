import { Component } from '@angular/core';

@Component({
  selector: 'app-oferta-educativa',
  standalone: true,
  imports: [],
  templateUrl: './oferta-educativa.html',
  styleUrl: './oferta-educativa.scss',
})
export class OfertaEducativaComponent {
  //Las carreas del centro de ciencias basicas
  carreras = [
    { nombre: 'Ing. Bioquímico', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { nombre: 'Ing. en Computación Inteligente', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { nombre: 'Ing. en Electrónica', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { nombre: 'Ing. en Sistemas Computacionales', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { nombre: 'Ing. Industrial Estadístico', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { nombre: 'Lic. en Biología', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { nombre: 'Lic. en Biotecnología', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { nombre: 'Lic. en Desarrollo de Videojuegos y Entornos Virtuales', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { nombre: 'Lic. en Informática y Tecnologías Computacionales', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { nombre: 'Lic. en Matemáticas Aplicadas', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { nombre: 'Químico Farmacéutico Biólogo', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
  ];
}
