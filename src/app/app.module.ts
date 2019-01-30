import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { BioComponent } from './modules/bio/components/bio/bio.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BioComponent
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