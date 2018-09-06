import { Injectable } from '@angular/core';
import { Observable, of, throwError, EMPTY } from 'rxjs';

const STORAGE_KEY = 'MySOU_schedules';

export class Schedule {
    public name: string;
    public url: string;
    public days: number[];
    public hour: number;
    public min: number;
    public active: boolean;
    get planLabel(): string {
        const weekdays = [
            'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
        ];
        const days = this.days.map(day => weekdays[day]).join(',');
        return `${days} ${('0' + this.hour).slice(-2)}:${('0' + this.min).slice(-2)}`;
    }

    constructor(schedule: any) {
        this.name = schedule.name;
        this.url = schedule.url;
        this.days = schedule.days;
        this.hour = schedule.hour;
        this.min = schedule.min;
        this.active = schedule.active;
    }
}

@Injectable({
    providedIn: 'root'
})
export class SchedulerService {
    private schedules: Schedule[] = [];

    constructor() { }

    /**
     * ストレージからスケジュール取得
     */
    public getSchedules(): Schedule[] {
        const schedules = JSON.parse(localStorage.getItem(STORAGE_KEY));
        this.schedules = schedules ? schedules.map(schedule => new Schedule(schedule)) : [];
        return this.schedules;
    }

    /**
     * 実行するSchedulerの確認
     * @returns {Observable<Schedule[]>}
     */
    public check(): Observable<Schedule[]> {
        const now = new Date();
        const schedules = this.getSchedules().filter(schedule => {
            return schedule.active && schedule.days.find(day => now.getDay() === day)
                && schedule.hour === now.getHours() && schedule.min === now.getMinutes();
        });
        return of(schedules);
    }

    /**
     * 追加
     * @param {{[key: string]: any}} param
     * @returns {Observable<Schedule[]>}
     */
    public add(param: {[key: string]: any}): Observable<Schedule[]> {
        param.active = true;
        this.schedules.push(new Schedule(param));
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.schedules));
        return of(this.schedules);
    }

    /**
     * Active変更
     * @param {number} index
     * @returns {Observable<Schedule>}
     */
    public activeToggle(index: number): Observable<Schedule> {
        const target = this.schedules.find((_, key) => key === index);
        if (!target) {
            return throwError(EMPTY);
        }
        target.active = !target.active;
        this.schedules[index] = target;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.schedules));
        return of(target);
    }

    /**
     * 削除
     * @param {number} index
     * @returns {Observable<Schedule[]>}
     */
    public delete(index: number): Observable<Schedule[]> {
        this.schedules.splice(index, 1);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.schedules));
        return of(this.schedules);
    }
}
