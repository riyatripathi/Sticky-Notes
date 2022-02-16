console.log("Its Magic Note...");
showNotes();

let addBtn = document.getElementById('addBtn');
  addBtn.addEventListener("click",function(e){
  	console.log("Inside fun1.");
	let addTxt = document.getElementById('addTxt');
	console.log(addTxt.value);
	let notes = localStorage.getItem('notes');
	if(notes == null){
		notesObj = [];
	}
	else {
	  notesObj = JSON.parse(notes);
	}
	notesObj.push(addTxt.value);
	localStorage.setItem("notes",JSON.stringify(notesObj));
	addTxt.value = "";
	showNotes();
		
  });
  function showNotes(){
  	let notes= localStorage.getItem('notes');
  	if(notes == null){
		notesObj = [];
	}
	else {
	  notesObj = JSON.parse(notes);
	}
	let html="";
	notesObj.forEach(function(element,index){
		html+=`
	    <div class="noteCard my-2 mx-2 card cd" style="width: 18rem;">
			  <div class="card-body noteShadow">
			      <h5 class="card-title">Note ${index+1} </h5>
			      <p class="card-text"> ${element} </p>
			      <button id="${index}" onclick="deleteNode(this.id)" class="btn btn-primary">Delete Note</button>
			  </div>
		</div>`;
	});
	let notesElm = document.getElementById('notes');
	if(notesObj.length !=0){
		notesElm.innerHTML = html;
		document.getElementById('empty').innerHTML =  '';

	}
	else{
		document.getElementById('empty').innerHTML =  `<b> NO NOTES YET <br>Go to "ADD A NOTE" to add Notes.</b>`;
		document.getElementById('empty').style.color = "black";
		document.getElementById('empty').style.textAlign = "center";
	}
  }

  function deleteNode(index){
  	console.log("Gonna Delete",index);
  	let notes = localStorage.getItem("notes");
  	if(notes == null){
		notesObj = [];
	}
	else {
	  notesObj = JSON.parse(notes);
	}
  	notesObj.splice(index,1);
  	localStorage.setItem("notes",JSON.stringify(notesObj));
  	showNotes();
  	window.location.reload();
  }

 let search = document.getElementById("searchTxt");
	 search.addEventListener("input", function(){
	
	let inputVal = search.value;
	if(inputVal == '') window.location.reload();
	console.log("input fire", 'inputVal');
	let noteCards = document.getElementsByClassName('noteCard');
		let i=0;
	Array.from(noteCards).forEach(function(element){
			console.log("inside--");
	let cardTxt = document.getElementsByTagName("p")[i].innerText;
	// console.log(cardTxt);
	document.getElementById("searchg").addEventListener('click',function(e){
		e.preventDefault();
		console.log('you have clicked');
		if(cardTxt .includes(inputVal)){
		element.style.display = "block";
	}else{
		element.style.display = "none";
	}
	})	
	i++;
	})
});