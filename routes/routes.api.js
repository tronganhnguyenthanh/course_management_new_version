const express = require("express")
const courseController = require("../controllers/courses.controller")
const routerApi = express.Router()
routerApi.post("/course/new", courseController.addNewCourse)
routerApi.get("/courses/list", courseController.getListCourse)
routerApi.get("/course", courseController.filterCourseByTitle)
routerApi.put("/course/update/:_id", courseController.updateCourse)
routerApi.delete("/course/delete/:_id", courseController.deleteCourseById)
module.exports = routerApi