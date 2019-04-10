import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

    private cacheMap: Map<string, HttpRequest<any>> = new Map<string, HttpRequest<any>>();

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('CacheInterceptor - intercept ' , req.headers);
        return next.handle(req);
    }
}
