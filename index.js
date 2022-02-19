$(() => {
  
	// add the input to the assignment list
	let addAssignment = () => {
		const value = $(".input").val();
    	$(".list").append(`<li>${value}</li>`);
	}

	// run addAssignment when the form is submited
	$(".form").on("submit", e => {
		e.preventDefault();
		addAssignment();
	});

   	// make an array of all the li elements
	let list = $(".list").children();
	// turn list intto a string
	let listArray = list.toArray();

	for (let i = 0; i < listArray.length; i++) {
		console.log(listArray[i].innerHTML);
	}

	let lastItemInArray = listArray.at(-1).innerHTML;

	document.cookie = `list: ${lastItemInArray}; SameSite=Lax;`;

	console.log(document.cookie);

});
