const express = require('express')
const { addItem, findItem, updateItem } = require('./helpers')
const app = express()


const PORT = process.env.PORT || 3000;

const shoppingList = [{name:'laptop',id:1},{name: 'desktop',id:2}]

//get shopping list
app.get('/items', (req, res) => {
    res.status(200).send(shoppingList)
})

//add items to shopping list
app.post('/items', (req, res) => {
    const recievedItem = addItem(req.query)

    if (recievedItem) {
        shoppingList.push(recievedItem)
        res.status(201).send(recievedItem)
    }
    else res.status(400).send('Unable to add item')
})

//get item by id
app.get('/items/:id', (req,res) => {
    const item = findItem(req.params,shoppingList)
    
    if(item) res.status(200).send(item)
    else res.status(404).send('Not found!')
})

//update an item
app.patch('/items/:id',(req,res) => {
    const item = updateItem(shoppingList,req.params,req.query.name)

    if(item) res.status(201).send(item)
    else res.status(404).send('item not found!')
})

//delete an item
app.delete('/items/:id',(req,res) => {    
    const item = findItem(req.params,shoppingList)
    
    if (item){
        shoppingList.splice((item.id - 1),1)
        res.status(204).send('Item removed!')
    }
    else res.status(404).send('item not found!')
})



app.listen(PORT, () => {
    console.log('listening on port 3000')
})