import type { ISettings } from '$lib/settings/types';
import { writable } from 'svelte/store';
import type { GameState } from '../types';
import type { SaveInfo, SaveList, SaveType } from './types';

const settingsKey = 'realmMart-settings';
const autoKey = 'realmMart-auto-0-';
const manualKey = 'realmMart-manual-';

let saveList: SaveList = {};
export const saveListStore = writable(saveList);

export function saveGame(game: GameState, autoSave = true, manualID?: number) {
	//console.debug('Saving:', game);

	let saveKey = autoSave ? autoKey : manualKey;
	let oldAutoKey: string = '';

	if (autoSave && saveList.autoSaveInfo) oldAutoKey = saveList.autoSaveInfo.saveKey;

	if (!autoSave) {
		if (manualID) {
			saveKey += manualID.toString() + '-';
		} else {
			let higestID = 0;
			if (saveList.manualSaveInfo) {
				for (let i = 0; i < saveList.manualSaveInfo.length; i++) {
					if (saveList.manualSaveInfo[i].id > higestID) higestID = saveList.manualSaveInfo[i].id;
				}
			}
			saveKey += (higestID + 1).toString() + '-';
		}
	}
	saveKey += Date.now().toString();
	writeToLocalStorage(saveKey, game);
	deleteSave(oldAutoKey);
}

export function deleteSave(saveKey: string) {
	console.log('deleting:', saveKey);
	localStorage.removeItem(saveKey);
	updateSaveList();
}

export function loadGame(loadKey?: string): GameState | undefined {
	updateSaveList();

	let saveStr: string | null = '';

	if (!loadKey) {
		loadKey = '';
		let higestDate = 0;
		if (saveList.autoSaveInfo) {
			loadKey = saveList.autoSaveInfo.saveKey;
			higestDate = saveList.autoSaveInfo.date;
		}
		if (saveList.manualSaveInfo) {
			saveList.manualSaveInfo.forEach((manualSave) => {
				if (manualSave.date > higestDate) {
					higestDate = manualSave.date;
					loadKey = manualSave.saveKey;
				}
			});
		}
	}

	saveStr = localStorage.getItem(loadKey);

	if (saveStr) {
		return JSON.parse(atob(saveStr));
	}

	return undefined;
}

export function getSaveList(): SaveList {
	const result: SaveList = {};

	Object.entries(localStorage).forEach((storageItem) => {
		const storageKey = storageItem[0];
		if (storageKey.includes(autoKey)) {
			result.autoSaveInfo = parseSaveKeyString(storageKey);
		} else if (storageKey.includes(manualKey)) {
			//TODO there has to be a better way to do this
			if (result.manualSaveInfo) result.manualSaveInfo.push(parseSaveKeyString(storageKey));
			else result.manualSaveInfo = [parseSaveKeyString(storageKey)];
		}
	});

	return result;
}

export function saveSettings(settings: ISettings) {
	console.log('save settings', settings);
	writeToLocalStorage(settingsKey, settings);
}

export function loadSettings(): ISettings | undefined {
	console.debug('load settings');
	const settingsStr = localStorage.getItem(settingsKey);

	if (settingsStr) {
		return JSON.parse(atob(settingsStr));
	}

	return undefined;
}

function writeToLocalStorage(key: string, data: object) {
	console.log('writing to storage', key, data);
	localStorage.setItem(key, btoa(JSON.stringify(data)));
}

function parseSaveKeyString(saveKeyStr: string): SaveInfo {
	const keyAttribs = saveKeyStr.split('-');
	const result: SaveInfo = { saveKey: saveKeyStr, saveType: 'auto', id: 0, date: 0 };

	result.saveType = keyAttribs[1] as SaveType;
	result.id = Number(keyAttribs[2]);
	result.date = Number(keyAttribs[3]);

	return result;
}

function updateSaveList() {
	saveList = getSaveList();
	//TODO sort list
	saveListStore.set(saveList);
}
