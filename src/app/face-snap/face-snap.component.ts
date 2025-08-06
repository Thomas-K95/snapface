import {Component, input, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../model/face-snap";
import {NgClass, NgStyle} from "@angular/common";

@Component({
    selector: 'app-face-snap',
    imports: [NgStyle, NgClass],
    templateUrl: './face-snap.component.html',
    styleUrl: './face-snap.component.scss'
})

export class FaceSnapComponent implements OnInit {
    @Input() faceSnap!: FaceSnap;
    // faceSnap = input.required<FaceSnap>();

    snapButtonText!: string;
    userHasSnapped!: boolean;

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
        this.faceSnap.addSnap();
        this.snapButtonText = 'Oops, unSnap!';
        this.userHasSnapped = true;
    }

    unSnap(){
        this.faceSnap.removeSnap();
        this.snapButtonText = 'Oh Snap!';
        this.userHasSnapped = false;
    }

}
