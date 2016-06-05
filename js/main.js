function askQuestions () {


var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');

var fullName = firstName + ' ' + lastName;

console.log('User\'s name is : ' + fullName);
//the thing above with a + as the 2 things will be shown (pne after the other)

var age = prompt('How old are you?');
//NOTE WHEN SET VARIABLES AND PRMOPTS - READ IT BACK TO FRONT IE 'PROMPT WITH X WILL GIVE YOU THEIR AGE'
age = parseInt(age);
//parseInt will convert the bracket thing into a numner and save as age
console.log('User is ' + age + ' years old');

if (age>= 18) {
	console.log('User is an adult.');
}
//ELSE IS AN ALTERNATIVE ACTION, IF ALWAYS IS FIRST AND ELSE ALWAYS LAST
else if (age >=13) {
	console.log ('User is a teenager.');
}
else {
	console.log('User is a child.');
}

//------ TEST

if (firstName == 'General' && lastName != 'Assembly') {
	console.log ('Hello!');
}

// USE == && ||

//------------

var faveColour = prompt('What is your favourite colour?').toLowerCase();
	if (faveColour == 'red' ||
		faveColour == 'blue' ||
		faveColour == 'green')
		{
		$ ('h1').css('color', faveColour);
	}
//ALL IF STATEMENTS IN THE BRACKET

}
//------------

// when the page loads - the below is a short cut for when the page loads - function() means 'do it' ie WHEN IF DO!! Here is is WHEN
$(function() {

	$('img'). on ('click' , askQuestions);

// when the user clicks an h3 ie find it anywhere in the code ie IF

	$('h3'). on ('click', function () {
//show or hide the next section ie DO

	//show or hide the NEXT section not the h3 element or toggle if you replace the word hide with toggle and vv
	$(this). next (). slideToggle(5000);
	// can be toggle or slideToggle or with empty brackets, the bracket number tells you how many miliseconds it should togglr

	});
//the closing of brackets should be indented to the specific action, the IFs should indent into 'children'

});