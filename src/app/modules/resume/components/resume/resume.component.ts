import { Component, OnChanges, OnDestroy } from '@angular/core';
import { LanguageService } from '../../../../language.service';
import { Resume } from './resume';
import { Subscription } from 'rxjs';

@Component({
  selector: 'resume-page',
  styleUrls: ['./resume.component.scss'],
  /* 
   * Template code added in TypeScript 
   * in order to keep TypeScript the main
   * language in '.gitattributes'.
   */
  template: new Resume().resumeTemplate
})

export class ResumeComponent implements OnChanges, OnDestroy {
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