import { Component, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { OnChanges, OnDestroy } from '@angular/core';
import { LanguageService } from '../../../../language.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'projects-page',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnChanges, OnDestroy{
    language: string;
    subscription: Subscription;

    constructor(private _renderer2: Renderer2, private languageService: LanguageService) {
        this.subscription = this.languageService.languageSetting$
            .subscribe(
                language => {
                    this.language = language;
                }
            );
    }

    //@ViewChild('calendar') calendar: ElementRef

    /*public ngOnInit() {
         try {
            let s = this._renderer2.createElement('script');

            s.type = 'text/javascript';
            s.src = 'src/vendor/IonicaBizau/github-calendar/dist/github-calendar.min.js';
            this._renderer2.appendChild(this.calendar.nativeElement, s);

            s = this._renderer2.createElement('link');

            s.rel = 'stylesheet';
            s.href='src/vendor/IonicaBizau/github-calendar/dist/github-calendar.css';
            this._renderer2.appendChild(this.calendar.nativeElement, s);
            
            s = this._renderer2.createElement('link');

            s.rel = 'stylesheet';
            s.href='src/vendor/IonicaBizau/github-calendar/dist/github-calendar-responsive.css';
            this._renderer2.appendChild(this.calendar.nativeElement, s);           
        } 
        catch(error) 
        {
            let githubCalendar: HTMLDivElement = <HTMLDivElement>document.getElementById('calendar');
            let calendarError: HTMLElement = document.getElementById('calendar-error');

            githubCalendar.style.display = 'none';
            calendarError.style.display = 'block';
        }
    
    }*/

    ngOnChanges() {
        this.subscription;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}