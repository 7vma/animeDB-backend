/////////////////////////
// DEPENDENCIES
/////////////////////////
const express = require("express")
const PORT = process.env.PORT || 4000

/////////////////////////
// The Application Object
/////////////////////////
const app = express()


/////////////////////////
// Routes
/////////////////////////

// home route that says "hello world" to test server is working
app.get("/", (req, res) => {
    //res.json let's us send a response as JSON data
    res.json({
        response: "Hello World"
    })
})

/////////////////////////
// Listener
/////////////////////////
// We chose a non 3000 port because react dev server uses 3000 the highest possible port is 65535
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))