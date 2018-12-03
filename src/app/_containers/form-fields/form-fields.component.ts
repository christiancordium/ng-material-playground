import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

export interface Food {
	value: string;
	viewValue: string;
}

@Component({
	selector: 'app-form-fields',
	templateUrl: './form-fields.component.html',
	styleUrls: ['./form-fields.component.scss']
})


export class FormFieldsComponent implements OnInit {
	foods: Food[] = [
		{value: 'steak-0', viewValue: 'Steak'},
		{value: 'pizza-1', viewValue: 'Pizza'},
		{value: 'tacos-2', viewValue: 'Tacos'}
	];

	betterFoods: Food[] = [
		{value: 'ramen-0', viewValue: 'Ramen'},
		{value: 'ramen-1', viewValue: 'Ramen'},
		{value: 'ramen-2', viewValue: 'Ramen'}
	];
	email = new FormControl('', [Validators.required, Validators.email]);
	constructor() { }

	ngOnInit() {
	}

	getErrorMessage() {
		return this.email.hasError('required') ? 'You must enter a value' :
			this.email.hasError('email') ? 'Not a valid email' : '';
	}
}
