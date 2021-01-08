import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent {
  //Creo objeto para utilizar directiva estructural ngFor
  listaCurso: string[] = ['Typescript', 'JavaScript', 'C#', 'Java SE', 'PHP'];

  //Creo objeto para utilizar directiva estructural ngif
  habilitar: boolean = true;
  constructor() { }

  //Creo método setHabilitar
  setHabilitar(): void {
    this.habilitar =  (this.habilitar == true)? false: true;
  }

}
