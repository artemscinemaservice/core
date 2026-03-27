export type BaseRepositoryMethod = (...args: any[]) => any;

export interface BaseRepositoryCrudDelegate {
	findUnique: BaseRepositoryMethod;
	findFirst: BaseRepositoryMethod;
	findMany: BaseRepositoryMethod;
	create: BaseRepositoryMethod;
	update: BaseRepositoryMethod;
	delete: BaseRepositoryMethod;
	upsert: BaseRepositoryMethod;
	count: BaseRepositoryMethod;
}

export type BaseRepositoryMethodArgs<
	TDelegate extends BaseRepositoryCrudDelegate,
	TMethod extends keyof BaseRepositoryCrudDelegate,
> = Parameters<TDelegate[TMethod]>[0];

export type BaseRepositoryMethodResult<
	TDelegate extends BaseRepositoryCrudDelegate,
	TMethod extends keyof BaseRepositoryCrudDelegate,
> = ReturnType<TDelegate[TMethod]>;

export declare class BaseRepository<
	TDelegate extends BaseRepositoryCrudDelegate,
> {
	protected readonly delegate: TDelegate;

	public constructor(delegate: TDelegate);

	public findUnique(
		args: BaseRepositoryMethodArgs<TDelegate, 'findUnique'>
	): BaseRepositoryMethodResult<TDelegate, 'findUnique'>;

	public findFirst(
		args: BaseRepositoryMethodArgs<TDelegate, 'findFirst'>
	): BaseRepositoryMethodResult<TDelegate, 'findFirst'>;

	public findMany(
		args: BaseRepositoryMethodArgs<TDelegate, 'findMany'>
	): BaseRepositoryMethodResult<TDelegate, 'findMany'>;

	public create(
		args: BaseRepositoryMethodArgs<TDelegate, 'create'>
	): BaseRepositoryMethodResult<TDelegate, 'create'>;

	public update(
		args: BaseRepositoryMethodArgs<TDelegate, 'update'>
	): BaseRepositoryMethodResult<TDelegate, 'update'>;

	public delete(
		args: BaseRepositoryMethodArgs<TDelegate, 'delete'>
	): BaseRepositoryMethodResult<TDelegate, 'delete'>;

	public upsert(
		args: BaseRepositoryMethodArgs<TDelegate, 'upsert'>
	): BaseRepositoryMethodResult<TDelegate, 'upsert'>;

	public count(
		args: BaseRepositoryMethodArgs<TDelegate, 'count'>
	): BaseRepositoryMethodResult<TDelegate, 'count'>;
}
