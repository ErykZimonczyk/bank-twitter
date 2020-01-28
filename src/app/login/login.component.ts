import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordValidator } from './password.validator';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    private return: string;

    constructor(
        private userService: UserService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    get username() {
        return this.loginForm.get('username');
    }

    get password() {
        return this.loginForm.get('password');
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            username: new FormControl('', [
                Validators.required,
                Validators.minLength(5),
            ]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(8),
                passwordValidator(),
            ]),
        });

        this.route.queryParams.subscribe(
            params => (this.return = params.return || '/posts')
        );
    }

    public login() {
        this.userService
            .login(
                this.loginForm.get('username').value,
                this.loginForm.get('password').value
            )
            .subscribe(
                () => {
                    this.router.navigateByUrl(this.return);
                },
                () => {
                    this.loginForm.setErrors({ notAuthorized: true });
                }
            );
    }
}
