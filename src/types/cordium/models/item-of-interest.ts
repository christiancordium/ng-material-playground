import {
	IAppContext,
	EntityId,
	EntityRef,
    IAsset,
    VIOLATION_STATUS
} from 'types/cordium';

export interface IItemsOfInterestBase {
    interestItemId?: EntityId;
    name: string;
    description?: string;
    status: VIOLATION_STATUS;
}

export interface IItemsOfInterest extends EntityRef, IItemsOfInterestBase {
    ruleExecutionId: EntityId;
    rulesExecution: string;
}

export interface IItemsOfInterestAssocMutator {
	itemOfInterestToAdd: EntityId[];
	itemOfInterestToUpdate: IItemsOfInterestInput[];
}

export interface IItemsOfInterestSearch {
    itemOfInterestId?: EntityId;
    name: string;
}

export interface IItemsOfInterestInput {
    itemOfInterestId: EntityId;
	status: VIOLATION_STATUS;
}

