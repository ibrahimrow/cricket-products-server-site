const express = require('express');
const cors = require('cors');
const phones = require("./phones.json");
const app = express();
const port = 5000;


app.use(cors());


app.get('/', (req,res) => {
    res.send('My information Coming Soon..ek bindu valobasha a dao ami ek sindu sagor dibo tmi jantei paro ni tumay kotho valobashi amk amara motho thakte dao nije k nijer motho guchiye nibo,,,,jeta chilo nh chilo nh seta na paoay thak sob pele nosto jibon...amk amar motho thakte dao...plz')
})

app.get("/phones", (req,res) => {
    res.send(phones)
})
app.get("/phones/:id", (req,res) => {

    const id = parseInt(req.params.id);
    console.log('I need data for id :', id)
    const phone = phones.find(phone => phone.id == id) || {};
    res.send(phone);
 
})

app.listen(port, () => {
    console.log(`My Phone Server Is Reunnig on Port: ${port} `)
})