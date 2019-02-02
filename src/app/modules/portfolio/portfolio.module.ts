import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

@NgModule({
    declarations: [
        PortfolioComponent
    ],
    imports: [
        CommonModule,
        PortfolioRoutingModule
    ],
    providers: []
})

export class PortfolioModule {}