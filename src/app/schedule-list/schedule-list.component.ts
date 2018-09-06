import { Component, OnInit } from '@angular/core';
import { SchedulerService, Schedule } from '../services/scheduler.service';

@Component({
    selector: 'app-schedule-list',
    templateUrl: './schedule-list.component.html',
    styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {
    public schedules: Schedule[] = [];
    public displayedColumns: string[] = [
        'name', 'planLabel', 'active', 'delete'
    ];

    constructor(private schedulerService: SchedulerService) {}

    ngOnInit(): void {
        this.getSchedules();
    }

    /**
     * active変更
     * @param {number} index
     */
    public activeToggle(index: number): void {
        this.schedulerService.activeToggle(index).subscribe(
            response => {
                this.schedules[index] = new Schedule(response);
            }
        );
    }

    /**
     * 削除
     * @param {number} index
     */
    public delete(index: number): void {
        this.schedulerService.delete(index).subscribe(
            response => {
                this.schedules = response.map(schedule => new Schedule(schedule));
            }
        );
    }

    private getSchedules(): void {
        this.schedules = this.schedulerService.getSchedules();
    }
}
