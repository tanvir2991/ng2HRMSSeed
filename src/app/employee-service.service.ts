import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeServiceService {
  public baseUrl;


  constructor(private http: Http) {

    this.baseUrl = 'https://jsonblob.com/api/jsonBlob/1c3ba670-4111-11e7-ae4c-cbc1833faf10';
  }
  getEmployees() {

    return this.http.get(this.baseUrl)
      .toPromise()
      .then((response => response.json()));

  }

 addEmployee(employees) {

    return this.http.put(this.baseUrl, employees)
      .toPromise()
      .then((response => console.log(response)));
 }


}
