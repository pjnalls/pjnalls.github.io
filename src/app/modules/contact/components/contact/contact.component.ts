import { Component, OnChanges, OnDestroy } from '@angular/core';
import { LanguageService } from '../../../../language.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'contact-page',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnChanges, OnDestroy {
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