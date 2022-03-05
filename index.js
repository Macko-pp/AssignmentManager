$(() => {
  
	let oldListElements = [];
	let newCookie = document.cookie.split(",");
	
	if (document.cookie === "") {
		alert("No Assignments");
		
	} else {
		for (let i = 0; i < newCookie.length; i++) {
			if (newCookie[i] == "") {
				delete newCookie[i];
				continue
			}
			oldListElements.push(`<input type="checkbox"> <nobr> ${newCookie[i]} </nobr> <br>`);
		}

		console.log(oldListElements)

		$("label").html(oldListElements);
	}

	// add the input to the assignment list
	function addAssignment() {
		const value = $(".input").val();
		$("label").append(`<input type="checkbox"> <nobr> ${value} </nobr> <br>`);
		let list = $("label").children();
		let listArray = list.toArray();
		let listElemets = [];

		for (let i = 0; i < listArray.length; i++) {
			listElemets.push(listArray[i].innerHTML);
		}

		document.cookie = `${listElemets}; SameSite=secure;`;
	}

	// run addAssignment when the form is submited
	$(".form").on("submit", e => {
		e.preventDefault();
		addAssignment();
	});

});
