import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CasesComponent } from './_containers/cases/cases.component';
import { ButtonsComponent } from './_containers/buttons/buttons.component';
import { FormFieldsComponent } from './_containers/form-fields/form-fields.component';
import { ChipsComponent } from './_containers/chips/chips.component';

const routes: Routes = [
	{ path: '', component: CasesComponent },
	{ path: 'buttons', component: ButtonsComponent },
	{ path: 'chips', component: ChipsComponent },
	{ path: 'form-fields', component: FormFieldsComponent },
	{ path: '**', component: CasesComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
