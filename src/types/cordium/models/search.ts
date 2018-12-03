import {
	IAppContext,
	EntityId,
	EntityRef
} from 'types/cordium';

export interface ISearchResult extends EntityRef {
	searchId?: EntityId;
	type: SearchResultType;
	name: string;
	startDate: string;
	description: string | null;
	weight: number | null;
}

export enum SearchResultType {
	TASK = 1,
	PLAN = 2
}
