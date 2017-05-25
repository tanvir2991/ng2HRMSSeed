import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../employee-service.service';
import {variable} from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  selectedEntities: any[]; employeerecord;
  public ndx;

  employees ; emp_name; emp_title; emp_gender; emp_country; emp_contact; emp_id;
  constructor(private employeeServiceService: EmployeeServiceService) {

    this.employees = [];


    this.employeerecord = {
      'TITLE' : '',
      'PRIMARY_CONTACT' : '',
      'GENDER': '',
      'COUNTRY': '',
      'EMPLOYEE_NAME': '',
      'EMPLOYEE_ID' : ''
    }



  }



  genrateID() {
    let lastID = this.employees[this.employees.length - 1].EMPLOYEE_ID;
    return lastID = lastID + 1;
  }

  public setSelectedEntities($event: any) {
    this.selectedEntities = $event;
  }

  newEmployee (employeerecord){

     employeerecord['EMPLOYEE_ID'] = this.genrateID();
    this.employees.push(employeerecord);
    this.employeeServiceService.addEmployee(this.employees);

  }// newEmployee function closed

  detailview (data, index) {

   this.employeerecord = data;
    this.ndx = index;

  }

  updateemployee(updateddata) {

   console.log(this.ndx);

   console.log(updateddata);

   this.employees[this.ndx] = updateddata;

    this.employeeServiceService.addEmployee(this.employees);


  }

  deleteemployee(indexfordelete) {

    this.employees.splice(indexfordelete, indexfordelete);
    console.log(this.employees);
    this.employeeServiceService.addEmployee(this.employees);

  }


  ngOnInit() {
    this.employeeServiceService.getEmployees().then(data => this.employees = data);
  }

}
