const express = require('express')
const app = express()
const port = 3000

app.post('/item-list', (req, res) => {
    const { numItems } = req.body;
    let stockitems = parseInt(numItems)

    if(stockitems > 0)
    {
        stockitems -= 1;
    }
    if (stockitems = 0)
    {
        stockitems = 0
    }

    res.json({ items: stockitems })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))