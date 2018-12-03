import {
	IAppContext,
	EntityId,
	EntityRef
} from 'types/cordium';

export interface IPreclearanceRequestBase {
	preclearanceId?: EntityId;
	name: string;
	description: string;
	userId: EntityId;
	securityId: EntityId;
	tradeDate: string;
}

export interface IPreclearanceRequest extends EntityRef, IPreclearanceRequestBase {}

export interface IPreclearanceRequestInput extends IPreclearanceRequestBase, IAppContext {
	id?: EntityId;
}

export interface IPreclearanceRequestAssocMutator {
	preclearanceToAdd: EntityId[];
	preclearanceToRemove: EntityId[];
}
