import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { SchedulerService } from '../services/scheduler.service';

@Component({
    selector: 'app-schedule-add',
    templateUrl: './schedule-add.component.html',
    styleUrls: ['./schedule-add.component.css']
})
export class ScheduleAddComponent {
    public formData: any = {days: []};
    @ViewChild('addForm') addForm: NgForm;
    get formDaysValid(): boolean {
        return !!this.formData.days.find(day => !!day);
    }
    public weekdays = [
        'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
    ];

    constructor(
        private router: Router,
        private schedulerService: SchedulerService
    ) {}

    public toggleDays(index: number): void {
        this.formData.days[index] = !this.formData.days[index];
    }

    public checkedDays(index: number): boolean {
        return !!this.formData.days[index];
    }

    public submit(): void {
        timer(100).subscribe(() => {
            const params = Object.assign({}, this.formData);
            params.days = params.days.map((_, key) => key).filter(day => !!day || day === 0);
            this.schedulerService.add(params).subscribe(
                () => {
                    this.router.navigate(['/list']);
                }
            );
        });
    }
}
