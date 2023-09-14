const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())


app.get('/sound/:name', (req, res) => {
    const { name } = req.params

    if (name == "1") {
        res.json({ 'sound': '잘했다능^^' })
    } else {
        res.json({ 'sound': '아니라능!!' })
    }

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})