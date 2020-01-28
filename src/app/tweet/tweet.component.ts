import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tweet } from '../entities/tweet.entity';
import { ModalService } from '../services/modal.service';

@Component({
    selector: 'app-tweet',
    templateUrl: './tweet.component.html',
    styleUrls: ['./tweet.component.less'],
})
export class TweetComponent implements OnInit {
    public tweet: Tweet;
    constructor(
        private route: ActivatedRoute,
        private modalService: ModalService
    ) {}

    ngOnInit() {
        this.route.data.subscribe(
            data => {
                this.tweet = data.tweet;
            },
            error => {
                this.modalService.displayNetworkErrorModal();
            }
        );
    }
}
