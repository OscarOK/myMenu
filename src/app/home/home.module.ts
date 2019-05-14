import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { DrawGraphPage } from "../pages/draw-graph/draw-graph.page"
import { DrawGraphPageModule } from "../pages/draw-graph/draw-graph.module"

@NgModule({
    entryComponents: [
        DrawGraphPage
    ],
    imports: [
        DrawGraphPageModule,
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ])
    ],
    declarations: [HomePage]
})
export class HomePageModule { }
