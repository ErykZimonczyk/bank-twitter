import { Injectable } from '@angular/core';
import { User } from '../entities/user.entity';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private user: User;

    constructor(private authService: AuthService) {
        this.restoreSession();
    }

    /**
     * getCurrentUser
     */
    public getCurrentUser() {
        return Promise.resolve(this.user);
    }

    /**
     * login
     */
    public login(username: string, password: string): Observable<User> {
        return this.authService.login(username, password).pipe(
            map((userData: any) => {
                if (userData) {
                    this.user = new User(userData.name, userData.imgUrl);
                    sessionStorage.setItem('user', this.serialize(this.user));
                }

                return this.user;
            })
        );
    }

    /**
     * logout
     */
    public logout(): Observable<any> {
        return this.authService.logout().pipe(
            map((res: any) => {
                sessionStorage.removeItem('user');
                this.user = null;
                return res;
            })
        );
    }

    /**
     * restoreSession
     */
    private restoreSession() {
        this.user = this.deserialize(sessionStorage.getItem('user'));
    }

    /**
     * serialize
     */
    private serialize(user: User) {
        return JSON.stringify({
            name: user.getName(),
            img: user.getImageUrl(),
        });
    }

    /**
     * deserialize
     */
    private deserialize(rawUser: string): User | null {
        try {
            const parsedUser = JSON.parse(rawUser);

            return new User(parsedUser.name, parsedUser.img);
        } catch (e) {
            return null;
        }
    }
}
