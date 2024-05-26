const monthNames = [
	"января", "февраля", "марта", "апреля", "мая", "июня",
	"июля", "августа", "сентября", "октября", "ноября", "декабря"
];

const dateFormat = (fullDate: string) => {
	const date = new Date (fullDate);
	const day = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();

	return `${day} ${monthNames[month]} ${year}`;
};

export { dateFormat };
