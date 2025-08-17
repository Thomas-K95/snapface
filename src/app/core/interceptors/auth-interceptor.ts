import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {

    const authToken = `Bearer ${ inject(AuthService).getToken() }`;
    const modifiedRequest = req.clone({
        setHeaders: { Authorization: authToken }
    });
    return next(modifiedRequest);
}