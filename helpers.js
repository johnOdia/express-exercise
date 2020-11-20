let itemsId = 0

const addItem = item => {
    itemsId++
    return {
        name: item.name,
        id: itemsId
    }
}

const findItem = (item, arr) => arr.find(val => val.id === Number(item.id))

const updateItem = (arr, id, queryString) => {
    let item = findItem(id, arr)

    if (item) return arr[Number(id.id) - 1].name = queryString
}




module.exports = {
    addItem: addItem,
    findItem: findItem,
    updateItem: updateItem
}