import { Injectable } from '@angular/core';
import { ServiceBudget } from './service-budget';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceBudgetService {
  private urlEndPoint: string = 'http://localhost:8080/api/areas';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getServiceBudgets(id:any): Observable<ServiceBudget[]> {
    return this.http
      .get(`http://localhost:8080/api/areas/${id}/servicios`)
      .pipe(map((response) => response as ServiceBudget[]));
  }
}