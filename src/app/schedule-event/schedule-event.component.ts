import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { SchedulerService } from '../services/scheduler.service';

@Component({
    selector: 'app-schedule-event',
    templateUrl: './schedule-event.component.html',
    styleUrls: ['./schedule-event.component.css']
})
export class ScheduleEventComponent implements OnInit {
    // スケジューラー監視用
    private subscription: Subscription;

    constructor(private schedulerService: SchedulerService) {}

    ngOnInit(): void {
        this.checkScheduler();
    }

    /**
     * スケジューラー監視
     */
    private checkScheduler(): void {
        // 一定時間(1分)経過毎に判定
        this.subscription = interval(60000).pipe(
            flatMap(() => this.schedulerService.check())
        ).subscribe(result => {
            if (result.length) {
                // タブを開く
                for (const schedule of result) {
                    chrome.tabs.create({url: schedule.url});
                }
            }
        });
    }
}
