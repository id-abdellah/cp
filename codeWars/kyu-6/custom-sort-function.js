/*
    DESCRIPTION

    Complete the sort function so that it returns the items passed into it in alphanumerical order. Conveniently enough, the standard array sort method has been disabled for you so that you are forced to create your own.

    Example:

    sort([1,3,2]) // should return [1,2,3]
*/

function customSort(items) {
    let isSwapped;

    do {
        isSwapped = false;
        for (let i = 0; i < items.length; i++) {
            if (items[i] > items[i + 1]) {
                [items[i], items[i + 1]] = [items[i + 1], items[i]];
                isSwapped = true;
            }
        }
    } while (isSwapped)

    return items
}

console.log(customSort([2, 3, 1, 4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(customSort([2, 3, 1, 4, -5, 6, -20])); // [-20, -5, 1, 2, 3, 4, 6]