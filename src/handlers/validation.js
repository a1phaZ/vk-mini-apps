import {format} from 'date-fns';

export default class Validation {
	/**
	 * Проверка на оверсайз
	 * @param e {*}
	 * @param max Number
	 * @returns {boolean}
	 */
	static overSize(e, max) {
		const val = e.target.value;
		let maxLength;
		if (val.indexOf('.') >= 0) {
			maxLength = val.indexOf('.')+3
		} else {
			maxLength = max;
		}
		return e.target.value.slice(0, maxLength);
	}

	static overDate (date) {
		const dt = new Date(date);
		const now = new Date();
		if (dt > now) {
			return format(new Date(now), 'yyyy-MM-dd');
		}
		return format(new Date(dt), 'yyyy-MM-dd');
	}

	static typeNumber(e) {
		if (e.key === 'e' || e.key === '+' || e.key === '-') {
			e.preventDefault()
		}
		if (e.key === '.' && e.target.value === '') {
			e.preventDefault()
		}
		if (e.key === '.' && e.target.value.includes('.')) {
			console.log(e.target.value);
			e.target.value.slice(0, e.target.value.indexOf('..'));
			e.preventDefault()
		}
	}
}