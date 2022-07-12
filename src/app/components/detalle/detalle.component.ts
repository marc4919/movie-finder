import { Component, OnInit,  Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';

@Component({
  standalone: true,
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
  imports: [CommonModule, DialogModule, ButtonModule]
})

export class DetalleComponent implements OnInit {

  constructor() { }

  @Input() pelicula:any =  [];
  @Input() display: boolean;
  @Input() poster:string;

  @Output()
propagar = new EventEmitter<string>();

  ngOnInit() {
  }

  showDialog() {
      this.display = true;
  }

  cancel(){
    console.log("HI");
    this.propagar.emit('false');
  }


}
