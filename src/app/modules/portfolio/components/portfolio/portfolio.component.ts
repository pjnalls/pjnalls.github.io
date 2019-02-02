import { Component, Renderer2, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'portfolio-page',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./vendor/IonicaBizau/github-calendar/dist/github-calendar.scss', './portfolio.component.scss']
})

export class PortfolioComponent implements OnInit{
    anchorDate: Date = new Date('December 25, 2018');
    today: Date = new Date();
    diff: number = Math.abs(this.today.getTime() - this.anchorDate.getTime());
    dayDiff: number = Math.ceil(this.diff/(1000 * 60 * 60 * 24));

    constructor(private _renderer2: Renderer2, @Inject(DOCUMENT) private _document: any) {}

    public ngOnInit() {

        let s1 = this._renderer2.createElement('script');
        let s2 = this._renderer2.createElement('script');

        s1.type = 'text/javascript';
        s1.src = 'src/vendor/IonicaBizau/github-calendar/dist/github-calendar.min.js'
        this._renderer2.appendChild(this._document.body, s1);
    }
}