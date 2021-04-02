const { Router } = require("express")

const flavorsController = require("../controllers/flavorsController")

const router = Router()

// router.get(", ex flavourController.gfdgdfgfgd")

router.get("/flavors", flavorsController.getAllFlavors)
router.get("/flavors/:id", flavorsController.getOneFlavor)
router.post("/flavors", flavorsController.createFlavor)
router.delete("/flavors/:id", flavorsController.deleteOne)
router.patch("flavors/:id", flavorsController.updateFlavorById)



module.exports = router