const express = require('express')
const app = express()

require("dotenv/config")

const api = process.env.API_URL

app.listen(3000, () => {
    console.log(api);
    console.log("server is running in 3000 port")
})