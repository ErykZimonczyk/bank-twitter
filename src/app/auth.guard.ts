import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';
import { User } from './entities/user.entity';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private userService: UserService, private router: Router) {
        // empty
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        return this.userService.getCurrentUser().then((user: User) => {
            if (user) {
                return true;
            } else {
                this.router.navigate(['/login'], {
                    queryParams: {
                        return: state.url,
                    },
                });
                return false;
            }
        });
    }
}
