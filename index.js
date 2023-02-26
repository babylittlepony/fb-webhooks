import * as dotenv from "dotenv"
dotenv.config({ debug: true })

import express from "express"
import router from "./routes/route.js"

const app = express()

function handleMessage(sender_psid, received_message) {}

function handlePostback(sender_psid, received_postback) {}

function callSendAPI(sender_psid, response) {}

app.use(express.json())

app.use(router)

app.listen(3000, () => {
  console.log("Server on Port 3000")
})

export default app
