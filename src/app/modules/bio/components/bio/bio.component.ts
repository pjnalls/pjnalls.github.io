import { Component, OnDestroy, OnChanges } from '@angular/core';
import { LanguageService } from '../../../../language.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'bio-page',
    templateUrl: './bio.component.html',
    styleUrls: ['./bio.component.scss']
})

export class BioComponent implements OnChanges, OnDestroy {
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