import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ObtenerPeliculasService {

constructor(private http:HttpClient) { }

consulta = '';

  getMovies(name:any){
    this.consulta = 'https://api.themoviedb.org/3/search/movie?api_key=b9c39fa077e24f176926cb53a6eb4da2&query=';
    this.consulta = this.consulta.concat(name.toString());
    return(this.http.get(this.consulta));
  }

}
