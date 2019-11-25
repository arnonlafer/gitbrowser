function promise(){
	return new Promise((resolve, reject) => {
		if (i < 10)
		setTimeout(() => {
			resolve("abc")
		}, Math.random() * 2000);
	});
}