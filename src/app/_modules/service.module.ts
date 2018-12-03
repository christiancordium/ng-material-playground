import { NgModule, Optional, SkipSelf } from '@angular/core';

// ANGULAR MODULES REQUIRED FOR EXPORTS
import { CommonModule } from '@angular/common';

// CORE COMPONENTS
import { APP_PUSH_STATE, APP_PUSH_MESSAGE } from 'app/app.config';


// GLOBAL INJECTABLES

@NgModule({
	imports: [
		CommonModule
	],
	exports: [
		CommonModule
	],
	declarations: [
	],
	providers: [
		{ provide: APP_PUSH_STATE, useValue: process.env.PUSH_HUB_URI + '/statehub' },
		{ provide: APP_PUSH_MESSAGE, useValue: process.env.PUSH_HUB_URI + '/messagehub' }
	]
})

export class ServiceModule {
	constructor( @Optional() @SkipSelf() parentModule: ServiceModule) {
		if (parentModule) {
			throw new Error(
				'ServiceModule is already loaded. Import it in the AppModule only');
			}
	}
}
