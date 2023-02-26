import * as dotenv from "dotenv"
dotenv.config({ debug: true })

import express from "express"
import router from "./routes/route.js"

const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("main/homepage")
})

app.use(express.json())
app.use(router)

app.listen(3000, () => {
  console.log("Server on Port 3000")
})

export default app
