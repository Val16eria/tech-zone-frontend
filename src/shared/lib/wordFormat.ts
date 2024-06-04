const wordFormat = (
	quantity: number,
	word: string,
	ending1: string,
	ending2: string,
	ending3: string
) => {
	if (quantity % 10 === 1 && quantity % 100 !== 11) {
		return `${word}${ending1}`;
	} else if ([2, 3, 4].includes(quantity % 10) && ![12, 13, 14].includes(quantity % 100)) {
		return `${word}${ending2}`;
	}

	return `${word}${ending3}`;
};

const booleanToString = (value: boolean) => value ? "Есть" : "Нет";

export { wordFormat, booleanToString };
