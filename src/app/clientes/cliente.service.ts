import { Injectable } from '@angular/core';
//Importo el objeto del archivo clientes.json.ts
//import { CLIENTES } from './clientes.json';
//Importo la clase cliente sin extensión para el atributo clientes
import { Cliente } from './cliente';
//Importo la clase observable RXJS
import { Observable} from 'rxjs';
//Importo el metodo of del API RXJS para el return CLIENTES
//import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ClienteService {

  private urlEndPoint: string = 'http://localhost:8080/api/clientes';
  private httpHeaders =new HttpHeaders({'Content-Type': 'application/json'});


  constructor(private http: HttpClient) { }
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
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers:this.httpHeaders})
  }


}
