import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  login(payload: any) {
    return this.httpClient.post(`${environment.apiUrl}/login`, payload, {
      observe: 'response',
    });
  }
}
