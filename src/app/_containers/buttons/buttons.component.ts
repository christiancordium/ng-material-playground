import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { MatSelect } from '@angular/material';
import { FormControl } from '@angular/forms';

export interface Food {
	value: string;
	viewValue: string;
}

@Component({
	selector: 'app-buttons',
	templateUrl: './buttons.component.html',
	styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
	showDelay = new FormControl(0);
	hideDelay = new FormControl(1000000);

	tooltipState = false;
	disableAnimation = true;
	foods: Food[] = [
		{value: 'steak-0', viewValue: 'Steak'},
		{value: 'pizza-1', viewValue: 'Pizza'},
		{value: 'tacos-2', viewValue: 'Tacos'}
	];

	constructor(
	) {
	}

	ngOnInit() {
	}

	toggleTooltip() {
		return this.tooltipState = !this.tooltipState;
	}
}
