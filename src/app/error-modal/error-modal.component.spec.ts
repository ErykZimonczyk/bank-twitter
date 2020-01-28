import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorModalComponent } from './error-modal.component';
import { ModalModule, BsModalRef } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

describe('ErrorModalComponent', () => {
    let component: ErrorModalComponent;
    let fixture: ComponentFixture<ErrorModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ErrorModalComponent],
            imports: [ModalModule.forRoot(), RouterModule, BrowserModule],
            providers: [
                {
                    provide: BsModalRef,
                    useValue: jasmine.createSpyObj('BsModalRef', ['hide']),
                },
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ErrorModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
