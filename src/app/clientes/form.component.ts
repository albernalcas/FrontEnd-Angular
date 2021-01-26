import { Component, OnInit } from '@angular/core'
//Importo la clase cliente
import { Cliente } from './cliente'
import { ClienteService } from './cliente.service'
import { Router, ActivatedRoute } from '@angular/router'
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public cliente:  Cliente = new Cliente()
  public titulo:string = "Crear Cliente"

  constructor(private clienteService: ClienteService, private router: Router,
   private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCliente()
  }

  public cargarCliente():void{
    this.activateRoute.params.subscribe(params =>{
      let id = params['id']
      if(id){
        this.clienteService.getCliente(id).subscribe( (cliente) => this.cliente = cliente)
      }
    })
  }

  public create(): void {
    this.clienteService.create(this.cliente)
      .subscribe(cliente => {
        this.router.navigate(['/clientes'])
        swal.fire('Se Creó el Cliente', `Cliente ${cliente.nombre} ${cliente.apellido} creado con éxito`, 'success' )
      }
      );
  }

  public updateCliente():void{
    this.clienteService.updateCliente(this.cliente)
    .subscribe(json=> {
      this.router.navigate(['/clientes'])
      swal.fire('Se Actualizó el Cliente', `${json.mensaje}: ${json.cliente.nombre }`, 'success')
      }
    )
  }

}
