import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SomeComponent } from './some/some.component';
import { FirstLevelComponent } from './first-level/first-level.component';
import { SecondLevelComponent } from './second-level/second-level.component';
import { ThirdLevelComponent } from './third-level/third-level.component';

@NgModule({
  declarations: [
    AppComponent,
    SomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstLevelComponent,
    SecondLevelComponent,
    ThirdLevelComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
