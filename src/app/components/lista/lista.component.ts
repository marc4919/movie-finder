import { Component, OnInit } from '@angular/core';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { FormsModule }   from '@angular/forms';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ObtenerPeliculasService } from 'src/app/services/obtenerPeliculas.service';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  standalone: true,
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
  imports: [AutoCompleteModule, FormsModule,HttpClientModule, CommonModule, TableModule, DetalleComponent]
})
export class ListaComponent implements OnInit {
  constructor(private movieService: ObtenerPeliculasService) {}


  ngOnInit() {
  }
  texts: string[] = [];
  popUp : boolean = false;
  poster : string;
  pelicula:any;

    results: any = [];

    search(event:any) {
        this.movieService.getMovies(event.query).subscribe(data => {
            this.results = data;
        });
    }

    mostrarTabla(){

      if((this.results.length === 0)){
        console.log('A');
        return 'hidden';
      }else{
        console.log('B');
        return 'visible'
      }
    }

    mostrarDetalle(resultado:any){
      this.pelicula = resultado;
      this.poster = 'https://image.tmdb.org/t/p/original/' + this.pelicula.poster_path;
      this.popUp = true;
    }

    actualizarPopUp(){
      this.popUp = false;
    }
}
