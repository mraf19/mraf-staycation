const formatNumbering = (number) => {
	const format = new Intl.NumberFormat("id-ID");
	return format.format(number);
};

export default formatNumbering;
