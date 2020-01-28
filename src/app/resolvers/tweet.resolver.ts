import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Tweet } from '../entities/tweet.entity';
import { TwitterApiService } from '../services/twitter-api.service';

@Injectable({ providedIn: 'root' })
export class TweetResolver implements Resolve<Observable<Tweet>> {
    constructor(private twitterApiService: TwitterApiService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.twitterApiService.getTweet(route.paramMap.get('id'));
    }
}
