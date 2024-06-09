import {Component, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent implements OnInit{
  ngOnInit() {
    initFlowbite()
  }

}
