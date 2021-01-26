import { Injectable } from '@angular/core';
//Importo el objeto del archivo clientes.json.ts
//import { CLIENTES } from './clientes.json';
//Importo la clase cliente sin extensión para el atributo clientes
import { Cliente } from './cliente';
//Importo la clase observable RXJS
import { Observable, throwError} from 'rxjs';
//Importo el metodo of del API RXJS para el return CLIENTES
//import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable()
export class ClienteService {

  private urlEndPoint: string = 'http://localhost:8080/api/clientes';
  private httpHeaders =new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private router: Router) { }
  //Lo quew retorna el metodo getClientes, tiene que ser un string observable de clientes
  //Observable < Cliente
  getClientes(): Observable<Cliente[]> {
    //el arreglo CLIENTES lo convierto en un metodo observable
    //para ser del mismo tipo que estamos retornando para ello se importa el metodo API RXJS
    //Creo un flujo observable a partir de los objetos CLIENTES
    //return of(CLIENTES);
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Cliente[])
    );
  }

  create(cliente: Cliente):Observable<Cliente>{
    return this.http.post(this.urlEndPoint, cliente, {headers:this.httpHeaders}).pipe(
      map((respuesta:any)=> respuesta.cliente as Cliente),
      catchError(e =>{
        swal.fire(e.error.mensaje , e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  getCliente(id:String):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/clientes']);
        console.log(e.error.mensaje)
        swal.fire('Error al editar el cliente', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  updateCliente(cliente:Cliente):Observable<any>{
    return this.http.put<any>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders}).pipe(
      catchError(e =>{
        swal.fire(e.error.mensaje , e.error.error, 'error');
        return throwError(e);
      })
    );

  }

  deleteCliente(id:number):Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeaders}).pipe(
      catchError(e =>{
        swal.fire(e.error.mensaje , e.error.error, 'error');
        return throwError(e);
      })
    );
  }
}
