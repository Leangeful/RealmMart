import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const medieval: CustomThemeConfig = {
	name: 'medieval',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `VerilySerifMono, serif`,
		'--theme-font-family-heading': `Berry Rotunda, sans-serif`,
		'--theme-font-color-base': 'var(--color-surface-700)',
		'--theme-font-color-dark': 'var(--color-primary-50)',
		'--theme-rounded-base': '0px',
		'--theme-rounded-container': '0px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': 'var(--color-primary-50)',
		// =~= Theme Colors  =~=
		// primary | #e9851a
		'--color-primary-50': '252 237 221', // #fceddd
		'--color-primary-100': '251 231 209', // #fbe7d1
		'--color-primary-200': '250 225 198', // #fae1c6
		'--color-primary-300': '246 206 163', // #f6cea3
		'--color-primary-400': '240 170 95', // #f0aa5f
		'--color-primary-500': '233 133 26', // #e9851a
		'--color-primary-600': '210 120 23', // #d27817
		'--color-primary-700': '175 100 20', // #af6414
		'--color-primary-800': '140 80 16', // #8c5010
		'--color-primary-900': '114 65 13', // #72410d
		// secondary | #96cda4
		'--color-secondary-50': '239 248 241', // #eff8f1
		'--color-secondary-100': '234 245 237', // #eaf5ed
		'--color-secondary-200': '229 243 232', // #e5f3e8
		'--color-secondary-300': '213 235 219', // #d5ebdb
		'--color-secondary-400': '182 220 191', // #b6dcbf
		'--color-secondary-500': '150 205 164', // #96cda4
		'--color-secondary-600': '135 185 148', // #87b994
		'--color-secondary-700': '113 154 123', // #719a7b
		'--color-secondary-800': '90 123 98', // #5a7b62
		'--color-secondary-900': '74 100 80', // #4a6450
		// tertiary | #06b5d3
		'--color-tertiary-50': '218 244 248', // #daf4f8
		'--color-tertiary-100': '205 240 246', // #cdf0f6
		'--color-tertiary-200': '193 237 244', // #c1edf4
		'--color-tertiary-300': '155 225 237', // #9be1ed
		'--color-tertiary-400': '81 203 224', // #51cbe0
		'--color-tertiary-500': '6 181 211', // #06b5d3
		'--color-tertiary-600': '5 163 190', // #05a3be
		'--color-tertiary-700': '5 136 158', // #05889e
		'--color-tertiary-800': '4 109 127', // #046d7f
		'--color-tertiary-900': '3 89 103', // #035967
		// success | #83ca5d
		'--color-success-50': '236 247 231', // #ecf7e7
		'--color-success-100': '230 244 223', // #e6f4df
		'--color-success-200': '224 242 215', // #e0f2d7
		'--color-success-300': '205 234 190', // #cdeabe
		'--color-success-400': '168 218 142', // #a8da8e
		'--color-success-500': '131 202 93', // #83ca5d
		'--color-success-600': '118 182 84', // #76b654
		'--color-success-700': '98 152 70', // #629846
		'--color-success-800': '79 121 56', // #4f7938
		'--color-success-900': '64 99 46', // #40632e
		// warning | #f1ab23
		'--color-warning-50': '253 242 222', // #fdf2de
		'--color-warning-100': '252 238 211', // #fceed3
		'--color-warning-200': '252 234 200', // #fceac8
		'--color-warning-300': '249 221 167', // #f9dda7
		'--color-warning-400': '245 196 101', // #f5c465
		'--color-warning-500': '241 171 35', // #f1ab23
		'--color-warning-600': '217 154 32', // #d99a20
		'--color-warning-700': '181 128 26', // #b5801a
		'--color-warning-800': '145 103 21', // #916715
		'--color-warning-900': '118 84 17', // #765411
		// error | #d57e78
		'--color-error-50': '249 236 235', // #f9eceb
		'--color-error-100': '247 229 228', // #f7e5e4
		'--color-error-200': '245 223 221', // #f5dfdd
		'--color-error-300': '238 203 201', // #eecbc9
		'--color-error-400': '226 165 161', // #e2a5a1
		'--color-error-500': '213 126 120', // #d57e78
		'--color-error-600': '192 113 108', // #c0716c
		'--color-error-700': '160 95 90', // #a05f5a
		'--color-error-800': '128 76 72', // #804c48
		'--color-error-900': '104 62 59', // #683e3b
		// surface | #433a34
		'--color-surface-50': '227 225 225', // #e3e1e1
		'--color-surface-100': '217 216 214', // #d9d8d6
		'--color-surface-200': '208 206 204', // #d0cecc
		'--color-surface-300': '180 176 174', // #b4b0ae
		'--color-surface-400': '123 117 113', // #7b7571
		'--color-surface-500': '67 58 52', // #433a34
		'--color-surface-600': '60 52 47', // #3c342f
		'--color-surface-700': '50 44 39', // #322c27
		'--color-surface-800': '40 35 31', // #28231f
		'--color-surface-900': '33 28 25' // #211c19
	}
};
