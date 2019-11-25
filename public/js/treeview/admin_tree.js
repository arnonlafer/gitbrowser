function updateCurrentNode(node){
	$(".current_node").text(node['name']);
	if (fileData[currentNode].type == "dir") {
		$("#for-file").show();
	}
	else {
		$("#for-file").hide();
	}
}