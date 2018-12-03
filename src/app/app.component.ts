import {
	Component,
	OnInit,
	Input,
	ElementRef,
	Output,
	EventEmitter
} from '@angular/core';

import {
	FormBuilder,
	FormGroup,
	FormControl,
	Validators
} from '@angular/forms';

import { Observable, of } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	appNav$ = this.getAppNav();
	newTaskFormGroup: FormGroup;
	constructor (
		private formBuilder: FormBuilder
	) { }

	ngOnInit() {
	}

	getAppNav() {
		return of([
			{
				title: 'Styles BB',
				children: [
					{
						title: 'buttons',
						url: '/buttons'
					},
					{
						title: 'form fields',
						url: '/form-fields'
					},
					{
						title: 'chips',
						url: '/chips'
					},
				]
			},
		])
	}

	getAppLinks() {
		return of([
			{
				icon: 'assessment',
				title: 'Compliance Mgmt',
				children: [
					{
						title: 'Compliance Matrix',
						url: '/cmp/something'
					},
					{
						title: 'Compliance Descriptions',
						url: '/coe/cases/list'
					},
					{
						title: 'Calendar',
					},
					{
						title: 'Recent Actions',
					}
				]
			},
		])
	}
}
