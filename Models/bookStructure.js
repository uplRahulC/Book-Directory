var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bookstructure =  Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    publisheddate: {
      type: String,
      maxlength: 32,
      trim: true,
    },
   
    booktype: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    author:{
name:{
    type: String,
      
      maxlength: 32,
      trim: true,
},
email:{
    type: String,
      
      maxlength: 32,
      trim: true,
}
}
  });
  module.exports = mongoose.model("Book Structure", bookstructure);