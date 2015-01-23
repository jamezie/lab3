'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control!");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(formClick);
}

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the element that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
       description.fadeOut( 'slow', function() {
    		description.remove(".project-description");
   		});
    }
}

function formClick(e) {
	e.preventDefault();

	var lab3field1 = $("#project-form").val();
	var lab3field2 = $("#width").val();
	var lab3field3 = $("#description").val();
	var lab3targetdiv = $("#"+lab3field1).find(".project-description");

	console.log("Values from form field: "+lab3field1+" "+lab3field2+" "+lab3field3);

	$("#"+lab3field1).append("<div class='project-description'><p>"+lab3field3+"</p></div>"); 

}