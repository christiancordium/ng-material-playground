import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store, createSelector } from '@ngrx/store';
import * as jwt from 'jsonwebtoken'

@Injectable()
export class TokenService {

	private _token: Cordium.ITokenResponse | null;

	constructor () {
	}

	getToken () {
		return this._token;
	}
}
