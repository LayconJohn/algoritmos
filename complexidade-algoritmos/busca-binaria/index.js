function binarySearch(list, target) {
    const sortedList = list.sort()
    let left = 0;
    let rigth = sortedList.length - 1;

    while(left <= rigth) {
        const middle = Math.floor((left + rigth)/2);
        const element = sortedList[middle];
        if(target === element) {
            return true;
        } else if (target < element) {
            rigth = middle - 1
        } else {
            left = middle + 1
        }
    }
    return false;
}

console.log(binarySearch([10, 20, 23, 25, 27, 34, 50, 60, 70, 77, 80, 90, 110], 71))