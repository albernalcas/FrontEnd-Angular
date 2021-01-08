import { Component, OnInit } from '@angular/core';
//Importo la clase cliente sin extensión para el atributo clientes
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {

  //Creo un atributo de tipo cliente con un array en el archivo clientes.json.ts
  clientes: Cliente[];

  constructor(private clienteService: ClienteService) {

   }

  //Asigno el valor clientes = CLIENTES (Aqui inicia el componente)
  ngOnInit(): void {
    //Notifico los cambios en tiempo real con subscribe
    //para que este comunicado el front con el back
     this.clienteService.getClientes().subscribe(
       clientes => this.clientes = clientes
     );
  }

}
