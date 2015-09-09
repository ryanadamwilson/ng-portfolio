(function() {
	var app = angular.module('portfolio', []);

	app.controller('PortfolioController', function() {

		var self = this;

		self.liquidfiber = {
			title: 'Liquid Fiber',
			desc: 'This is a site I built for my current company. Most notable is my comprehensive use of responsive design. View this site at any pixel width and it will look clean and well-structured. This is built using HTML5/CSS3, JavaScript, jQuery, and the Booststrap framework, in addition to the Kentico CMS. All copyright is reserved by Nature\'s Way and Schwabe North America.',
			path: 'http://www.liquidfiber.com',
			image: 'images/liquidfiber.png'
		};
		self.fizzbuzz = {
			title: 'FizzBuzz Project', 
			desc: 'This project exemplifies basic JavaScript functions to create a game called FizzBuzz. In addition, all of the HTML was generated dynamically using functions, apart from the body tag and one div tag.',
			path: '/fizzbuzz/angular/',
			image: 'images/fizzbuzz.png'
		};
		self.madlib = {
			title: 'MadLib Generator', 
			desc: 'The MadLib Generator project takes user input of nouns, adjectives, verbs and adverbs to generate a Mad Lib story. It is a good, albeit basic, example of collecting data and using it to manipulate the output.', 
			path:'/madlib/', 
			image: 'images/mad-lib.png'
		};
		self.tictactoe = {
			title: 'Tic Tac Toe', 
			desc: 'Here I recreated the classic game of Tic Tac Toe. Grab a friend and play to your hearts content.', 
			path: '/tictactoe/', 
			image: 'images/tictactoe.png'
		};
		self.drCrentist = {
			title: 'Dr Crentist - Mock Website', 
			desc: 'This is an example website built for a fictional Dr. Crentist. As part of a challenge with my employees at work, we created landing pages while using only HTML and CSS, (No Bootstrap, JavaScript, jQuery, etc allowed). Notable here is my use of CSS3 animation to create a functional and appealing slider.', 
			path: '/crentist/', 
			image: 'images/crentist.png'
		};
		self.gallery = {
			title: 'jQuery Photo Gallery', 
			desc: 'A fully functional jQuery photo gallery that allows the user to cycle through all images and even allows users to add their own images.', 
			path: '/gallery/', 
			image: 'images/gallery.png'
		};

		self.allProjects = [self.liquidfiber, self.fizzbuzz, self.madlib, self.tictactoe, self.drCrentist, self.gallery];

	});


})();