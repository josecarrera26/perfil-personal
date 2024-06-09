import {Component, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";

@Component({
  selector: 'app-hoja-de-vida',
  standalone: true,
  imports: [],
  templateUrl: './hoja-de-vida.component.html',
  styleUrl: './hoja-de-vida.component.scss'
})
export class HojaDeVidaComponent implements OnInit{

  ngOnInit() {
    initFlowbite();
  }

  descargarPDFEspanish(){
    const link = document.createElement('a');
    link.href = "assets/Jose-Luis-Carrera-Moreno-CV-Español-2.pdf";
    link.download = 'JoseLuisCarreraCV.pdf';
    link.click();
  }

  descargarPDFEnglish(){
    const link = document.createElement('a');
    link.href = "assets/Jose-Luis-Carrera-Moreno-CV-Español-2.pdf";
    link.download = 'JoseLuisCarreraResume.pdf';
    link.click();
  }
}
