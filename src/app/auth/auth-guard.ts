import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { AuthStore } from "./auth-store";

export const authGuard: CanActivateFn = (route, state) => {
    const auth = inject(AuthStore);
    const router = inject(Router);

    if (auth.getToken()) {
        return true;
    } else {
        router.navigateByUrl('/auth/login');
        return false;
    }
};
