import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';
import { ModalModule } from 'ngx-bootstrap';

describe('ModalService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [ModalModule.forRoot()],
        })
    );

    it('should be created', () => {
        const service: ModalService = TestBed.get(ModalService);
        expect(service).toBeTruthy();
    });
});
