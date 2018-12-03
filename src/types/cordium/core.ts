// Type definitions for Pilot 0.0.1
// Project: https://github.com/cordium/pilot2
// Definitions by: Cordium Software

import { Observable } from 'rxjs/Rx';

import { ApplicationState } from './index';

export type EntityId = string | number;

export interface EntityRef {
	id?: EntityId;
}

export interface IDomainRepo<T, U> {
	load (ids: string[] | string, options?: any): Observable<T[]>;
	create (entity: U): Observable<T>;
	update (entity: U[]): Observable<T[]>;
	delete (entity: string[] | U[]): Observable<Cordium.EntityId[]>;
	push (entity: any): Observable<boolean>;
}

export interface IOption {
	label: number | string;
	value: number | string;
	selected?: boolean;
}

export interface IAppContext {
	appContext: AppContextType;
	appContextId: EntityId;
}

export interface ISource {
	sourceId: EntityId;
	sourceType?: AppContextType;
}

export interface IDictionary<T> {
	[id: string]: T;
}

export interface IDictionaryNum<T> extends IDictionary<T> {
	[id: number]: T;
}

export interface IResponse<T> {
	payload: T,
	status?: ApplicationState,
	error?: ApplicationState,
	exception?: any,
}

export interface IRequest<T> {
	payload: T;
	options?: any;
}

export type IResponseMutation = IResponse<IDictionary<boolean>>;

export interface IToast {
	message: string;
	mode: ToastMode;
	icon: string;
	active: boolean;
}

export enum ToastMode {
	SUCCESS = 'success',
	ERROR = 'error',
	INFO = 'info'
}

export enum AppContextType {
	TASK = 'Instance',
	MESSAGE = 'Thread',
	PASSAGE = 'Message',
	NOTE = 'Note',
	TAG = 'Tag',
	NOTIFICATION = 'Notification',
	ASSET = 'Asset',
}

export interface ITextSearch {
	value: string;
}

