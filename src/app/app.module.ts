import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
//Importo la clase servicios y deber ir en el providers
import { ClienteService } from './clientes/cliente.service';
//Realizo la renderización de las páginas SPA single page aplication, mapeo el componente a una URL
import { RouterModule, Routes } from '@angular/router';
//importo la clase para conectarnos con el servidor
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './clientes/form.component';

import { FormsModule } from '@angular/forms';

//Creo array con las rutas
const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent },
  {path: 'clientes', component: ClientesComponent},
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    //importo la clase para conectarme al servidor
    HttpClientModule,
    //Registro las rutas URL del Array routes
    RouterModule.forRoot(routes),
    FormsModule
  ],
  //Aqui llamo el servicio ClienteService
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
