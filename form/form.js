$(document).ready(function () {

	function submitForm(){
		let data = JSON.stringify($("#form").serializeArray());
		postDataOnPage(data);
		return false;
	  }

	function postDataOnPage(data) {
		let element = document.createElement("p");
		element.textContent = data;
		$("#result_form").append(element);
	}

	$("#form").on("submit", function(e) {
		e.preventDefault();
		submitForm();
		$.get('test.php', function() {
			alert( "It's alive!" );
		  })
		  .fail(function() {
			alert( "Something went wrong :(" );
		  })
	});
});