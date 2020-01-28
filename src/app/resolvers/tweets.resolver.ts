import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { Tweet } from '../entities/tweet.entity';
import { TwitterApiService } from '../services/twitter-api.service';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TweetsResolver implements Resolve<Observable<Tweet[]>> {
    constructor(private twitterApiService: TwitterApiService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.twitterApiService.getTweets().pipe(
            map((tweets: Tweet[]) => {
                return tweets.sort((a, b) => a.getId() - b.getId());
            })
        );
    }
}
