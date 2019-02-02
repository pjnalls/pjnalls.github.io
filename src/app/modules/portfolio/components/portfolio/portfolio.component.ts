import { Component, ViewChild, Renderer2, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'portfolio-page',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit{
    anchorDate: Date = new Date('December 25, 2018');
    today: Date = new Date();
    diff: number = Math.abs(this.today.getTime() - this.anchorDate.getTime());
    dayDiff: number = Math.ceil(this.diff/(1000 * 60 * 60 * 24));

    constructor(private _renderer2: Renderer2, @Inject(DOCUMENT) private _document: any) {}
    @ViewChild('calendar') calendar: ElementRef

    public ngOnInit() {
        
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
}