const { getadminResturant, getadminOrder, getadminCustomer, registerAdminRider, getAdminRider, updateAdminRider, updateRiderAccount, getAdminActiveRider, assignRider } = require("../controllers/admin.controller")

const router = require("express").Router()
router
    .get("/admin-allresturant", getadminResturant)
    .get("/admin-allorders", getadminOrder)
    .get("/admin-allcustomers", getadminCustomer)

    .post("/register-rider", registerAdminRider)
    .get("/get-rider", getAdminRider)
    .put("/update-rider/:rid", updateAdminRider)
    .put("/update-rider-account/:rid", updateRiderAccount)

    .get("/get-active-rider", getAdminActiveRider)
    .put("/assign-rider/:oid", assignRider)

module.exports = router