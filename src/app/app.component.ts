import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './entities/user.entity';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent {
    title = 'bank-twitter';
    user: User;

    constructor(private userService: UserService) {
        this.userService.getCurrentUser().then((user: User) => {
            this.user = user;
        });
    }
}
