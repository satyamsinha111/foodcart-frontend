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

  addCategory(payload: any) {
    return this.httpClient.post(`${environment.apiUrl}/category`, payload);
  }

  getAllCategories() {
    return this.httpClient.get(`${environment.apiUrl}/categories`);
  }

  deleteCategory(catid: string) {
    return this.httpClient.delete(`${environment.apiUrl}/category/${catid}`);
  }

  updateCategory(data: any, id: any) {
    return this.httpClient.put(`${environment.apiUrl}/category/${id}`, data);
  }

  getItemsByCategory(catId: string) {
    return this.httpClient.get(`${environment.apiUrl}/item/category/${catId}`);
  }

  addNewItem(payload: any) {
    return this.httpClient.post(`${environment.apiUrl}/item`, payload);
  }

  updateItem(payload: any, itemid: any) {
    return this.httpClient.put(`${environment.apiUrl}/item/${itemid}`, payload);
  }
  deleteItem(itemid: any) {
    return this.httpClient.delete(`${environment.apiUrl}/item/${itemid}`);
  }
}
