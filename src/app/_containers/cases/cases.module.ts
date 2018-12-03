import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesComponent } from './cases.component';
import { SharedModule } from 'app/_modules/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CasesComponent,
  ],
  exports: [
  ],
  providers: [
  ]
})
export class CasesModule { }
