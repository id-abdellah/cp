// https://www.geeksforgeeks.org/dsa/count-nodes-circular-linked-list/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class Solution {
    static countNodes(head) {
        if (!head) return 0;
        let curr = head.next;
        let count = 1;
        while (curr !== head) {
            count++;
            curr = curr.next;
        }
        return count
    }
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = head;

console.log(Solution.countNodes(head)) // 7