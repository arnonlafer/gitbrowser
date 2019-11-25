var preparedData;
var currentNode, currentRoot; //global variables
let fileData = new Object();
let loadTree; //function name
let loadRoot; //function name

let data = {};

function createData(raw) {
	a = new Object();
	for (i = 0; i < raw.length; i++) {
		a[raw[i].id] = raw[i];
		a[raw[i].id].children = new Array();
		fileData[raw[i].id] = new Object();
		fileData[raw[i].id].type = raw[i].type;
		fileData[raw[i].id].f_type = raw[i].f_type;
		fileData[raw[i].id].f_url = raw[i].f_url;
	}
	return a;
}

function createHirearchy(preparedData){
	
	/*
		This function creates hierearchy. The preparedData is passed to this function. This prepared data contains
		information of parent of each node and an array to hold its children. A child is inserted into its parent children array
		and also is then pushed to toDelete array. At the end, toDelete elements are deleted.
	*/
	
	let toDelete = new Array();
	
	for (id in preparedData) {
		if (preparedData[id].parent in preparedData) {
			preparedData[preparedData[id].parent].children.push(preparedData[id]);
			console.log("pushing to " , preparedData[preparedData[id].parent]);
			if (toDelete.indexOf(preparedData[id]) == -1)
				toDelete.push(id);
		}
		else {
			delete preparedData[id].parent;
		}
	}
	
	for (i = 0; i < toDelete.length; i++) {
		delete preparedData[toDelete[i]];
	}
	let finalData = new Array();
	for (id in preparedData) {
		finalData.push(preparedData[id]);
	}
	
	return finalData;
}

$(document).ready(function(){
	
	/*
		This function gets the repositories' names saved in our database. When it gets the data, it inserts that data to
		a select element.
	*/
	
	initRoots = () => {
		$.get("/repo/roots", (data) => {
			if (data.err) {
				error("There is error");
				console.error(data);
			}
			$("#roots").html("<option value='-2'>Other</option>");
			data.forEach(root => {
				$("#roots").html("<option value='"+root.id+"'>"+root.owner+"/"+root.name+"</option>" + $("#roots").html());
			});
			$("#roots").html("<option value='-1'>Choose</option>" + $("#roots").html());
			$("#other-repo").slideUp(300);
		});
	}
	
	/*
		The finalData we get from createHirearchy function is passed to loadTree functions. This functions creates tree and show it
		in a container.
	*/
	
	loadTree = (data) => {
		
		/*
			We are using fileTree library to make tree ui.
		*/
		
		let tree = $("#treeview-container").fileTree({
			data : data,
			sortable : false,
			selectable:true
		});
		tree.bind('itemSelected', function(e, el){
			
			/*
				When we click a node/entry, this block of code executes.
			*/
			
			let selectedNode = new Object();
			selectedNode['id'] = $(el).data('id');
			selectedNode['name'] = $(el).data('name');
			selectedNode['type'] = $(el).data('type');
			currentNode = selectedNode['id'];
			currentRoot = $(".topbar-select").val();
			updateCurrentNode(selectedNode);
		});
	}
	
	
	$(".topbar-select").change(function(){
		
		/*
			When a user changes a repo, this block of code runs.
		*/
		
		if (this.value == -2) {
			
			//this means that user wants to add a new repo.
			
			$("#other-repo").slideDown(300);
			return;
		}
		else {
			$("#other-repo").slideUp(300);
		}
		if (this.value == -1) {
			
			//This means that user has selected 'Choose' option. So do nothing.
			
			return;
		}
		$("#treeview-container").text("Loading..."); //Loading message when a repository content is loading
		$.get("repo/root?root=" + this.value, function (rawData) {
			console.log(rawData);
			$("#treeview-container").html('');
			preparedData = createData(rawData); //We are preparing data for putting this in createHirearchy function
			finalData = createHirearchy(preparedData); // We are creating hierearchy using createHirearchy function
			loadTree(finalData); //we are creating tree ui here
		})
	});
	
	/*
		This function loads the content of a repo
	*/
	
	loadRoot = function(root){
		$("#treeview-container").text("Loading...");
		$.get("repo/root?root=" + root, function (rawData) {
			console.log(rawData);
			$("#treeview-container").html('');
			preparedData = createData(rawData);
			finalData = createHirearchy(preparedData);
			loadTree(finalData);
		})
	};
	
	$("#add-root").click(function() {
		
		/*
			This function add new repository.
		*/
		
		if ($("#new-repo-name").val() == "") { //if the user did not enter name of the repo
			error("Please enter repo name");
			return;
		}
		if ($("#new-repo-owner").val() == "") { //if the user did not enter name of the repo's owner
			error("Please enter new owner");
			return;
		}
		
		this.value = "Adding...";
		this.disabled = true;
		$.ajax({
			type : "get",
			data : "owner=" + $("#new-repo-owner").val() + "&name=" + $("#new-repo-name").val(),
			url : "repo/new-root",
			success : (data) => {
				if (data.err) {
					alert("Some error occured. Check console for more details");
					console.error(data);
				}
				this.value = "Add";
				this.disabled = false;
				success("Repo Added");
				initRoots();
			},
			error : (err) => {
				this.value = "Add";
				this.disabled = false;
				error("Could not add this repo");
			}
		})
	});
	
	/*
		The following function renames a node
	*/
	
	$("#rename-node").click(function() {
		if (!currentNode && currentNode !== 0) {
			error("No node selected");
			return;
		}
		if ($("#node-new-name").val() == "") {
			error("Please enter new name");
			return;
		}
		this.value = "Renaming...";
		this.disabled = true;
		$.ajax({
			type : "post",
			url : "repo/rename-node",
			data : "node=" + currentNode + "&new_name=" + $("#node-new-name").val() + "&root=" + currentRoot,
			success : (data) => {
				this.value = "Rename";
				this.disabled = false;
				console.log(data);
				success("Renamed Successfully");
				loadRoot(currentRoot);
			},
			error : (err) => {
				this.value = "Rename";
				this.disabled = false;
				console.log(err);
				error("Could not rename due to some error");
			}
		})
	});
	initRoots();
});

function error(message) {
	alert(message + " Check log for details.");
}
function success(message) {
	alert(message);
}