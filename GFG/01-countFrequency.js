// https://www.geeksforgeeks.org/write-a-function-that-counts-the-number-of-times-a-given-int-occurs-in-a-linked-list/

class Solution {
    count(head, key) {
        let curr = head;
        let counter = 0;
        while (curr) {
            counter += curr.data === key ? curr.data : 0;
            curr = curr.next;
        }
        return counter
    }
};