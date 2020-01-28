import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tweet } from '../entities/tweet.entity';
import { debounceTime, delay, concatMap } from 'rxjs/operators';
import { Subscription, from, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ModalService } from '../services/modal.service';

@Component({
    selector: 'app-wall',
    templateUrl: './wall.component.html',
    styleUrls: ['./wall.component.less'],
})
export class WallComponent implements OnInit, OnDestroy {
    public tweets: Tweet[] = [];
    public visibleTweets: Tweet[] = [];
    public search = new FormControl('');
    private searchSub: Subscription;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private modalService: ModalService
    ) {}

    ngOnInit() {
        this.route.data.subscribe(
            data => {
                if (data.tweets) {
                    from(data.tweets)
                        .pipe(concatMap(x => of(x).pipe(delay(1000))))
                        .subscribe(
                            (tweet: Tweet) => {
                                this.tweets.push(tweet);
                                this.searchTweets(this.search.value);
                            },
                            () => {
                                this.modalService.displayNetworkErrorModal();
                            }
                        );
                }
            },
            () => {
                this.modalService.displayNetworkErrorModal();
            }
        );

        this.searchSub = this.search.valueChanges
            .pipe(debounceTime(500))
            .subscribe((newValue: string) => {
                this.searchTweets(newValue);
            });
    }

    ngOnDestroy(): void {
        this.searchSub.unsubscribe();
    }

    public logout() {
        this.userService.logout().subscribe(() => {
            this.router.navigate(['/']);
        });
    }

    public searchTweets(query: string) {
        if (!query || query === '') {
            this.visibleTweets = this.tweets;
        } else {
            this.visibleTweets = this.tweets.filter(t => {
                return (
                    t.getBody().indexOf(query) > -1 ||
                    t.getTitle().indexOf(query) > -1
                );
            });
        }
    }
}
