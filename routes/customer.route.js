const { getLocation, updateCustomerInfo, getAllResturants, getResturantMenu, placeOrder, getOrders, getHistoryOrders } = require("../controllers/customer.controller")

const router = require("express").Router()

router
    .post("/get-location", getLocation)
    .post("/update-info", updateCustomerInfo)

    .get("/get-allresturants", getAllResturants)
    .get("/get-resturant-menu/:rid", getResturantMenu)

    .post("/place-order", placeOrder)
    .get("/get-order", getOrders)
    .get("/get-order-history", getHistoryOrders)
module.exports = router