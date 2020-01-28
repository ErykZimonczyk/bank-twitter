import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallComponent } from './wall.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalModule } from 'ngx-bootstrap';
import { Tweet } from '../entities/tweet.entity';
import { User } from '../entities/user.entity';
import { Router } from '@angular/router';

describe('WallComponent', () => {
    let component: WallComponent;
    let router: Router;
    let fixture: ComponentFixture<WallComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WallComponent],
            imports: [
                HttpClientModule,
                ReactiveFormsModule,
                BrowserModule,
                ModalModule.forRoot(),
                RouterTestingModule,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WallComponent);
        component = fixture.componentInstance;
        router = TestBed.get(Router);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should filter visible tweets', () => {
        component.tweets = [
            new Tweet(1, new User('ala'), 'foo bar', 'bar foo'),
            new Tweet(1, new User('ala'), 'foo bar', 'bar foo'),
            new Tweet(1, new User('ala'), 'star wars', 'bar foo'),
            new Tweet(1, new User('ala'), 'foo bar', 'star wars'),
        ];

        component.searchTweets('star');

        expect(component.visibleTweets.length).toEqual(2);
    });

    it('should reset visible tweets when empty query', () => {
        component.visibleTweets = [
            new Tweet(1, new User('ala'), 'foo bar', 'bar foo'),
        ];

        component.tweets = [
            new Tweet(1, new User('ala'), 'foo bar', 'bar foo'),
            new Tweet(1, new User('ala'), 'star wars', 'bar foo'),
            new Tweet(1, new User('ala'), 'foo bar', 'star wars'),
        ];

        component.searchTweets('');

        expect(component.visibleTweets.length).toEqual(3);
    });
});
