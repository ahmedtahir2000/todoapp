function add(){
var item=document.getElementById("new-task");
var ul=document.getElementById("incomplete-tasks");
var li=document.createElement("li");
var text=document.createTextNode(item.value);
li.appendChild(text)
var edit=document.createElement("button");
var textbtn=document.createTextNode("Edit");
edit.appendChild(textbtn);
li.appendChild(edit);
edit.setAttribute("class", "edit");
edit.setAttribute("onclick","editItem(this);");
var del=document.createElement("button");
var textbtndel=document.createTextNode("Delete");
del.setAttribute("class", "delete");
del.setAttribute("onclick","deleteItem(this);");
del.appendChild(textbtndel);
li.appendChild(del);


ul.appendChild(li);
item.value="";
}

function deleteItem(a){
    a.parentNode.remove();
}

function editItem(a){
    var z=prompt("Edit item", a.parentNode.firstChild.nodeValue)
    a.parentNode.firstChild.nodeValue=z;
}