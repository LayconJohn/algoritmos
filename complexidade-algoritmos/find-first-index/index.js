function findFirstIndex(lst, target){
    let left = 0;
    let rigth = lst.length - 1
    let index;

    if(lst[0] === target) return 0

    while (left <= rigth) {
        const middle = Math.floor((left + rigth)/2)
        const element = lst[middle]
        if (target === element) {
            index = middle;
            rigth = middle - 1
        } else if (target > element) {
            left = middle + 1
        } else {
            rigth = middle - 1
        }
    }
    return index ? index : -1
    
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11, 12, 13, 14, 15];
const target = 10;

console.log(findFirstIndex(arr, target));