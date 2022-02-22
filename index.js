$(() => {
  
	let oldListElements = [];
	let newCookie = document.cookie.split(",");
	
	if (document.cookie === "") {
		alert("No Assignments");
	} else {
		for (let i = 0; i < newCookie.length; i++) {
			oldListElements.push(`<li>${newCookie[i]}</li>`);
		}

		$(".list").html(oldListElements);
	}

	// add the input to the assignment list
	function addAssignment() {
		const value = $(".input").val();
		$(".list").append(`<li>${value}</li>`);
		let list = $(".list").children();
		let listArray = list.toArray();
		let listElemets = [];

		for (let i = 0; i < listArray.length; i++) {
			listElemets.push(listArray[i].innerHTML);
		}

		document.cookie = `${listElemets}; SameSite=secure;`;
		console.table(listElemets);
	}

	// run addAssignment when the form is submited
	$(".form").on("submit", e => {
		e.preventDefault();
		addAssignment();
	});

});
