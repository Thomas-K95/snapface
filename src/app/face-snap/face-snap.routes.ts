import { Routes } from "@angular/router";
import { FaceSnapList } from "./face-snap-list/face-snap-list";
import { SingleFaceSnap } from "./single-face-snap/single-face-snap";
import { NewFaceSnap } from "./new-face-snap/new-face-snap";
import { authGuard } from "../auth/auth-guard";

export const routes: Routes = [
    { path: '', component: FaceSnapList, canActivate: [authGuard] },
    { path: 'create', component: NewFaceSnap, canActivate: [authGuard] },
    { path: ':id', component: SingleFaceSnap, canActivate: [authGuard] },
]