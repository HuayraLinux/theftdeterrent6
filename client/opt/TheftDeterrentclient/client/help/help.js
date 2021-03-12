function changeTree(flag) {
	if(document.getElementById("show_tree_" + flag).style.display  == "none") {
		document.getElementById("hide_tree_" + flag).style.display  = "none";
		document.getElementById("show_tree_" + flag).style.display  = "";
		document.getElementById("tree_" + flag).style.display = "none";	  
	} else {
		document.getElementById("hide_tree_" + flag).style.display  = "";
		document.getElementById("show_tree_" + flag).style.display  = "none";
		document.getElementById("tree_" + flag).style.display = "";	  
	}
}
function showTree(tree,subTree) {
	document.getElementById("hide_tree_" + tree).style.display  = "";
	document.getElementById("show_tree_" + tree).style.display  = "none";
	document.getElementById("tree_" + tree).style.display = "";
	document.getElementById("hide_tree_" + subTree).style.display  = "";
	document.getElementById("show_tree_" + subTree).style.display  = "none";
	document.getElementById("tree_" + subTree).style.display = "";
}