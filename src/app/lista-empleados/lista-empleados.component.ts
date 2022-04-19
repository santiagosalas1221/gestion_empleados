import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados:Empleado[]

  constructor() { }

  ngOnInit(): void {
    this.empleados = [{
      "id" : 1,
      "name" : "Santiago",
      "lastName" : "Salas",
      "email" : "santiagosalas.6532@gmail.com"
    },
    {
      "id" : 2,
      "name" : "Valentina",
      "lastName" : "Munoz",
      "email" : "valentina.m.6532@gmail.com"
    }];
  }

}
