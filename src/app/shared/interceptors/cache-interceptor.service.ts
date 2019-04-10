import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

    private cacheMap: Map<string, any> = new Map<string, any>();

    intercept(httpRequest: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
        // Don't cache if
		// 1. It's not a GET request
		// 2. If URI is not supposed to be cached
		if (httpRequest.method !== "GET") {
            return handler.handle(httpRequest);
        }

        // Also leave scope of resetting already cached data for a URI
        if (httpRequest.headers.get("reset-cache")) {
            this.cacheMap = new Map<string, any>();
        }

        // Checked if there is cached data for this URI
        const lastResponse = this.cacheMap.get(httpRequest.urlWithParams);
        if (lastResponse) {
            console.log('Peticion cacheada... ' , lastResponse);
            // In case of parallel requests to same URI,
            // return the request already in progress
            // otherwise return the last cached data
            return (lastResponse instanceof Observable)
                ? lastResponse : Observable.of(lastResponse.clone());
        }

        // If the request of going through for first time
        // then let the request proceed and cache the response
        const requestHandle = handler.handle(httpRequest).do((stateEvent) => {
            if (stateEvent instanceof HttpResponse) {
                this.cacheMap.set(
                    httpRequest.urlWithParams,
                    stateEvent.clone()
                );
            }
        });

        // Meanwhile cache the request Observable to handle parallel request
        this.cacheMap.set(httpRequest.urlWithParams, requestHandle);
        console.log('Peticion sin cachear... ' , requestHandle);
        return requestHandle;
    }
}
