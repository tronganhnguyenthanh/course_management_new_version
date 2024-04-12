const mongoose = require("mongoose")
const coursesSchema = new mongoose.Schema({
  thumbnail:{
   type:String
  },
  title:{
   type:String
  },
  video:{
   type:String
  }
},{
 collection:"courses"
})
module.exports = mongoose.model("coursesSchema", coursesSchema)