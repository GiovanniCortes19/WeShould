const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  hub: { type: mongoose.Schema.Types.ObjectId, ref: 'Hub' },
});

module.exports = mongoose.model('User', UserSchema);
