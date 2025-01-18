const Customer = require("../models/Customer")
const Order = require("../models/Order")
const Resturant = require("../models/Resturant")
const asyncHandler = require("express-async-handler")


exports.getadminResturant = asyncHandler(async (req, res) => {

    const result = await Resturant.find()
        .select("-createdAt -updatedAt -__v -password")
    // .populate("customer", "name hero address")
    // .populate("items.dish", "name type image price")
    // .sort({ createdAt: -1 })
    res.json({ message: "get all resturant success", result })
})

exports.getadminOrder = asyncHandler(async (req, res) => {

    const result = await Order.find()
        .select("-createdAt -updatedAt -__v -password ")
        .populate("customer", "name address")
        .populate("resturant", "name hero ")
        .populate("items", "image")
    // .sort({ createdAt: -1 })
    res.json({ message: "get all order success", result })
})

exports.getadminCustomer = asyncHandler(async (req, res) => {

    const result = await Customer.find()
        .select("-createdAt -updatedAt -__v -password")
    // .populate("customer", "name hero address")
    // .populate("items.dish", "name type image price")
    // .sort({ createdAt: -1 })
    res.json({ message: "get all customer success", result })
})