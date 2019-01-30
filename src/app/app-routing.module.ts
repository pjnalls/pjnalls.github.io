import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { BioComponent } from './modules/bio/components/bio/bio.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, data: { state: 'HomePage'} },
    { path: 'bio', component: BioComponent, data: { state: 'BioPage'} }
];

@NgModule({
    imports: [
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}