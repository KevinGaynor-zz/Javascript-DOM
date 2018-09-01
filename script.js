var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var myul = document.getElementById("mylist");

function inputLength() {
	return input.value.length;
}

function addToListviaClick(event)
{
	addToList();	
}

function addToListviaKey(event)
{

	if(event.keyCode === 13)
	{
		addToList();
	}
}

// Add a new li
function addToList()
{
	// Make sure there is something to add first1
	if(inputLength() > 0)
	{
		console.log(input.value.indexOf("Delete"));

		if(input.value.indexOf("Delete") === -1) 
		{
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(input.value + " "));	
			myul.appendChild(li);
			input.value = '';

			generateButtons();
		}
		else
		{
			alert("Cannot use Delete as this is a reserved word");
		}

	}

}

function setDone(event)
{
	// Get the li that is firing this event
	var thisElement = event.currentTarget;

	// Set the class to "done"
	if (thisElement.classList.contains("done"))
	{
		thisElement.classList.remove("done");
	}
	else
	{
		thisElement.className = "done";
	}

}

function removefromList(event)
{
	// Get the parent node of the button firing this event
	var thisElement = event.currentTarget.parentNode;

	// Delete the li
	thisElement.parentNode.removeChild(thisElement);
}

function generateButtons()
{
	var listItems = document.getElementsByTagName("li");
	var i;
	for (i = 0; i < listItems.length; i++) {		
		var li = listItems[i];


		if (li.innerText.indexOf("Delete") === -1)
		{
			// Add the click event to set the class to "Done"
			li.addEventListener("click", setDone, false);

			li.innerText += " ";
			// Add the button to delete the li
			var myButton = document.createElement("button");
			myButton.innerText = "Delete " + li.innerText;

			// Before actually adding, generate the click event listener
			myButton.addEventListener("click", removefromList, false);		

			// Now add the button
			li.appendChild(myButton);		
		}
	}

}

generateButtons();

button.addEventListener("click", addToListviaClick);
input.addEventListener("keypress", addToListviaKey);


