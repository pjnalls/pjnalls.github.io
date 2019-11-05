import { Component, OnDestroy, OnChanges } from '@angular/core';
import { LanguageService } from '../../../language.service'
import { Subscription } from 'rxjs';

@Component({
    selector: 'home-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnChanges, OnDestroy {
    language: string;
    subscription: Subscription;

    constructor(private languageService: LanguageService) { 
        this.subscription = this.languageService.languageSetting$
            .subscribe(
                language => {
                    this.language = language;
                }
            );
    }

    ngOnChanges() {
        this.subscription;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}