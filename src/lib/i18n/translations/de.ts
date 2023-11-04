import lang from '../lang.json';
export const de = {
	lang,
	nav: {
		mainHome: 'Zuhause',
		mainStore: 'Geschäft',
		settings: 'Einstellungen'
	},
	content: {
		title: 'Willkommen SvelteKit',
		info: 'You can now access all your language mutations using <code>{$l(LOCALE, TRANSLATION_KEY)}</code>:',
		text: 'Besuche <a class="text-secondary-700 hover:text-secondary-300" href="{{link}}">kit.svelte.dev</a> um die Dokumentation zu lesen.'
	},
	settings: {
		tickspeed: 'tickspeed',
		language: 'sprache'
	},
	save: {
		select: 'wähle spielstand',
		load: 'laden',
		delete: 'löschen',
		save_game: 'jetzt speichern'
	}
};
