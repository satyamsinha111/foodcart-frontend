import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  token: any = null;
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.token = localStorage.getItem('token');
    console.log('Intercepted', req, this.token);
    if (this.token) {
      const tokenisedReq = req.clone({
        headers: req.headers.set('token', this.token),
      });
      return next.handle(tokenisedReq);
    }
    return next.handle(req);
  }
}
