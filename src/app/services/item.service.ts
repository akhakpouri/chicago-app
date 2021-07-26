import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Item } from "../models/item.model";
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})

export class ItemService {
  constructor(
    private http: HttpClient
  ) { }

  apiUrl = environment.apiUrl;

  public getById(itemId: number): Observable<Item> {
    return this.http.get<Item>(`${this.apiUrl}/api/items/${itemId}`);
  }

  public getAll(): Observable<Item[]> {
    console.log(`${this.apiUrl}/api/items`);
    return this.http.get<Item[]>(`${this.apiUrl}/api/items`);
  }

  public save(model: Item): Observable<number> {
    return this.http.post<number>(`${this.apiUrl}/api/items`, model).pipe(
      catchError(err => {
        return throwError(err);
      })
    )
  }

  // public delete(itemId: number): Observable<{}> {
  //   return this.http.delete(`${this.apiUrl}/api/items/${itemId}`).pipe(
  //     catchError(err => {
  //       return throwError(err);
  //     }
  //     ));
  // }
}

