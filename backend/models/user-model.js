const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;


const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 }, 
    reflections: [{ type: mongoose.Types.ObjectId, ref: 'Reflections'}]
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);


