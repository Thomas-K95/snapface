import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { AuthApi } from "../services/auth-api";

export const authGuard: CanActivateFn = (route, state) => {
    const auth = inject(AuthApi);
    const router = inject(Router);

    if (auth.getToken()) {
        return true;
    } else {
        router.navigateByUrl('/auth/login');
        return false;
    }
};
