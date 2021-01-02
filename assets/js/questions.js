$(document).ready(function () {
	//get dom variables

	//determines which button is clicked
	var option1 = $("#option1");
	var option2 = $("#option2");
	var option3 = $("#option3");
	var option4 = $("#option4");

	var btnNext = $("#nextBtn");

	var qContainer = $("#questionContainer");

	var queryQuestions = {
		questions: [
			"What areas of your life do you want to change?",
			"What drives you?",
			"If you could have one dream vacation, where would you travel?",
			"What have you always wanted to do but never had the courage to do?",
			"What makes you happy?",
		],
	};
	var queryAnswers = {
		questionOne: {
			answers: ["Work", "School", "Relationships", "Health"],
		},
		questionTwo: {
			answers: ["Money", "Recognition", "Power", "Passion", "Helping others"],
		},
		questionThree: {
			answers: ["Islands", "Mountains", "Beach", "Country"],
		},
		questionFour: {
			answers: ["Travel", "Sports activities", "Go back to school"],
		},
		questionFive: {
			answers: ["Money", "Family", "Helping others", "Fun"],
		},
	};

	//when next button is clicked then go to next question
	//counter variable
	var count = 0;
	$(qContainer).text(queryQuestions.questions[count]);
	$(option1).text(queryAnswers.questionOne.answers[0]);
	$(option2).text(queryAnswers.questionOne.answers[1]);
	$(option3).text(queryAnswers.questionOne.answers[2]);
	$(option4).text(queryAnswers.questionOne.answers[3]);

	$(btnNext).click(function (event) {
		event.preventDefault();
		// console.log("help");
		count++;
		console.log("count:" + count);
		$(qContainer).text(queryQuestions.questions[count]);
		if (count == 1) {
			$(option1).text(queryAnswers.questionTwo.answers[0]);
			$(option2).text(queryAnswers.questionTwo.answers[1]);
			$(option3).text(queryAnswers.questionTwo.answers[2]);
			$(option4).text(queryAnswers.questionTwo.answers[3]);
		} else if (count == 2) {
			$(option1).text(queryAnswers.questionThree.answers[0]);
			$(option2).text(queryAnswers.questionThree.answers[1]);
			$(option3).text(queryAnswers.questionThree.answers[2]);
			$(option4).text(queryAnswers.questionThree.answers[3]);
		} else if (count == 3) {
			console.log("made it to 3");
			$(option1).text(queryAnswers.questionFour.answers[0]);
			$(option2).text(queryAnswers.questionFour.answers[1]);
			$(option3).text(queryAnswers.questionFour.answers[2]);
			$(option4).text(queryAnswers.questionFour.answers[3]);
		} else if (count == 4) {
			$(option1).text(queryAnswers.questionFive.answers[0]);
			$(option2).text(queryAnswers.questionFive.answers[1]);
			$(option3).text(queryAnswers.questionFive.answers[2]);
			$(option4).text(queryAnswers.questionFive.answers[3]);
		} else {
			window.location = "finalpage.html";
		}
	});
});
