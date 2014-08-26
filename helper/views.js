var jade = require('koa-jade');

exports.views = function () {
	return jade.middleware({ viewPath:__dirname + '/../views' });
}
