import { Routes } from '@angular/router';
import { LandingPage } from "./landing-page/landing-page";

export const routes: Routes = [
    { path: '', component: LandingPage },
    {
        path: 'facesnaps',
        loadChildren: () => import('./face-snap/face-snap.routes').then(r => r.routes)
    }
];
