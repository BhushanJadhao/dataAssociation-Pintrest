const mongoose = require('mongoose');
const plm =require("passport-local-mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/pintrest");

// Define a Mongoose schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  posts: [{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Post"
  }],
  dp: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullname:{
    type:String,
  } 
});

// Create a Mongoose model based on the schema
userSchema.plugin(plm);

module.exports= mongoose.model('User', userSchema);

