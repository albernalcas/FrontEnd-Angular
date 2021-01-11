import { Component, OnInit } from '@angular/core';
//Importo la clase cliente
import { Cliente } from './cliente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public cliente:  Cliente = new Cliente();
  public titulo:string = "Crear Cliente";

  constructor() { }

  ngOnInit(): void {
  }

  public create(): void {
    console.log("Clicked!")
    console.log(this.cliente)
  }

}
