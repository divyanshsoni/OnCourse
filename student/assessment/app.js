/*---------------------------------------
Directives & Controller of Assessment app:
a. Score Card
b. Assignment Panel
c. Registration Widget
d. Result Panel
---------------------------------------*/

var app = angular.module('assessment', ['cms', 'result']);

// Score Card ------------------------
app.directive('scoreCard', function(){
	return {
		restrict: 'E',
		templateUrl: 'score-card.html'
	};
});

// Assignment Panel ------------------------
app.directive('assignmentPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'assignment-panel.html'
	};
});

// Registration Panel ------------------------
app.directive('registrationWidget', function(){
	return {
		restrict: 'E',
		templateUrl: 'registration-widget.html'
	};
});

// Result Panel ------------------------
app.directive('resultPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'result-panel.html'
	};
});

// Score Card Controller
app.controller('scoreCardCtrl', function($scope){
	$scope.scores = [{
		semester: 1,
		totalScore: "71.23",
		totalCredits: "30"
	},
	{
		semester: 2,
		totalScore: "56.77",
		totalCredits: "30"
	},
	{
		semester: 3,
		totalScore: "71.23",
		totalCredits: "30"
	},
	{
		semester: 4,
		totalScore: "70.66",
		totalCredits: "30"
	},
	{
		semester: 5,
		totalScore: "65.66",
		totalCredits: "30"
	}];

	$scope.result = {
		spi: "65.66",
		creditsGained: "120",
		activeBacks: "0",
		clearedBacks: "2"
	}
});

app.factory('assignmentService', function($http) {
	return {
		getAssignment : function() {
			return $http.get("http://127.0.0.1:8000/assessment/retrieveAssignmentByBranch").then(function(response) {
				return response.data;
			});
		}
	}
});

app.factory('assignmentResponseService', function($http) {
	return {
		getAssignmentResponse : function() {
			return $http.get("http://127.0.0.1:8000/assessment/retrieveAssignmentResponsesByStudent?rollNo="+"2K12/SE/059").then(function(response) {
				return response.data;
			});
		}
	}
});

// Assignment Panel Controller
app.controller('assignmentPanelCtrl', function($scope,assignmentService,assignmentResponseService){
	// assignments
	$scope.assignment=[];
	assignmentService.getAssignment().then(function(assignments){
		if(assignments.hasOwnProperty('exception')){
			alert(assignments.exception);
		}else{
			$scope.assignment = assignments.assignment;

		}
		
		
		console.log(assignments);
	});

	$scope.assignmentGrades=[];
	assignmentResponseService.getAssignmentResponse().then(function(grades){
		if(grades.hasOwnProperty('exception')){
			alert(grades.exception);
		}else{
			$scope.assignmentGrades = grades.assignment;

		}
		
		
		console.log($scope.assignmentGrades);
	});
		/*
	$scope.assignments = [{
		assignmentCode: "SE301A",
		course: "SE 301",
		link: "assignment_12_02_2016.pdf",
		deadline: "27-12-2016",
		comments: "Sent in PDF format"
	},
	{
		assignmentCode: "SE301A",
		course: "SE 301",
		link: "assignment_12_02_2016.pdf",
		deadline: "27-12-2016",
		comments: "Sent in PDF format"
	},
	{
		assignmentCode: "SE301A",
		course: "SE 301",
		link: "assignment_12_02_2016.pdf",
		deadline: "27-12-2016",
		comments: "Sent in PDF format"
	},
	{
		assignmentCode: "SE301A",
		course: "SE 301",
		link: "assignment_12_02_2016.pdf",
		deadline: "27-12-2016",
		comments: "Sent in PDF format"
	},
	{
		assignmentCode: "SE301A",
		course: "SE 301",
		link: "assignment_12_02_2016.pdf",
		deadline: "27-12-2016",
		comments: "Sent in PDF format"
	}];

	// assignment grades
	$scope.assignmentGrades = [{
		assignmentCode: "SE301A",
		course: "SE 301",
		responseLink: "",
		grade: "B",
		submissionDate: "",
		status:"Not submitted"
	},
	{
		assignmentCode: "SE301A",
		course: "SE 301",
		responseLink: "assignment_12_02_2016.pdf",
		grade: "B",
		submissionDate: "2016-05-12",
		status:"To be evaluated"
	},
	{
		assignmentCode: "SE301A",
		course: "SE 301",
		responseLink: "assignment_12_02_2016.pdf",
		grade: "B",
		submissionDate: "2016-05-12",
		status:"Submitted"
	},
	{
		assignmentCode: "SE301A",
		course: "SE 301",
		responseLink: "assignment_12_02_2016.pdf",
		grade: "B",
		submissionDate: "2016-05-12",
		status:"To be evaluated"
	}];*/

});
