const { getadminResturant, getadminOrder, getadminCustomer } = require("../controllers/admin.controller")

const router = require("express").Router()
router
    .get("/admin-allresturant", getadminResturant)
    .get("/admin-allorders", getadminOrder)
    .get("/admin-allcustomers", getadminCustomer)

module.exports = router