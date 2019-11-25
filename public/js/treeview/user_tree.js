function updateCurrentNode(){
	console.log(fileData[currentNode]);
	if (fileData[currentNode].type != "dir") {
		FileView.load(fileData[currentNode].f_url, fileData[currentNode].f_type);
	}
}