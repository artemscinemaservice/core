class BaseRepository {
	constructor(delegate) {
		this.delegate = delegate;
	}

	findUnique(args) {
		return this.delegate.findUnique(args);
	}

	findFirst(args) {
		return this.delegate.findFirst(args);
	}

	findMany(args) {
		return this.delegate.findMany(args);
	}

	create(args) {
		return this.delegate.create(args);
	}

	update(args) {
		return this.delegate.update(args);
	}

	delete(args) {
		return this.delegate.delete(args);
	}

	upsert(args) {
		return this.delegate.upsert(args);
	}

	count(args) {
		return this.delegate.count(args);
	}
}

module.exports = {
	BaseRepository,
};
