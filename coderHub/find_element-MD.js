function find_element(elements_array, element) {
    return elements_array.some(el => { return el == element })
}

console.log(find_element([1, 2, 3, 4, 5], 5)); // true