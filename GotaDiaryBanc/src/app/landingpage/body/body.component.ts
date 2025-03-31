import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  images: string[] = [
    '/assets/cajero.avif',
    '/assets/cajero.jpg',
    '/assets/dinero.jpg'
  ]; // Lista de imágenes
  currentImageIndex: number = 0; // Índice de la imagen actual

  // Cambiar a la imagen anterior
  previousImage(): void {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  // Cambiar a la siguiente imagen
  nextImage(): void {
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.images.length;
  }

}
