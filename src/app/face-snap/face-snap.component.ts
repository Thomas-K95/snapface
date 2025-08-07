import {Component, input, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap";
import {DatePipe, NgClass, NgStyle, UpperCasePipe} from "@angular/common";
import {FaceSnapService} from "../services/face-snaps.service";

@Component({
    selector: 'app-face-snap',
    imports: [NgStyle, NgClass, UpperCasePipe, DatePipe],
    templateUrl: './face-snap.component.html',
    styleUrl: './face-snap.component.scss'
})

export class FaceSnapComponent implements OnInit {
    @Input() faceSnap!: FaceSnap;
    // faceSnap = input.required<FaceSnap>();

    snapButtonText!: string;
    userHasSnapped!: boolean;

    constructor(private faceSnapsService: FaceSnapService) {
    }
    ngOnInit(): void {
        this.snapButtonText = 'Oh Snap!';
        this.userHasSnapped = false;
    }

    onSnap(): void {
        if (this.userHasSnapped) {
            this.unSnap();
        }
        else {
            this.snap();
        }
    }

    snap() {
        this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
        this.snapButtonText = 'Oops, unSnap!';
        this.userHasSnapped = true;
    }

    unSnap(){
        this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
        this.snapButtonText = 'Oh Snap!';
        this.userHasSnapped = false;
    }

}
