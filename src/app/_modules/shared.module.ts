/**
 * SharedModule contains code that will be used across your app and Feature Modules.
 * import this SharedModule into the specific Feature Modules as needed,
 * but do not import into the Main AppModule or CoreModule.
 * This module should not have any providers.
 */

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// COMMON ANGULAR
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ServiceModule } from './service.module';

// DIRECTIVES

// PIPES & COMPONENTS

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		ServiceModule
	],
	declarations:  [
	],
	exports: [
		CommonModule,
		FormsModule,
		RouterModule,
		ReactiveFormsModule,
		MaterialModule,
		ServiceModule
	],
	providers: [],
})
export class SharedModule {}
