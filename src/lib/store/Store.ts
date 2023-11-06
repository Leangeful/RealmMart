import type { StoreExport } from './types';

export class Store implements StoreExport {
	hasOpened = false;

	getExport(): StoreExport {
		return { hasOpened: this.hasOpened };
	}

	setExport(obj: StoreExport) {
		this.hasOpened = obj.hasOpened;
	}
}
