var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');

var comments = [
    { title: 'My first comment', timestamp: Date.now(), content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'}
];

/* GET users listing. */
router.get('/', function(req, res) {
    Comment.find().sort('-timestamp').exec(function(err, comments) {
        if (err) {
            res.send(500, { errors: err.error });
        } else {
            res.jsonp(comments);
        }
    });
});

router.post('/', function(req, res) {
    var comment = new Comment(req.body);

    comment.save(function(err) {
        if (err) {
            return res.send(500, { errors: err.error });
        } else {
            res.jsonp(comment);
        }
    });
});

module.exports = router;