import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RangePipe } from './range.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        RangePipe
    ],
    exports: [
        RangePipe
    ]
})
export class PipeModule { }
