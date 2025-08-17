import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FaceSnap } from "../../core/models/face-snap";
import { FaceSnapSimpleCard } from "../face-snap-simple-card/face-snap-simple-card";
import { FaceSnapApi } from "../../core/services/face-snap-api";
import { interval, Observable, Subject, takeUntil, tap } from "rxjs";
import { AsyncPipe } from "@angular/common";

@Component({
    selector: 'app-face-snap-simple-card-list',
    imports: [
        FaceSnapSimpleCard,
        AsyncPipe
    ],
    templateUrl: './face-snap-list.html',
    styleUrl: './face-snap-list.scss'
})

export class FaceSnapList implements OnInit/*, OnDestroy*/ {

    private faceSnapService = inject(FaceSnapApi);

    faceSnaps$!: Observable<FaceSnap[]>;
    // private destroy$!: Subject<boolean>;

    ngOnInit(): void {
        this.faceSnaps$ = this.faceSnapService.getFaceSnaps();

        /*this.destroy$ = new Subject<boolean>();

        interval(1000).pipe(
            takeUntil(this.destroy$),
            tap(console.log),
        ).subscribe();*/
    }

    /*ngOnDestroy(): void {
        this.destroy$.next(true);
    }*/
}
