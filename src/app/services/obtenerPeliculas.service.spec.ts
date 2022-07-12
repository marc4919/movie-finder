/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ObtenerPeliculasService } from './obtenerPeliculas.service';

describe('Service: ObtenerPeliculas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObtenerPeliculasService]
    });
  });

  it('should ...', inject([ObtenerPeliculasService], (service: ObtenerPeliculasService) => {
    expect(service).toBeTruthy();
  }));
});
