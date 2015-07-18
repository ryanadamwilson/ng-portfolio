(function() {
	var app = angular.module('portfolio', []);

	app.controller('PortfolioController', function() {

		var self = this;

		self.fizzbuzz = {
			title: 'FizzBuzz Project', 
			desc: 'This project exemplifies basic JavaScript functions to create a game called FizzBuzz. In addition, all of the HTML was generated dynamically using functions, apart from the body and one div tag.',
			path: '/rwilson/FizzBuzz/',
			image: 'images/fizzbuzz.png'
		};
		self.madlib = {
			title: 'MadLib Generator', 
			desc: 'The MadLib Generator project takes user input of nouns, adjectives, verbs and adverbs to generate a Mad Lib story. It is a good, albeit basic, example of collecting data and using it to manipulate the output.', 
			path:'/rwilson/MadLib/', 
			image: 'images/mad-lib.png'
		};
		self.tictactoe = {
			title: 'Tic Tac Toe', 
			desc: 'Here I recreated the classic game of Tic Tac Toe. Grab a friend and play to your hearts content.', 
			path: '/rwilson/TicTacToe/', 
			image: 'images/tictactoe.png'
		};
		self.drCrentist = {
			title: 'Dr Crentist - Mock Website', 
			desc: 'This is an example website built for a fictional Dr. Crentist. As part of a challenge with my employees at work, we created landing pages while using only HTML and CSS, (No Bootstrap, JavaScript, jQuery, etc allowed). Notable here is my use of CSS3 animation to create a functional a appealing slider.', 
			path: '/rwilson/Crentist/', 
			image: 'images/crentist.png'
		};
		self.gallery = {
			title: 'jQuery Photo Gallery', 
			desc: 'A fully functional jQuery photo gallery that allows the user to cycle through all images and even allows users to add their own images.', 
			path: '/rwilson/Gallery/', 
			image: 'images/gallery.png'
		};

		self.allProjects = [self.fizzbuzz, self.madlib, self.tictactoe, self.drCrentist, self.gallery];

	});


})();