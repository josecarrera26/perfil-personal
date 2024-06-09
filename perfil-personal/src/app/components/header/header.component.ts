import {Component, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  constructor(private router: Router) {
  }
  ngOnInit() {
    initFlowbite();
  }

  perfil(){
    this.router.navigate(['perfil']);
  }

  hojaDeVida() {
    this.router.navigate(['HojaDeVida']);
  }
}
