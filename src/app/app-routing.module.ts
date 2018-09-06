import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ScheduleAddComponent } from './schedule-add/schedule-add.component';
import { ScheduleEventComponent } from './schedule-event/schedule-event.component';

const appRoutes: Routes = [
    {
        path: 'list',
        component: ScheduleListComponent
    },
    {
        path: 'add',
        component: ScheduleAddComponent
    },
    {
        path: 'event',
        component: ScheduleEventComponent
    },
    /**
     * 対象がなかった時
     */
    {
        path: '**',
        redirectTo: 'list',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
