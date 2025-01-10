const { updateInfo, addMenu, getMenu, deleteMenu, updateMenu } = require("../controllers/resturant.controller")

const router = require("express").Router()

router
    .post("/update-info", updateInfo)
    .post("/add-menu", addMenu)

    .get("/get-menu", getMenu)

    .put("/update-menu/:mid", updateMenu)
    .delete("/delete-menu/:mid", deleteMenu)

module.exports = router