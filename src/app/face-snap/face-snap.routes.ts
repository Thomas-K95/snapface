import { Routes } from "@angular/router";
import { FaceSnapList } from "./face-snap-list/face-snap-list";
import { SingleFaceSnap } from "./single-face-snap/single-face-snap";
import { NewFaceSnap } from "./new-face-snap/new-face-snap";

export const routes: Routes = [
    { path: '', component: FaceSnapList},
    { path: 'create', component: NewFaceSnap },
    { path: ':id', component: SingleFaceSnap }
]