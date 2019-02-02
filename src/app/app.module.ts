import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { BioComponent } from './modules/bio/components/bio/bio.component';
import { ResumeComponent } from './modules/resume/components/resume/resume.component';
import { PortfolioComponent } from './modules/portfolio/components/portfolio/portfolio.component';
import { ContactComponent } from './modules/contact/components/contact/contact.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BioComponent,
        ResumeComponent,
        PortfolioComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}