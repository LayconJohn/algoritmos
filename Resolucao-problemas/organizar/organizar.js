function organizar(items) {
    const shelf = [];
    const sortedItems = items.sort((a, b) => a - b)
    console.log(sortedItems)
    const diff = items.length % 3;
    while(sortedItems.length > diff) {
        shelf.push([sortedItems[0], sortedItems[1], sortedItems[sortedItems.length - 1]]);
        sortedItems.pop()
        sortedItems.shift()
        sortedItems.shift()
    }
    
    sortedItems.length > 0 && shelf.push(sortedItems);
    return shelf;
}

console.log(organizar([4, 20, 10, 1, 1, 1, 20]));