class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/**
 * Solution 
 * */

function removeNthFromEnd(head: ListNode, n: number) {
    let removed = getNodeFromEnd(head, n)!;
    let previous = getNodeFromEnd(head, n + 1)!;
    if (previous) {
        previous.next = removed?.next;
        removed.next = null;
    } else {
        head = head.next!;
    }
    return head
};


/**
 * Helper Functions
 * */

function getNodeFromEnd(head: ListNode, n: number): ListNode | null {
    let size = getSize(head);
    let node: ListNode | null = head;
    let i = 0;
    while (node && i !== size - n) {
        i++;
        node = node.next;
    }
    return node;
}

function getSize(head: ListNode): number {
    let size = 0;
    let start: ListNode | null = head;
    while (start) {
        size++;
        start = start.next;
    }
    return size;
}

function printList(head: ListNode) {
    let arr: number[] = [];
    let start: ListNode | null = head;
    while (start) {
        arr.push(start.val);
        start = start.next
    }
    console.log(arr)
}
