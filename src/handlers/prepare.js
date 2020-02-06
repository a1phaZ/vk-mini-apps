export default class Prepare {
	/**
	 * Преобразование qr кода
	 * @param str
	 * @returns {{dt: *, fn: *, i: *, sum: *, fp: *}}
	 */
	static qr (str){
		let dt, sum, fn, i, fp;

		if (str) {
			[, dt, sum, fn, i, fp] = str.match(/t=(\w{8}T\w+)&s=(\w+\.*\w+)&fn=(\w+)&i=(\w+)&fp=(\w+)/);
		}

		return {
			dt,
			sum,
			fn,
			i,
			fp
		}
	}

	/**
	 * Преобразование даты
	 * @param str
	 * @returns {string}
	 */
	static date(str) {
		const dt = new Date(str);
		let monthName;
		switch (dt.getMonth() + 1) {
			case 1:
				monthName = 'января';
				break;
			case 2:
				monthName = 'февраля';
				break;
			case 3:
				monthName = 'марта';
				break;
			case 4:
				monthName = 'апреля';
				break;
			case 5:
				monthName = 'мая';
				break;
			case 6:
				monthName = 'июня';
				break;
			case 7:
				monthName = 'июля';
				break;
			case 8:
				monthName = 'августа';
				break;
			case 9:
				monthName = 'сентября';
				break;
			case 10:
				monthName = 'октября';
				break;
			case 11:
				monthName = 'ноября';
				break;
			case 12:
				monthName = 'декабря';
				break;
			default:
				break;
		}
		return `${dt.getDate()} ${monthName} ${dt.getFullYear()}`;
	}

	/**
	 * Преобразование суммы
	 * @param n
	 * @returns {string}
	 */
	static sum(n) {
		return new Intl.NumberFormat('ru-RU', {style: 'currency', currency: 'RUB'}).format(n / 100);
	}

	/**
	 * Расчет общей суммы
	 * @param arr
	 * @returns {number}
	 */
	static totalReceiptSum(arr) {
		const reducer = (previousValue, currentValue) => previousValue + currentValue;
		return arr.map((item) => {
			return item.totalSum;
		}).reduce(reducer);
	}

	/**
	 * Подсчет суммарных доходов / расходов
	 * @param arr
	 * @param income
	 * @returns {number}
	 */
	static totalSum(arr, income) {
		const reducer = (previousValue, currentValue) => previousValue + currentValue;
		const ts = arr.map(items => {
			return items.items.map(item => {
				if (income) {
					return item.income ? item.sum : 0
				}
				return !item.income ? item.sum : 0
			}).reduce(reducer)
		}).reduce(reducer);
		return income ? ts : -1 * ts;
	}
}