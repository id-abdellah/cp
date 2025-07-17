class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class Solution {
    static printList(head) {
        if (!head) return null
        let headRef = head;
        let curr = head.next;
        let arr = [head.data];
        while (curr !== headRef) {
            arr.push(curr.data);
            curr = curr.next;
        }
        return arr;
    }
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = head;

console.log(Solution.printList(head))