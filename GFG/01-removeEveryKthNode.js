
function deleteK(head, k) {
    if (head === null || k <= 0) return head;

    let curr = head;
    let prev = null;
    let count = 0;

    while (curr) {
        count++;
        if (count % k === 0) {
            if (prev) {
                prev.next = curr.next
            } else {
                head = curr.next
            }
        } else {
            prev = curr
        }
        curr = curr.next
    }
    return head
}