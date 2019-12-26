export default class Prepare {
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
}