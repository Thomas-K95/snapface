import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthStore } from "./auth-store";
import { inject } from "@angular/core";

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {

    const authToken = `Bearer ${ inject(AuthStore).getToken() }`;
    const modifiedRequest = req.clone({
        headers: req.headers.set('Authorization', authToken)
    });
    return next(modifiedRequest);
}