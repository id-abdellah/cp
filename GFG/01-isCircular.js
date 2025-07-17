// https://www.geeksforgeeks.org/check-if-a-linked-list-is-circular-linked-list/

class Solution {
    isCircular(head) {
        let curr = head.next;
        while (curr) {
            if (curr === head) return true;
            curr = curr.next;
        }
        return false;
    }
}