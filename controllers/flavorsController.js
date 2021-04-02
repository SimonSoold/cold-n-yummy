const flavorsModel = require("../models/flavorsModel")

const getAllFlavors = async (req, res, next) => {
  try {
    const data = await flavorsModel.allFlavors()
    res.status(201).json(data)
  } catch (error) {
    next(error)
  }
}

const getOneFlavor = async (req, res, next) => {
  const { id } = req.params
  if (!id) {
    return res.status(400).json({ error: "Invalid body, missing id" })
  }
  try {
    const result = await flavorsModel.getFlavorById(id)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const createFlavor = async (req, res, next) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({ error: "Invalid body" })
  }
  try {
    const data = await flavorsModel.createFlavor(name)
    res.status(201).json(data)
  } catch (error) {
    next(error)
  }
}

const updateFlavorById = async (req, res, next) => {
  const { id } = req.params
  const { name } = req.body
  if (!id || name) {
    return res.status(400).json({ error: "Invalid body, missing id" })
  }
  try {
    const data = await flavorsModel.uppdateFlavorById(id, name)
    res.status(201).json(data)
  } catch (error) {
    next(error)
  }
}

const deleteOne = async (req, res, next) => {
  const { id } = req.params
  if (!id) {
    return res.status(400).json({ error: "Invalid Body, missing id" })
    s
  }
  try {
    const data = await flavorsModel.deleteOne(id)
    res.status(201).json(data)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAllFlavors,
  getOneFlavor,
  createFlavor,
  updateFlavorById,
  deleteOne,
}
