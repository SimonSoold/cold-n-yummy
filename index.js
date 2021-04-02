const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

const bp = require("body-parser")

app.use(bp.json())

// confa router
const routes = require("./routes/routes")

app.use("/", routes)

//

require("dotenv").config()

// middlewares
const logger = require("./middleware/logger")
const headers = require("./middleware/headers")

app.use(express.json())

// errors

// listen
app.listen(PORT, () => console.log("running on port " + PORT))
