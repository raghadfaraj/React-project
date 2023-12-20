const express = require('express')
const app = express()
const path = require('path');
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html', 'htm'] }));

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.post('/calc-api', (req, res) => {
    console.log(req.body);  // for debugging
    let resObj = { "answer": req.body.n1 * req.body.n2 }
    res.send(JSON.stringify(resObj));
})

app.post('/activity-calc-api', (req, res) => {
    console.log(req.body);  // for debugging
    let answer = 0;
    switch (req.body.operator) {
        case '*':
            answer = req.body.n1 * req.body.n2;
            break;
        case '+':
            answer = req.body.n1 + req.body.n2;
            break;
            break;
        case '/':
            answer = req.body.n1 / req.body.n2;
            break;
            break;
        case '-':
            answer = req.body.n1 - req.body.n2;
            break;
    }
    let resObj = { answer }
    res.send(JSON.stringify(resObj));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})