import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap";
import {DatePipe, NgClass, NgStyle, UpperCasePipe} from "@angular/common";
import {FaceSnapService} from "../services/face-snaps.service";
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
    selector: 'app-single-face-snap',
    imports: [NgStyle, NgClass, UpperCasePipe, DatePipe, RouterLink],
    templateUrl: './single-face-snap.component.html',
    styleUrl: './single-face-snap.component.scss'
})

export class SingleFaceSnapComponent implements OnInit {
    faceSnap!: FaceSnap;
    snapButtonText!: string;
    userHasSnapped!: boolean;

    constructor(private faceSnapsService: FaceSnapService,
                private route: ActivatedRoute) {
    }
    ngOnInit(): void {
        this.prepareInterface();
        this.getFaceSnap();
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

    private prepareInterface() {
        this.snapButtonText = 'Oh Snap!';
        this.userHasSnapped = false;
    }

    private getFaceSnap() {
        const faceSnapId = this.route.snapshot.params['id'];
        this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
    }
}
