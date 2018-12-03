import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { CoreModule } from './_modules/core.module';

import { ACALibModule } from '@acats/aca-lib';
import { ChipsComponent } from './_containers/chips/chips.component';
import { FormFieldsComponent } from './_containers/form-fields/form-fields.component';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		CoreModule,
		ACALibModule
	],
	declarations: [
		AppComponent,
		ChipsComponent,
		FormFieldsComponent,
	],
	providers: [
		{ provide: APP_BASE_HREF, useValue: '/'},
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
