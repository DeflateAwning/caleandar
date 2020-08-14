

var calendarSettings = {
	//Color: '#999',                							//(string - color) font color of whole calendar.
	//LinkColor: '#f79838',            							//(string - color) font color of event titles. (prig:333)
	//EventClick: function(link) {window.location.href=link;},	//(function) a function that should instantiate on the click of any event. parameters passed in via data link attribute.
	
	EventTargetWholeDay: true,									//(bool) clicking on the whole date will trigger event action, as opposed to just clicking on the title.
	DisabledDays: [0, 6],										//(array of numbers) days of the week to be slightly transparent. ie: [1,6] to fade Sunday and Saturday.

	MinDateMonth: new Date(2012, 11, 1), 						// minimum allowable
	MaxDateMonth: new Date(), 									// maximum allowable (use today)

	HideHover: true,											// hide the hover text, so that you just have to click the box instead
	MakeEachCellAnchor: true									// make each cell an anchor with a link instead of requring the EventClick function
}





$(function() {


	// Loop through dates since our first day (Dec. 3, 2012)
	var events = [];
	for (var curDate = new Date(2012, 12, 3); curDate <= new Date(); curDate.setDate(curDate.getDate() + 1)) {
		var thisLink = 'https://boereport.com/' + curDate.getFullYear().toString().padStart(2, '0') + "/" + (curDate.getMonth()+1).toString().padStart(2, '0') + "/" + curDate.getDate().toString().padStart(2, '0') + "/";

		var event = {
			Date: new Date(curDate.valueOf()),

			// The anchor below creates a nested anchor tag situation, but it allows for opening links in a new window on middle mouse click, so it's better
			Title: 'BOE Report Articles on ' + curDate.getFullYear().toString().padStart(2, '0') + "-" + (curDate.getMonth()+1).toString().padStart(2, '0') + "-" + curDate.getDate().toString().padStart(2, '0'),
			//Title: '<a href="' + thisLink + '">BOE Report Articles on ' + curDate.getFullYear().toString().padStart(2, '0') + "-" + (curDate.getMonth()+1).toString().padStart(2, '0') + "-" + curDate.getDate().toString().padStart(2, '0') + "</a>",

			Link: thisLink
		}

		events.push(event);
	}


	caleandar(document.getElementById('archive-calendar'), events, calendarSettings);
})