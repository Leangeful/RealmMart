import { Ressource } from './Ressource';
import type { GoldExport } from './types';

export class Gold extends Ressource implements GoldExport {
	upgrade = 5;

	constructor(amount = 0, income = 0) {
		super(amount, income);
	}

	getExportedProps(): GoldExport {
		return { upgrade: this.upgrade, ...super.getExportedProps() };
	}
	setExportedProps(obj: GoldExport) {
		super.setExportedProps(obj);
		this.upgrade = obj.upgrade;
	}
}
