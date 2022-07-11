import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgradecimientosComponent } from './components/agradecimientos/agradecimientos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaComponent } from './components/lista/lista.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'lista', component: ListaComponent},
  { path: 'agradecimientos', component: AgradecimientosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
