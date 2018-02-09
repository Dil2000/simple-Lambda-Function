'use strict';

module.exports.hello = (event, context, callback) => {
	const response = {
		statusCode : 200,
		body: JSON.stringify({
			message: 'Go Serverless v1.0 Your function executed successfully ! ',
			input: event,
		}),
	};
	callback(null, response);	
};

module.exports.imageResize = (event, context, callback) => {
	const response = {
		statusCode : 200,
		body: JSON.stringify({
			message: 'Resize Image !',
			input: event,
		}),
	};
	callback(null, response);	
};

module.exports.users = (event, context, callback) => {
	const response = {
		statusCode : 200,
		body: JSON.stringify({
			message: ' Create a New User ',
			input: event,
		}),
	};
};

module.exports.hello2 = function(event, context, callback){
	const response = {
		statusCode : 200,
		body: JSON.stringify({
			message: 'Testing Hello2 ! ',
		}),
	};
	callback(null, response);	
};

