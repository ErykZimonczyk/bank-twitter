import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { nameByRace } from 'fantasy-name-generator';
import * as randomHex from 'random-hex-color';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor() {}

    public login(username: string, password: string) {
        // do a fake API request to login user
        return of({
            name: nameByRace('human'),
            imgUrl: `https://api.adorable.io/avatars/face/eyes${Math.floor(
                Math.random() * 10
            )}/nose${Math.floor(Math.random() * 8) +
                1}/mouth10/${randomHex().replace('#', '')}`,
            username,
        });
    }

    public logout() {
        // fake logout
        return of('success');
    }
}
