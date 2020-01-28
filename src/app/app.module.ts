import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WallComponent } from './wall/wall.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TweetComponent } from './tweet/tweet.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap';
import { ErrorModalComponent } from './error-modal/error-modal.component';
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        WallComponent,
        TweetComponent,
        PageNotFoundComponent,
        ErrorModalComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ModalModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [ErrorModalComponent],
})
export class AppModule {}
