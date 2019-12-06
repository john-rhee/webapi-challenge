const server = require("./server.js")

const port = 7002;
server.listen(port, () => {
    console.log(`***Server running on ${port}***`)
})