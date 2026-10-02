import { Component } from '@angular/core';

@Component({
  selector: 'app-oferta-educativa',
  standalone: true,
  imports: [],
  templateUrl: './oferta-educativa.html',
  styleUrl: './oferta-educativa.scss',
})
export class OfertaEducativaComponent {
  //Las carreras del centro de ciencias basicas
  carreras = [
    { nombre: 'Ing. Bioquímico', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', archivo: 'plan_Ing_Bioquimico.pdf' },
    { nombre: 'Ing. en Computación Inteligente', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', archivo: 'plan_Ing_Computacion_Inteligente.pdf' },
    { nombre: 'Ing. en Electrónica', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', archivo: 'plan_Ing_Electronica.pdf' },
    { nombre: 'Ing. en Sistemas Computacionales', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', archivo: 'plan_Ing_Sistemas_Computacionales.pdf' },
    { nombre: 'Ing. Industrial Estadístico', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', archivo: 'plan_Ing_Industrial_Estadistico.pdf' },
    { nombre: 'Lic. en Biología', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', archivo: 'plan_Lic_Biologia.pdf' },
    { nombre: 'Lic. en Biotecnología', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', archivo: 'plan_Lic_Biotecnologia.pdf' },
    { nombre: 'Lic. en Desarrollo de Videojuegos y Entornos Virtuales', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', archivo: 'plan_Lic_Desarrollo_Videojuegos.pdf' },
    { nombre: 'Lic. en Informática y Tecnologías Computacionales', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', archivo: 'plan_Lic_Informatica.pdf' },
    { nombre: 'Lic. en Matemáticas Aplicadas', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', archivo: 'plan_Lic_Matematicas_Aplicadas.pdf' },
    { nombre: 'Químico Farmacéutico Biólogo', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', archivo: 'plan_Quimico_Farmaceutico.pdf' }
  ];

  verDetalles(carrera: any) {
    const rutaArchivo = `/assets/${carrera.archivo}`;
    // 2. Crea un elemento <a> en memoria
    const enlace = document.createElement('a');
    enlace.href = rutaArchivo;
    
    // 3. Establece el atributo 'download' para forzar la descarga en lugar de abrirlo
    // El valor que le pases será el nombre con el que se guardará en la PC del usuario
    enlace.download = `Plan_de_Estudios_${carrera.nombre}.pdf`;
    
    // 4. Agrega el enlace al DOM de forma invisible, haz clic y elimínalo
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
    
  }
}
