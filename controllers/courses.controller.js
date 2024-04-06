// Import model
const coursesModel = require("../models/courses.model")
// Define handling requests
const addNewCourse = async (req, res) => {
  try{
   let courses = new coursesModel({
     thumbnail:req.body.thumbnail,
     title:req.body.title,
     description:req.body.description  
   })
   await courses.save()
   res.json(courses)
  }catch(error){
    res.status(400).json({message:error})  
 }
}

const getListCourse = async (req, res) => {
 try{
  let listCourse = await coursesModel.find()
  res.json(listCourse)
 }catch (error){
   res.status(400).json({message:error}) 
 } 
}

const updateCourse = async (req, res) => {
  try{
    let _id = req.params._id
    let updateBody = req.body
    let updateCourse = await coursesModel.findByIdAndUpdate(_id, updateBody, {new:true})
    res.json(updateCourse)
  }catch(error){
    res.status(400).json({message:error})
  }
}

const filterCourseByTitle = async (req, res) => {
  try{
    let title = req.query.title
    let filterByTitle = await coursesModel.find({title:title})
    res.json(filterByTitle)
  }catch(error){
    res.status(400).json({message:error})   
  }
}

const deleteCourseById = async (req, res) => {
  try{
    let _id = req.params._id
    await coursesModel.findByIdAndDelete(_id)
    res.json({message:"Course deleted successfully"})
  }catch(error){
    res.status(400).json({message:error})  
  }
}

module.exports = {
 addNewCourse,
 getListCourse,
 updateCourse,
 filterCourseByTitle,
 deleteCourseById
}