/**
 * @angular
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * pipe Module
 */
import { PipeModule } from '../pipes/pipe.module';

/**
 * @angular/materilal
 */
import { MaterialModule } from './material/material.module';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
    ],
    exports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        PipeModule,
    ]
})
export class SharedModule { }
