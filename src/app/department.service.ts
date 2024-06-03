import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private _http:HttpClient) { }
  
  getAllDepartments():Observable<any[]>{
    return this._http.get<any[]>("https://localhost:7075/api/department");
  }
}


