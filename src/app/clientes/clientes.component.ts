import { Component, OnInit } from '@angular/core';
//Importo la clase cliente sin extensión para el atributo clientes
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import swal from 'sweetalert2';

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

  deleteCliente(cliente:Cliente):void{

      const swalWithBootstrapButtons = swal.mixin({
        customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })

      swalWithBootstrapButtons.fire({
        title: '¿Está Seguro?',
        text: `¿Seguro desea eliminar el cliente ${cliente.nombre} ${cliente.apellido}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {

          this.clienteService.deleteCliente(cliente.id).subscribe(
            response => {

              this.clientes = this.clientes.filter(cli => cli !== cliente) 
              swalWithBootstrapButtons.fire(
                'Cliente elminado!',
                ` Se elimino el cliente ${cliente.nombre} ${cliente.apellido}`,
                'success'
              )
            }
          )


        }
      })
    }

}
