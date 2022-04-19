import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //URL encargada de obtemer el listado de todos los empleados desde el backend
  private baseURL = "http://localhost:8090/api/v1/employees";


  constructor(private httpClient : HttpClient) { }

  //Metodo encargado de obtener los empleados
  obtenerListaDeEmpleados():Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  }

}
