export const rem = (num) => {
	return num / 16 + "rem";
};

export const em = (num, size = 16) => {
	return num / size + "em";
};

export const per = (num, parent) => {
	return (num / parent) * 100 + "%";
};
