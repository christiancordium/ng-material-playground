import {
	IAppContext,
	EntityId,
	EntityRef,
	IAsset,
	IItemsOfInterest,
	IAssetAssocMutator,
	IPreclearanceRequest,
	IPreclearanceRequestAssocMutator,
	IItemsOfInterestAssocMutator
} from 'types/cordium';

export interface ICaseBase {
	caseId?: EntityId;
	name: string;
	description?: string;
}

export interface ICase extends EntityRef, ICaseBase {
	interestItems: IItemsOfInterest[];
	assets: IAsset[];
	cases: ICase[];
	requests: IPreclearanceRequest[],
	status: CASE_STATUS;
}

export interface ICaseInput
	extends
		ICaseBase,
		IAssetAssocMutator,
		IPreclearanceRequestAssocMutator,
		ICaseAssocMutator,
		IItemsOfInterestAssocMutator
{
	id?: EntityId;
};

export interface ICaseCreateInput extends ICaseBase {};

export interface ICaseAssocMutator {
	caseToAdd: EntityId[];
	caseToRemove: EntityId[];
}

export enum CASE_STATUS {
	OPEN = 1,
	PENDING = 2,
	RESOLVED = 3
}

