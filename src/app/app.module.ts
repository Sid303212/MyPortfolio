import { BrowserModule } from "@angular/platform-browser";
import { AboutComponent } from "./about/about.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ExperienceComponent } from "./experience/experience.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [AppComponent, HomeComponent, AboutComponent, ExperienceComponent],
    imports: [BrowserModule, AppRoutingModule],
    bootstrap: [AppComponent]
  })
  
  export class AppModule {}
  