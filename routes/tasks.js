var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://zdiao:123@ds121622.mlab.com:21622/mean', ['todo'])

router.get('/tasks', function(req, res, next){
	db.todo.find(function(err, todos){
		if(err){
			res.send(err);
		}
		res.json(todos);
	})
});

router.get('/task/:id', function(req, res, next){
	db.todo.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, todo){
		if(err){
			res.send(err);
		}
		res.json(todo);
	})
});

router.post('/task', function(req, res, next){
	var todo = req.body;
	if(!todo.title || (todo.isDone + '')){
		res.status(400);
		res.json({
			"error": "Bad Data"
		});
	} else {
		db.todo.save(task, function(err, todo){
			if(err){
				res.send(err);
			}
			res.json(todo);
		});
	}
});

router.delete('/task/:id', function(req, res, next){
	db.todo.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, todo){
		if(err){
			res.send(err);
		}
		res.json(todo);
	})
});

router.put('/task/:id', function(req, res, next){
	var todo = req.body;
	var updTask = {};

	if(todo.isDone){
		updTask.isDone = todo.isDone;
	}

	if(todo.title){
		updTask.title = todo.title;
	}

	if(!updTask){
		res.status(400);
		res.json({
			"error":"Bad Data"
		});
	} else {
		db.todo.update({_id: mongojs.ObjectId(req.params.id)}, updTask, {}, function(err, todo){
			if(err){
				res.send(err);
			}
			res.json(todo);
		})
	}
});

module.exports = router;