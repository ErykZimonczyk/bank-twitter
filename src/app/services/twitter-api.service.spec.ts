import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TwitterApiService } from './twitter-api.service';

describe('TwitterApiService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
        })
    );

    it('should be created', () => {
        const service: TwitterApiService = TestBed.get(TwitterApiService);
        expect(service).toBeTruthy();
    });
});
