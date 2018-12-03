import {
	IAppContext,
	EntityId,
	EntityRef,
	IAssetAssocMutator,
	ITagAssocMutator,
} from 'types/cordium';

export interface ITaskBase {
	taskId?: EntityId | null;
	name: string;
	description: string;
	series: EntityId[];
	dueDate: string | null;
	completionDate: string | null;
	priority: TaskPriority;
	status: TaskStatus;
	active: boolean;
	timeZone: string;
}

export interface ITask extends EntityRef, ITaskBase {
	startDate: string;
	plans: EntityId[];
	ownerVisas: EntityId[];
	contributorVisas: EntityId[];
	alerts: EntityId[];
	tags: EntityId[];
	assets: EntityId[];
	threads?: EntityId[];
	notes: EntityId[];
	repeats: EntityId[];
	isPastDue: boolean;
}

export interface ITaskInput extends
	ITaskBase,
	IAssetAssocMutator,
	ITagAssocMutator {}

export interface ITaskCreateRequest {
	changeset: Partial<ITaskInput>;
	plansToAdd: Cordium.EntityId[];
	tagsToCreate: Cordium.ITagInput[];
}

export interface ITaskMutationBase {
	taskId: Cordium.EntityId;
	changeFutureInstances: boolean;
}

export interface ITaskUpdateRequest extends ITaskMutationBase {
	changeset: Partial<ITaskInput>;
	tagsToCreate: Cordium.ITagInput[];
}

export type ITaskDeleteRequest = ITaskMutationBase;

export interface ITaskFilter {
	priorities?: TaskPriority[];
	tags?: EntityId[];
	taskMembers?: EntityId[];
	statusTypes?: TaskStatus[];
	includeCompleted?: boolean;
	includePastDue?: boolean;
}

export interface IPlanTaskFilter extends ITaskFilter {
	planIds: EntityId[];
}

export interface ISeriesTaskFilter extends ITaskFilter {
	seriesIds: EntityId[];
}

export interface IInstanceTaskFilter extends ITaskFilter {
	instanceIds: EntityId[];
}

export enum TaskPriority {
	NONE = 0,
	LOW = 1,
	MEDIUM = 2,
	HIGH = 3,
	URGENT = 4
}

export enum TaskStatus {
	NOT_STARTED = 0,
	NEEDS_REVIEW = 1,
	IN_PROGRESS = 2,
	PENDING = 3,
	COMPLETED = 4
}

export enum TasksSortType {
	STARTDATE = 'StartDate',
	DUEDATE = 'DueDate',
	PRIORITY = 'Priority',
	STATUS = 'Status',
	NONE = 'None'
}

export enum TaskFilter {
	TODAY = 'TODAY',
	THIS_MONTH = 'THIS_MONTH',
	THIS_QUARTER = 'THIS_QUARTER',
	THIS_YEAR = 'THIS_YEAR',
	ALL_TASKS = 'ALL_TASKS'
}

export enum InstanceViewType {
	FUTURE = 0,
	PAST = 1
}

export interface ITaskExport {
	asset: Cordium.IAsset;
	url: string;
}
