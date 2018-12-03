import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons.component';
import { SharedModule } from 'app/_modules/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ButtonsComponent,
  ],
  exports: [
  ],
  providers: [
  ]
})
export class CasesModule { }
