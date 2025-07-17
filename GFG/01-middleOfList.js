// https://www.geeksforgeeks.org/dsa/write-a-c-function-to-print-the-middle-of-the-linked-list/

function getMiddle(head) {
    const length = getLength(head)
    let curr = head;
    let count = 1;

    while (count !== Math.floor(length / 2)) {
        count++;
        curr = curr.next;
    }
    return curr.data;
}


function getLength(head) {
    let count = 0;
    let curr = head;
    while (curr) {
        count++;
        curr = curr.next;
    }
    return count
}