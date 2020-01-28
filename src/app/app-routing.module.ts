import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WallComponent } from './wall/wall.component';
import { AuthGuard } from './auth.guard';
import { TweetsResolver } from './resolvers/tweets.resolver';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TweetComponent } from './tweet/tweet.component';
import { TweetResolver } from './resolvers/tweet.resolver';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'posts/:id',
        component: TweetComponent,
        canActivate: [AuthGuard],
        resolve: {
            tweet: TweetResolver,
        },
    },
    {
        path: 'posts',
        component: WallComponent,
        canActivate: [AuthGuard],
        resolve: {
            tweets: TweetsResolver,
        },
    },

    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
