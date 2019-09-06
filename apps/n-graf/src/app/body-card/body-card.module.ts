import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule } from '@nebular/theme';

import { NgxGraphModule } from '@swimlane/ngx-graph';

import { BodyCardComponent } from './body-card.component';



@NgModule({
  declarations: [BodyCardComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NgxGraphModule
  ],
  exports: [BodyCardComponent]
})
export class BodyCardModule { }
