const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HubSchema = new Schema({
  name: String,
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  movies: [{ type: String }],
  restaurants: [{ type: String }],
});

module.exports = mongoose.model('Hub', HubSchema);
