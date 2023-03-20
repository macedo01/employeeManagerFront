import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { EmployeeModel } from '../models/employeeModel';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl: String = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllEmployee(): Observable<EmployeeModel[]>{
    return this.http.get(`${this.apiServerUrl}/employee/all`) as Observable<EmployeeModel[]>;
  }

  public getEmployeeById(id: number) : Observable<EmployeeModel>{
    return this.http.get(`${this.apiServerUrl}/employee/find/${id}`) as Observable<EmployeeModel>;
  }

  public addEmployee(employee: EmployeeModel) : Observable<EmployeeModel>{
    return this.http.post(`${this.apiServerUrl}/employee/add`, employee) as Observable<EmployeeModel>;
  }

  public updateEmployee(employee: EmployeeModel) : Observable<EmployeeModel>{
    return this.http.put(`${this.apiServerUrl}/employee/add`, employee) as Observable<EmployeeModel>;
  }

  public deleteEmployee(employeeCode: number) : Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeCode}`);
  }
}
