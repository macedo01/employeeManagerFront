import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faDeleteLeft, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { EmployeeModel } from 'src/app/models/employeeModel';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit{

  public employees: EmployeeModel[] = [];

  constructor(private employeeService: EmployeeService){}

  ngOnInit(): void {
    this.getAllEmployees();
  }

  faDeleteLeft = faDeleteLeft;
  faUserEdit = faUserEdit;

  public getAllEmployees(): void {
    this.employeeService.getAllEmployee().subscribe(
      (response: EmployeeModel[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
