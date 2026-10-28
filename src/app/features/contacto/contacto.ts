import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss'
})
export class ContactoComponent {
  decanatoInfo = {
    decano: 'Guillermo Dominguez',
    cargo: 'Decano del Centro de Ciencias Básicas',
    ubicacion: 'Edificio 3, Planta Alta, Ciudad Universitaria',
    direccion: 'Av. Universidad #940, C.P. 20137, Aguascalientes, Ags.',
    telefono: '+52 (449) 910 8400 Ext. 8401',
    correo: 'ccbas@correo.uaa.mx',
    horario: 'Lunes a Viernes de 08:00 a 15:30 hrs.'
  };
}