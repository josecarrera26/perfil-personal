import { Routes } from '@angular/router';
import {HojaDeVidaComponent} from "./components/hoja-de-vida/hoja-de-vida.component";

export const routes: Routes = [
  {
    path: 'index',
    loadComponent: () => import('./components/perfil/perfil.component').then(m => m.PerfilComponent)
  },
  {path: '', redirectTo: 'index', pathMatch: "full"},
  {path: 'perfil', redirectTo:'index', pathMatch: "full"},
  {path:'HojaDeVida', redirectTo:'hojadevida', pathMatch:"full"},
  {path: 'HojaDeVida', component: HojaDeVidaComponent},
];
