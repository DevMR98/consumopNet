import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private _http:HttpClient) { }

  getAllItems():Observable<any>{
    return this._http.get('https://localhost:7075/api/item');
  }
  
  getItemById(id:number):Observable<any>{
    return this._http.get(`https://localhost:7075/api/item/${id}`)
  }

  updateItem(id:number,item:any):Observable<any>{
    return this._http.put(`https://localhost:7075/api/item/${id}`,item);
  }
}
