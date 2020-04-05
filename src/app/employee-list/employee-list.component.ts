import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template : `
              <h2>Employee list</h2>
              <h2>{{errormsg}}</h2>
              <ul *ngFor="let employee of employees">
                  <li>{{employee.name}}</li>
              </ul>
  `,
  //templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  public errormsg;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => this.employees = data,
                                                  error => this.errormsg = error)
  }

}
