window.onload=loadList
function loadList(){
    if (localStorage.getItem("toDos") != null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));
    let listNode=document.getElementById('myUL')
        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            var listElement=document.createElement('li')
            var listElementText=document.createTextNode(toDo.task)
            if (toDo.completed){
                listElement.className='checked'
            }
            listElement.appendChild(listElementText)
            listNode.appendChild(listElement)
            var span = document.createElement("SPAN");
            var btn=document.createElement("button")
            var txt = document.createTextNode("\u00D7");
            btn.className = "closeBtn"
            span.className = "close";
            btn.appendChild(txt)
            span.appendChild(btn);
            listElement.appendChild(span)
        }
    }
}
loadList()


function saveList() {
    sessionStorage.clear
    var toDos = [];
    var toDoList=document.getElementsByTagName('li')

    for (var i = 0; i < toDoList.length; i++) {
        var todo=toDoList[i].innerText
        var toDoInfo = {
            "task": todo,
            "completed": toDoList[i].classList.contains("completed")
        };

        toDos.push(toDoInfo);

    }

    localStorage.setItem("toDos", JSON.stringify(toDos));
}


var myNodelist = document.getElementsByTagName("li");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var btn=document.createElement("button")
//   var txt = document.createTextNode("\u00D7");
//   btn.className = "closeBtn"
//   span.className = "close";
//   btn.appendChild(txt)
//   span.appendChild(btn);
//   myNodelist[i].appendChild(span);
// }
var myNodelist = document.getElementsByTagName("li");
function clearList(){
    localStorage.clear()
    var i;
    var myNodelist = document.getElementsByTagName("li");
    for (i=0;i<myNodelist.length;i++){
        myNodelist[i].style.display='none'
    }
}

function clearCompleted(){
    var i;
    for (i=0;i<myNodelist.length;i++){
        if (myNodelist[i].className=='checked'){
            myNodelist[i].style.display='none'
        }
    }
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var btn = document.createElement("button")
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  btn.className = "closeBtn"
  btn.appendChild(txt);
  span.appendChild(btn);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}