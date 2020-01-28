import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetComponent } from './tweet.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalModule } from 'ngx-bootstrap';

describe('TweetComponent', () => {
    let component: TweetComponent;
    let fixture: ComponentFixture<TweetComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TweetComponent],
            imports: [
                HttpClientModule,
                ReactiveFormsModule,
                BrowserModule,
                RouterTestingModule,
                ModalModule.forRoot(),
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TweetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
