const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statSchema = new Schema({
 name: {
  type: String
 },
 activity: {
  type: String
 },
 stats: {
  type: String
 },
 date: {
  type: Date,
  default: Date.now
 }
});

module.exports = mongoose.model('Stats', statSchema);
