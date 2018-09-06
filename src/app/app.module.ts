import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ScheduleAddComponent } from './schedule-add/schedule-add.component';
import { ScheduleEventComponent } from './schedule-event/schedule-event.component';


@NgModule({
    declarations: [
        AppComponent,
        ScheduleListComponent,
        ScheduleAddComponent,
        ScheduleEventComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
