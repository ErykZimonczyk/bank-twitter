import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Tweet } from '../entities/tweet.entity';
import { User } from '../entities/user.entity';
import { nameByRace } from 'fantasy-name-generator';
@Injectable({
    providedIn: 'root',
})
export class TwitterApiService {
    constructor(private http: HttpClient) {}

    public getTweets() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
            map((rawPosts: any) => {
                return this.mapTweets(rawPosts);
            })
        );
    }

    public getTweet(id: string) {
        return this.http
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .pipe(
                map((rawPost: any) => {
                    return new Tweet(
                        rawPost.id,
                        new User(nameByRace('human'), null, rawPost.userId),
                        rawPost.title,
                        rawPost.body
                    );
                })
            );
    }

    private mapTweets(rawPosts: any[]) {
        return rawPosts.map(rawPost => {
            return new Tweet(
                rawPost.id,
                new User(nameByRace('human'), null, rawPost.userId),
                rawPost.title,
                rawPost.body
            );
        });
    }
}
