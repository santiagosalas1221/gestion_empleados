import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados:Empleado[]

  constructor(private empleadoServicio : EmpleadoService) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  //Metodo subscrito a todo el listado, y al aarreglo se le inicializaran los datos que se vayan obteniendo
  private obtenerEmpleados() {
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe(dato => {
      this.empleados = dato;
    });
  }

}
