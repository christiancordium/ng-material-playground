import { TestBed, ComponentFixture } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { Store } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CoreModule } from './_modules/core.module';

describe('App', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				AppRoutingModule,
				CoreModule
			],
			declarations: [
				AppComponent,
			],
			providers: [
				{ provide: APP_BASE_HREF, useValue: '/'},
			],
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it ('should work', () => {
		expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
	});
});
