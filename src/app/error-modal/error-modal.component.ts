import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
    selector: 'app-modal-content',
    template: `
        <div class="modal-header">
            <h4 class="modal-title pull-left">Network error</h4>
            <button
                type="button"
                class="close pull-right"
                aria-label="Close"
                (click)="bsModalRef.hide()"
            >
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            There was a problem with internet connection - please try again
            later.
        </div>
        <div class="modal-footer">
            <button
                type="button"
                class="btn btn-default"
                (click)="bsModalRef.hide()"
            >
                Close
            </button>
        </div>
    `,
})
export class ErrorModalComponent implements OnInit {
    title: string;
    closeBtnName: string;
    list: any[] = [];

    constructor(public bsModalRef: BsModalRef) {}

    ngOnInit() {}
}
