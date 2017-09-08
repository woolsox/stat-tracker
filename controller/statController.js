var mongoose = require('mongoose'),
 Stats = mongoose.model('Stats');

exports.listAllActivities = function(req, res) {
 Stats.find({}, function(err, stats) {
  if (err)
   res.send(err);
  res.json(stats);
 });
};

exports.createActivity = function(req, res) {
 var new_activity = new Stats(req.body);
 new_activity.save(function(err, stats) {
  if (err)
   res.send(err);
  res.json(stats);
 });
};

exports.readActivity = function(req, res) {
 Stats.findById(req.params.statsId, function(err, stats) {
  if (err)
   res.send(err);
  res.json(stats);
 });
};

exports.updateActivity = function(req, res) {
 Stats.findOneAndUpdate({
  _id: req.params.statsId
 }, req.body, {
  new: true
}, function(err, stats) {
  if (err)
   res.send(err);
  res.json(stats);
 });
};

exports.deleteActivity = function(req, res) {
 Stats.remove({
  _id: req.params.statsId
}, function(err, stats) {
  if (err)
   res.send(err);
  res.json({
   message: 'Activity successfully deleted'
  });
 });
};
