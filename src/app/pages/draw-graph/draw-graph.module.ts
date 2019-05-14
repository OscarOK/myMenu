import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DrawGraphPage } from './draw-graph.page';

import { AddNodePage } from '../add-node/add-node.page';
import { AddNodePageModule } from '../add-node/add-node.module';

@NgModule({
    entryComponents: [
        AddNodePage
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AddNodePageModule
    ],
    declarations: [DrawGraphPage]
})
export class DrawGraphPageModule { }
