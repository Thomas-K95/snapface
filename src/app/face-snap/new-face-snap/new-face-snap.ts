import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { FaceSnap } from "../../core/models/face-snap";
import { map, Observable, tap } from "rxjs";
import { AsyncPipe, DatePipe, UpperCasePipe } from "@angular/common";
import { FaceSnapApi } from "../../core/services/face-snap-api";
import { Router } from "@angular/router";

@Component({
    selector: 'app-new-face-snap-simple-card',
    imports: [
        ReactiveFormsModule,
        AsyncPipe,
        DatePipe,
        UpperCasePipe
    ],
    templateUrl: './new-face-snap.html',
    styleUrl: './new-face-snap.scss'
})
export class NewFaceSnap implements OnInit {

    private formBuilder = inject(FormBuilder);
    private faceSnapService = inject(FaceSnapApi);
    private router = inject(Router);


    snapForm!: FormGroup;
    faceSnapPreview$!: Observable<FaceSnap>;
    urlRegex!: RegExp;

    ngOnInit(): void {
        this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

        this.snapForm = this.formBuilder.group({
            title: [null, Validators.required],
            description: [null, Validators.required],
            imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
            location: [null],
        }, {
            updateOn: 'blur',
        });

        this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
            map(formValue => ({
                ...formValue,
                createdDate: new Date(),
                id: 0,
                snaps: 0
            }))
        );
    }

    submitForm(): void {
        this.faceSnapService.addFaceSnap(this.snapForm.value).pipe(
            tap(() => {
                this.router.navigateByUrl('/facesnaps')
            })
        ).subscribe();
    }

}
