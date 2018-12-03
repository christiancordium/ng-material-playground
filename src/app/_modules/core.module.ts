import { NgModule, Optional, SkipSelf } from '@angular/core';

// ANGULAR MODULES REQUIRED FOR EXPORTS
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared.module';
import { CasesModule } from 'app/_containers/cases/cases.module';

// CORE MODULES

// CORE COMPONENTS

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		RouterModule,
		HttpModule,
		SharedModule,
		CasesModule
	],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		SharedModule
	],
	declarations: [],
	providers: []
})

export class CoreModule {
	constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error(
				'CoreModule is already loaded. Import it in the AppModule only');
			}
	}
}
