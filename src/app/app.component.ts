import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Crud clientes APP';
  curso: string = 'Angular con Spring';
  docente: string = 'Alejandro Bernal Castiblanco';
}
