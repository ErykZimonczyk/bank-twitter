import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ErrorModalComponent } from '../error-modal/error-modal.component';
@Injectable({
    providedIn: 'root',
})
export class ModalService {
    bsModalRef: BsModalRef;
    constructor(private modalService: BsModalService) {}

    public displayNetworkErrorModal() {
        this.bsModalRef = this.modalService.show(ErrorModalComponent);
    }
}
