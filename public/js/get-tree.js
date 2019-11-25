let entries = new Array();

let getContent = (url, parent = "") => {
	fetch(url).then(res => {
		res.json().then(res => {
			if (res.message && res.message == "Not Found") {
				return;
			}
			res.forEach(entry => {
				entries.push(new Entry(entry.name, entry.type, url, parent));
			});
		});
	});
}

//getContent("http://api.github.com/repos/emscripten-core/emsdk/contents");
getContent("http://api.github.com/repos/kelseyhightower/helloworld/contents");

data = '';