import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../Class/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  api:string = "http://localhost:1000/item";

  constructor(private http: HttpClient) { }

  // get item
  viewData():Observable<Item[]> {
    return this.http.get<Item[]>(this.api);
  }

  //add item
  add_item(data:any):Observable<Item[]> {
    return this.http.post<Item[]>(this.api, data);
  }

  // Single item details
  view_single(id:any):Observable<Item[]> {
    return this.http.get<Item[]>(`${this.api}/${id}`);
  }

  //delete item
  delete_item(id:any) {
    return this.http.delete(`${this.api}/${id}`);
  }

  //edit Item
  edit_item(id:any, item:any) {
    return this.http.put<Item[]>(`${this.api}/${id}`, item)
  }
}
