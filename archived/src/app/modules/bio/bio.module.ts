import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BioRoutingModule } from './bio-routing.module';
import { BioComponent } from './components/bio/bio.component';

@NgModule({
    declarations: [
        BioComponent
    ],
    imports: [
        CommonModule,
        BioRoutingModule
    ],
    providers: []
})

export class BioModule {}