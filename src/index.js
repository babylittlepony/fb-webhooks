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

// curl -X GET "localhost:3000/webhook?hub.verify_token=EAAHZAixIRsU4BADEgiqFCCr9trfUin576pa2tqbRe2LvcZAtVyteX6ci6LlZBx3rh16JV1quBJ1TysKXZBwK4fcYfGhnS6EwBvua4ZBBdFPe0NnZAhrEL2cM4LMxgZC1a8h5Gm47PuXT8YJnyvLo8umhw37ZARG9Gpn5CMVq98mgIzolpTgZAoSeD&hub.challenge=CHALLENGE_ACCEPTED&hub.mode=subscribe"
